'use client'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">News Crawler</h1>
      <div className="rounded-lg border p-6 text-center">
        <h2 className="text-xl font-semibold mb-2">Algo deu errado!</h2>
        <p className="text-gray-600 mb-4">{error.message}</p>
        <button
          onClick={() => reset()}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
        >
          Try again
        </button>
      </div>
    </main>
  )
}
