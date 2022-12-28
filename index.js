// 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

// import { Configuration, OpenAIApi } from 'openai';

const { Configuration, OpenAIApi } = require('openai');

const express = require('express');

const configuration = new Configuration({
  organization: 'org-b6C5lzjfuBUnMhXGG6FrvYWf',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

//create a simple api

const app = express();
const port = 3080;

app.post('/', async (req, res) => {
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: 'Say this is a test',
    max_tokens: 7,
    temperature: 0,
  });
  console.log(response.data.choices[0].text);
  res.json({
    data: response.data,
  });
});
app.listen(port, () => {
  console.log(`Example listening at http://localhost:${port}`);
});
