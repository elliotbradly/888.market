import { Action } from "../99.core/interface/action.interface";
import  OpenaiBit  from "./fce/openai.bit";

// Openai actions

export const INIT_OPENAI = "[Openai action] Init Openai";
export class InitOpenai implements Action {
 readonly type = INIT_OPENAI;
 constructor(public bale: OpenaiBit) {}
}

export const UPDATE_OPENAI = "[Openai action] Update Openai";
export class UpdateOpenai implements Action {
 readonly type = UPDATE_OPENAI;
 constructor(public bale: OpenaiBit) {}
}

export type Actions = | InitOpenai | UpdateOpenai ;
