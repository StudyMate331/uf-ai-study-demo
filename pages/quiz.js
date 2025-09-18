import { useState } from 'react'
import axios from 'axios'

export default function Quiz() {
  const [topic, setTopic] = useState('')
  const [quiz, setQuiz] = useState('')

  const createQuiz = async () => {
    if (!topic) return
    try {
      const res = await axios.post('/api/ai', { prompt: `Skapa ett quiz på ämnet: ${topic}` })
      setQuiz(res.data.answer)
    } catch (err) {
      setQuiz('Fel: ' + err.message)
    }
  }

  return (
    <div className="min-h-screen p-8 flex flex-col items-center bg-gray-50">
      <h1 className="text-3xl font-bold mb-4">Skapa Quiz</h1>
      <input
        className="border rounded p-2 w-full max-w-lg mb-4"
        placeholder="Skriv ämne här..."
        value={topic}
        onChange={(e) => setTopic(e.target.value)}
      />
      <button
        onClick={createQuiz}
        className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700 mb-4"
      >
        Skapa Quiz
      </button>
      {quiz && (
        <div className="bg-white p-4 rounded shadow-md w-full max-w-lg whitespace-pre-wrap">
          <strong>AI Quiz:</strong>
          <p>{quiz}</p>
        </div>
      )}
    </div>
  )
}
