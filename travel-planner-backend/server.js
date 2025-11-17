import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
const MODEL = 'liquid/lfm-40b'; // ✅ Supported by your OpenRouter key
const OPENROUTER_API_KEY = process.env.OPENROUTER_API_KEY || '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';

app.post('/api/generate-itinerary', async (req, res) => {
  const { startLocation, destination, days, category } = req.body;

  const prompt = `Generate a ${days}-day ${category} travel itinerary starting from ${startLocation} to ${destination}. Include activities, places to visit, and suggestions for each day.`;
    console.log(prompt)
  try {
    const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${OPENROUTER_API_KEY}`
      },
      body: JSON.stringify({
        model: MODEL,
        messages: [
          { role: 'system', content: 'You are a helpful travel assistant that creates fun, detailed itineraries.' },
          { role: 'user', content: prompt }
        ],
        max_tokens: 1024,
        temperature: 0.7
      })
    });

    const data = await response.json();

    if (response.ok && data.choices?.[0]?.message?.content) {
      res.json({ itinerary: data.choices[0].message.content });
    } else {
      console.error('OpenRouter API error:', data);
      res.status(500).json({ error: 'Failed to generate itinerary.' });
    }
  } catch (error) {
    console.error('Server error:', error);
    res.status(500).json({ error: 'Internal server error.' });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
