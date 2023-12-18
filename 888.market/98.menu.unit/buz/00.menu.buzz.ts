import * as ActMnu from "../menu.action";

import * as ActMrk from "../../00.market.unit/market.action";
//import * as ActFoc from "../../01.focus.unit/focus.action";
//import * as ActPvt from "../../96.pivot.unit/pivot.action";

//import * as ActMap from "../../03.hexmap.unit/hexmap.action"

import * as ActTrm from "../../act/terminal.action";
import * as ActChc from "../../act/choice.action"; 111

import * as ActGrd from "../../act/grid.action";
import * as ActCvs from "../../act/canvas.action";
import * as ActCns from "../../act/console.action";

var bit, lst, dex, idx, dat, src;

export const initMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  if (bal == null) bal = { idx: null }

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 3, y: 0, xSpan: 1, ySpan: 12 })
  bit = await ste.bus(ActCvs.WRITE_CANVAS, { idx: 'cvs1', dat: { clr: Color.CYAN, net: bit.grdBit.dat }, })

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 4, y: 0, xSpan: 8, ySpan: 12 })
  bit = await ste.bus(ActCns.WRITE_CONSOLE, { idx: 'cns00', src: "", dat: { net: bit.grdBit.dat, src: "alligaor0" } })

  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "Market PIVOT V0" })
  bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: "-----------" })

  updateMenu(cpy, bal, ste);

  return cpy;
};

export const updateMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  lst = [ActMrk.OPEN_MARKET, ActMrk.UPDATE_MARKET, ActMrk.CREATE_MARKET]

  bit = await ste.bus(ActGrd.UPDATE_GRID, { x: 0, y: 4, xSpan: 5, ySpan: 12 })
  bit = await ste.bus(ActChc.OPEN_CHOICE, { dat: { clr0: Color.BLACK, clr1: Color.YELLOW }, src: Align.VERTICAL, lst, net: bit.grdBit.dat })

  src = bit.chcBit.src;

  switch (src) {

    case ActMrk.OPEN_MARKET:
      bit = await ste.hunt(ActMrk.OPEN_MARKET, {})


      lst = bit.mrkBit.dat.split('\n')

      var dex = lst.length;

      var next = async () => {

        if (dex == 0) {
          //updateMenu(cpy, bal, ste);
          bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '... open complete' })
          bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '..' })
          bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '.' })
          return
        }

        var itm = lst.shift()
        dex -= 1

        bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '...' + itm })

        await next()
      }

      await next()

      break;


    case ActMrk.UPDATE_MARKET:
      bit = await ste.hunt(ActMrk.UPDATE_MARKET, {})

      dat = bit.mrkBit
      if (dat == null) break
      var itm = JSON.stringify(dat)
      lst = itm.split(',')
      lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }))
      ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' })
      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'update market....' })

      break;

    case ActMrk.CREATE_MARKET:
      bit = await ste.hunt(ActMrk.CREATE_MARKET, {})

      dat = bit.mrkBit
      if (dat == null) break
      var itm = JSON.stringify(dat)
      lst = itm.split(',')
      lst.forEach((a) => ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: a }))
      ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: '------------' })
      bit = await ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: 'create market....' })


      break;

    default:
      bit = await ste.bus(ActTrm.CLOSE_TERMINAL, {})
      break;
  }


  updateMenu(cpy, bal, ste);

  return cpy;
};

export const testMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {
  return cpy;
};

export const closeMenu = async (cpy: MenuModel, bal: MenuBit, ste: State) => {

  await ste.bus(ActTrm.CLOSE_TERMINAL, {})

  return cpy;
};

export const createMenu = (cpy: MenuModel, bal: MenuBit, ste: State) => {
  debugger
  return cpy;
};

var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MenuModel } from "../menu.model";
import MenuBit from "../fce/menu.bit";
import State from "../../99.core/state";
//import { HexmapModel } from "../../03.hexmap.unit/hexmap.model";


import * as Grid from '../../val/grid';
import * as Align from '../../val/align'
import * as Color from '../../val/console-color';

import * as SHAPE from '../../val/shape'
import * as FOCUS from "../../val/focus";
import { list } from "888.market/BEE";

