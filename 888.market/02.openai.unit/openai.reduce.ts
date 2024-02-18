import * as clone from "clone-deep";
import * as Act from "./openai.action";
import { OpenaiModel } from "./openai.model";
import * as Buzz from "./openai.buzzer";
import State from "../99.core/state";

export function reducer(model: OpenaiModel = new OpenaiModel(), act: Act.Actions,  state?: State ) {
 switch (act.type) {
 
 case Act.UPDATE_OPENAI:
 return Buzz.updateOpenai(clone(model), act.bale, state);

 case Act.INIT_OPENAI:
 return Buzz.initOpenai(clone(model), act.bale, state);

 default:
 return model;
 }
}
