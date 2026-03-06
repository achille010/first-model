import "dotenv/config";
import express from "express";
import OpenAI from "openai";

const router = express.Router();
const openai = new OpenAI({
  baseURL : "https://api.groq.com/openai/v1",
  apiKey : process.env.GROQ_API_KEY
});

router.post("/", async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Can't send empty prompts!" });
    }

    const completion = await openai.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content:
            "You are a very helpful and sweet, lovely assistant who speaks not as much words but not content poor, just a healthy amount of them in markdown, not to bore users",
        },
        { role: "user", content: message },
      ],
    });

    const reply = completion.choices[0].message.content;
    res.json({ reply });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

export default router;
