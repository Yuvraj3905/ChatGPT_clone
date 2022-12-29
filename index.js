// 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
//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
// import { Configuration, OpenAIApi } from 'openai';

const { Configuration, OpenAIApi } = require('openai');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const configuration = new Configuration({
  organization: 'org-b6C5lzjfuBUnMhXGG6FrvYWf',
  apiKey: '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',
  // apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

app.post('/', async (req, res) => {
  const { message } = req.body;
  console.log(message, 'message');
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${message}`,
    max_tokens: 100,
    temperature: 0.5,
  });
  // console.log(response);
  res.json({
    message: response.data.choices[0].text,
  });
});

// app.get('/models', async (req, res) => {
//   const response = await openai.listEngines();
//   console.log(response.data.data);
//   res.json({
//     models: response.data.data,
//   });
// });
app.listen(port, () => {
  console.log(`Example listening at http://localhost:${port}`);
});
