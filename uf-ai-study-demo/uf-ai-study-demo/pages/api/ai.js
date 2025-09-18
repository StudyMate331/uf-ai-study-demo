import { Configuration, OpenAIApi } from "openai"

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAIApi(configuration)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end()

  const prompt = req.body.prompt || ''
  if (!prompt) return res.status(400).json({ error: 'No prompt provided' })

  try {
    const completion = await openai.createChatCompletion({
      model: "gpt-4o-mini",
      messages: [{ role: "user", content: prompt }],
      temperature: 0.7
    })

    const answer = completion.data.choices[0].message.content
    res.status(200).json({ answer })
  } catch (err) {
    res.status(500).json({ error: err.message })
  }
}
