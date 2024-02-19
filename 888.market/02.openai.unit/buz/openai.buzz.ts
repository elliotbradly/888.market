import * as ActVrt from "../../act/vurt.action"
import * as ActDsk from "../../act/disk.action"
import * as ActPvt from "../../act/pivot.action";

var bit, val, idx, dex, lst, dat, src;

export const initOpenai = (cpy: OpenaiModel, bal: OpenaiBit, ste: State) => {
    debugger
    return cpy;
};

export const updateOpenai = async (cpy: OpenaiModel, bal: OpenaiBit, ste: State) => {


    var auth = 'son of a mushroom'
    var out = ['tell me something', 'i never knew about alligators']

    const { Configuration, OpenAIApi } = require('openai')

   const configuration = new Configuration({
        apiKey: bal.idx,
    })


    //const openai = new OpenAIApi(configuration)

    //var author = auth
    //var content = out.join('\n')

    //var love = [

    //    {
    //        "role": "system", "content": author
    //    },
    //    {
    //        "role": "user", "content": content
    //    }
   // ]

    // love

    // var completion = await openai.createChatCompletion({
    //    model: 'gpt-3.5-turbo',

    //    messages: love,
    //})

    //var response = 'response'

    //var response = completion.data.choices[0].message.content

    bal.slv({ oaiBit: { idx: "update-openai-0", src: bal.idx } });

    return cpy;
};


import { OpenaiModel } from "../openai.model";
import OpenaiBit from "../fce/openai.bit";
import State from "../../99.core/state";