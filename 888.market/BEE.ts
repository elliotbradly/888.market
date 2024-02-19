import Model from "./99.core/interface/model.interface";

import MarketUnit from "./00.market.unit/market.unit";
import WalletUnit from "./01.wallet.unit/wallet.unit";
import OpenaiUnit from "./02.openai.unit/openai.unit";
import CollectUnit from "./97.collect.unit/collect.unit";
import MenuUnit from "./98.menu.unit/menu.unit";
import BusUnit from "./99.bus.unit/bus.unit";


import Market from "./00.market.unit/fce/market.interface";
import { MarketModel } from "./00.market.unit/market.model";
import Wallet from "./01.wallet.unit/fce/wallet.interface";
import { WalletModel } from "./01.wallet.unit/wallet.model";
import Openai from "./02.openai.unit/fce/openai.interface";
import { OpenaiModel } from "./02.openai.unit/openai.model";
import Collect from "./97.collect.unit/fce/collect.interface";
import { CollectModel } from "./97.collect.unit/collect.model";
import Menu from "./98.menu.unit/fce/menu.interface";
import { MenuModel } from "./98.menu.unit/menu.model";
import Bus from "./99.bus.unit/fce/bus.interface";
import { BusModel } from "./99.bus.unit/bus.model";


export const list: Array<any> = [MarketUnit,WalletUnit,OpenaiUnit,CollectUnit,MenuUnit,BusUnit];

import * as reduceFromMarket from "./00.market.unit/market.reduce";
import * as reduceFromWallet from "./01.wallet.unit/wallet.reduce";
import * as reduceFromOpenai from "./02.openai.unit/openai.reduce";
import * as reduceFromCollect from "./97.collect.unit/collect.reduce";
import * as reduceFromMenu from "./98.menu.unit/menu.reduce";
import * as reduceFromBus from "./99.bus.unit/bus.reduce";


export const reducer: any = {
 market : reduceFromMarket.reducer, 
wallet : reduceFromWallet.reducer, 
openai : reduceFromOpenai.reducer, 
collect : reduceFromCollect.reducer, 
menu : reduceFromMenu.reducer, 
bus : reduceFromBus.reducer, 

};

export default class UnitData implements Model {
 
 market : Market = new MarketModel();
wallet : Wallet = new WalletModel();
openai : Openai = new OpenaiModel();
collect : Collect = new CollectModel();
menu : Menu = new MenuModel();
bus : Bus = new BusModel();

 
}
