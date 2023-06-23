// import { Configuration, OpenAIApi } from "openai";
const openaiModule = require("openai");
const configuration = new openaiModule.Configuration({
  organization: "org-Cb0dWmaIskmQAfWcVYyZ7ety",
  apiKey: process.env.OPENAI_API_KEY,
});
const openaiConfig = async () => {
  const openai = new openaiModule.OpenAIApi(configuration);
  const response = await openai.listModels();
  console.log(response);
};

module.exports = openaiConfig();
