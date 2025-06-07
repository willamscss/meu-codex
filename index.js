import "dotenv/config";
import OpenAI from "openai";

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function run() {
  const chat = await openai.chat.completions.create({
    model: "gpt-4",                       // modelo GPT-4
    messages: [
      {
        role: "system",
        content: "Você é um assistente especialista em programação JavaScript/Node.js. Forneça sempre exemplos claros, bem comentados e funcionais."
      },
      {
        role: "user",
        content: "// escreva uma função em JS que some dois números"
      }
    ],
    temperature: 0.0,                     // 0.0–0.3 é recomendado para código
    max_tokens: 150
  });

  console.log(chat.choices[0].message.content);
}

run();
