import openai from 'openai';

const openaiClient = new openai.OpenAI({ apiKey: 'sUOdcl2Qd8txd8F3hiN8T3BlbkFJVwD76lvA1735NvoG6kFj', dangerouslyAllowBrowser: true });

openaiClient.complete({
    engine: 'davinci',
    prompt: 'Once upon a time',
    max_tokens: 50,
  }).then((response) => {
    console.log(response.data.choices[0].text);
  }).catch((error) => {
    console.error('Erro ao completar solicitação:', error);
  });
console.log(completion.data.choices[0].text);

export default openaiClient;