import * as clone from "clone-deep";
import * as Act from "./market.action";
import { MarketModel } from "./market.model";
import * as Buzz from "./market.buzzer";
import State from "../99.core/state";

export function reducer(model: MarketModel = new MarketModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_MARKET:
 return Buzz.updateMarket(clone(model), act.bale, state);

 case Act.INIT_MARKET:
 return Buzz.initMarket(clone(model), act.bale, state);

case Act.DEPLOY_MARKET:
 return Buzz.deployMarket(clone(model), act.bale, state);
 
case Act.OPEN_MARKET:
 return Buzz.openMarket(clone(model), act.bale, state);
 
case Act.CREATE_MARKET:
 return Buzz.createMarket(clone(model), act.bale, state);
 
case Act.TEST_MARKET:
 return Buzz.testMarket(clone(model), act.bale, state);
 
case Act.DEV_MARKET:
 return Buzz.devMarket(clone(model), act.bale, state);
 
case Act.PUBLISH_MARKET:
 return Buzz.publishMarket(clone(model), act.bale, state);
 
 default:
 return model;
 }
}
