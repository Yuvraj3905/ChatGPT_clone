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

app.post('/', async (req, res) => {});

app.get('/models', async (req, res) => {
  const response = await openai.listEngines();
  console.log(response.data.data);
  res.json({
    models: response.data.data,
  });
});
app.listen(port, () => {
  console.log(`Example listening at http://localhost:${port}`);
});
