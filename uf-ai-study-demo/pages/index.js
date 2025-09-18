import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 p-8 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-4">AI Study & Learn — UF Demo</h1>
      <p className="text-lg text-gray-600 mb-8 text-center">
        Din smarta studiehjälp för skolan. Klicka på knapparna nedan för att testa AI:n.
      </p>
      <div className="space-x-4">
        <Link href="/study">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-xl shadow-md hover:bg-blue-700">
            Fråga AI
          </button>
        </Link>
        <Link href="/quiz">
          <button className="px-6 py-3 bg-green-600 text-white rounded-xl shadow-md hover:bg-green-700">
            Skapa Quiz
          </button>
        </Link>
      </div>
    </div>
  )
}
