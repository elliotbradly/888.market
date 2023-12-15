import * as clone from "clone-deep";
import * as Act from "./wallet.action";
import { WalletModel } from "./wallet.model";
import * as Buzz from "./wallet.buzzer";
import State from "../99.core/state";

export function reducer(model: WalletModel = new WalletModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_WALLET:
 return Buzz.updateWallet(clone(model), act.bale, state);

 case Act.INIT_WALLET:
 return Buzz.initWallet(clone(model), act.bale, state);

 default:
 return model;
 }
}
