import { useState } from 'react'
import axios from 'axios'

export default function Study() {
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  const askAI = async () => {
    if (!question) return
    try {
      const res = await axios.post('/api/ai', { prompt: question })
      setAnswer(res.data.answer)
    } catch (err) {
      setAnswer('Fel: ' + err.message)
    }
  }

  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Fråga AI</h1>
      <textarea
        className="border rounded p-2 w-full max-w-lg mb-4"
        rows="4"
        placeholder="Skriv din fråga här..."
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      />
      <button
        onClick={askAI}
        className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700 mb-4"
      >
        Fråga AI
      </button>
      {answer && (
        <div className="bg-white p-4 rounded shadow-md w-full max-w-lg">
          <strong>AI svar:</strong>
          <p>{answer}</p>
        </div>
      )}
    </div>
  )
}
