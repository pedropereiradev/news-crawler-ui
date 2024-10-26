import { NewsCard } from "@/components/NewsCard";
import { News } from "@/types/news";

export default async function Home() {
  const response = await fetch("http://localhost:3000/api/news")
  const data = await response.json();
  const news: News[] = data || [];

  if (news.length < 1) {
    return (
      <main>
        <h1 className="text-2xl font-bold mb-4">News Crawler</h1>
        <section>
          <p>Nenhuma noticia encontrada</p>
        </section>
      </main>
    )
  }

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">News Crawler</h1>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {news.length && news.map(report => <NewsCard key={report.id} news={report} />)}
      </section>
    </main>
  );
}
