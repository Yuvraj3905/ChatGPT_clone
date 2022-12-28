// 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

// import { Configuration, OpenAIApi } from 'openai';

const { Configuration, OpenAIApi } = require('openai');

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const configuration = new Configuration({
  organization: 'org-b6C5lzjfuBUnMhXGG6FrvYWf',
  apiKey: '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',
});
const openai = new OpenAIApi(configuration);

const app = express();
app.use(bodyParser.json());
app.use(cors());
const port = 3080;

app.post('/', async (req, res) => {
  const { message } = req.body;
 console.log(message,"message");
  const response = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: '${message}',
    max_tokens: 100,
    temperature: 0.5,
  });
  res.json({
    // data: response.data,
    message: response.data.choices[0].text,
  });
});
app.listen(port, () => {
  console.log(`Example listening at http://localhost:${port}`);
});
