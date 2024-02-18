export const initOpenai = (cpy: OpenaiModel, bal: OpenaiBit, ste: State) => {
    debugger
    return cpy;
};

export const updateOpenai = async (cpy: OpenaiModel, bal: OpenaiBit, ste: State) => {


    var auth = 'son of a mushroom'
    var out = ['here we have a body of infomation', 'what are you going to do with it']


    const { Configuration, OpenAIApi } = require('openai')

    const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
    })


    const openai = new OpenAIApi(configuration)

    var author = auth
    var content = out.join('\n')

    var love = [

        {
            "role": "system", "content": author
        },
        {
            "role": "user", "content": content
        }
    ]

    love



    var completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',

        messages: love,
    })

    var response = completion.data.choices[0].message.content


    return cpy;
};


import { OpenaiModel } from "../openai.model";
import OpenaiBit from "../fce/openai.bit";
import State from "../../99.core/state";