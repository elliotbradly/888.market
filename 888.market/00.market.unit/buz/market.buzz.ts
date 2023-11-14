import * as ActMnu from "../../98.menu.unit/menu.action";

import * as ActMrk from "../../00.market.unit/market.action";

import * as ActCol from "../../97.collect.unit/collect.action";
import * as ActBus from "../../99.bus.unit/bus.action";

import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

var bit, val, idx, dex, lst, dat, src;


export const initMarket = async (cpy: MarketModel, bal:MarketBit, ste: State) => {

    if (bal.dat != null) bit = await ste.hunt(ActBus.INIT_BUS, { idx: cpy.idx, lst: [ActMrk], dat: bal.dat, src: bal.src })

    if (bal.val == 1) patch(ste, ActMnu.INIT_MENU, bal);
    if (bal.slv != null) bal.slv({ intBit: { idx: "init-space" } });

 return cpy;
};

export const updateMarket = (cpy: MarketModel, bal:MarketBit, ste: State) => {
 return cpy;
};


var patch = (ste, type, bale) => ste.dispatch({ type, bale });

import { MarketModel } from "../market.model";
import MarketBit from "../fce/market.bit";
import State from "../../99.core/state";
