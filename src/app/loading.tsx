export default function Loading() {
  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">News Crawler</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
          >
            <div className="p-6 space-y-4">
              <div className="h-4 bg-gray-200 rounded animate-pulse w-3/4"></div>
              <div className="h-3 bg-gray-200 rounded animate-pulse w-1/4"></div>

              <div className="relative w-full aspect-video bg-gray-200 rounded animate-pulse"></div>

              <div className="h-10 bg-gray-200 rounded animate-pulse w-1/3"></div>
            </div>
          </div>
        ))}
      </section>
    </main>
  )
}
