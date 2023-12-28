import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActMrk from "../../00.market.unit/market.action";
import * as ActWal from "../../01.wallet.unit/wallet.action";
import * as ActCns from "../../act/console.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

var bit, val, idx, dex, lst, dat, src;

export const initMarket = async (cpy: MarketModel, bal: MarketBit, ste: State) => {

  if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActMrk, ActWal], dat: bal.dat, src: bal.src })

  if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
  if (bal.slv != null) bal.slv({ intBit: { idx: "init-market" } });

  return cpy;
};

export const openMarket = (cpy: MarketModel, bal: MarketBit, ste: State) => {

  const { exec } = require('child_process');

  exec('npx quasar dev -m electron', async (err, stdout, stderr) => {
    if (bal.slv != null) bal.slv({ mrkBit: { idx: "open-market", dat: stdout } });
  });


  return cpy;
};



export const updateMarket = (cpy: MarketModel, bal: MarketBit, ste: State) => {

  const { exec } = require('child_process');

  exec('tsc -b 888.market', async (err, stdout, stderr) => {
    if (err) {
      console.error(`exec error: ${err}`);
    }

    bit = await ste.bus(ActPvt.BUNDLE_PIVOT, { src: "888.market" });

    bit = await ste.bus(ActDsk.READ_DISK, { src: './work/888.market.js' })
    var shade = bit.dskBit.dat;

    var writeBit = await ste.bus(ActDsk.WRITE_DISK, { src: './public/jsx/888.market.js', dat: shade })

    setTimeout(() => {
      if (bal.slv != null) bal.slv({ mrkBit: { idx: "update-market", dat: { lst: [writeBit] } } });
    }, 3);

  });


  return cpy;
};

export const deployMarket = async (cpy: MarketModel, bal: MarketBit, ste: State) => {

  bit = await ste.bus(ActDsk.COPY_DISK, { src: './dist/spa', idx: '../reptiq.com', val: 1 })

  const { exec } = require('child_process');

  exec('npm run deploy', async (err, stdout, stderr) => {
    if (bal.slv != null) bal.slv({ mrkBit: { idx: "deploy-market", dat: stdout } });
  });

  return cpy;
};

export const createMarket = (cpy: MarketModel, bal: MarketBit, ste: State) => {

  const { exec } = require('child_process');

  exec('npx quasar build', async (err, stdout, stderr) => {

    bal.slv({ mrkBit: { idx: "create-market", dat: { src: '888.market' } } });

  })

  return cpy;
};



export const testMarket = (cpy: MarketModel, bal: MarketBit, ste: State) => {


  bal.slv({ mrkBit: { idx: "test-market", dat: { src: '888.market' } } });

  return cpy;
};

export const devMarket = async (cpy: MarketModel, bal: MarketBit, ste: State) => {

  bit = await ste.bus(ActMrk.UPDATE_MARKET, {})

  const { exec, fork } = require('child_process');

  process.chdir("./fictiq.com");

  exec('wrangler pages dev ./', async (err, stdout, stderr) => {
    console.log(stdout)
  })

  process.chdir("../base");

  exec('wrangler dev', async (err, stdout, stderr) => {
    console.log(stdout)
  })

  //process.chdir("../auth");

  //const forked = fork('index.js')

  //forked.on('message', (msg) => {

  //  ste.bus(ActCns.UPDATE_CONSOLE, { idx: 'cns00', src: msg })
  //});

  process.chdir("../");

  var open = require('open')
  open('http://127.0.0.1:8788/#/')

  bal.slv({ mrkBit: { idx: "dev-market", dat: { src: '888.market' } } });



  return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });



import { MarketModel } from "../market.model";
import MarketBit from "../fce/market.bit";
import State from "../../99.core/state";
