import { NewsCard } from "@/components/NewsCard";
import { News } from "@/types/news";
import { getBaseUrl } from "@/lib/api";

export const dynamic = 'force-dynamic';

export default async function Home() {
  try {
    const baseUrl = getBaseUrl();
    const response = await fetch(`${baseUrl}/api/news`);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const news: News[] = await response.json();

    if (!news || news.length === 0) {
      return (
        <main className="p-4">
          <h1 className="text-2xl font-bold mb-4">News Crawler</h1>
          <section>
            <p>No news found</p>
          </section>
        </main>
      );
    }

    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">News Crawler</h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {news.map(report => (
            <NewsCard key={report.id} news={report} />
          ))}
        </section>
      </main>
    );
  } catch (error) {
    console.error('Error:', error);
    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-4">News Crawler</h1>
        <section>
          <p className="text-red-500">Error loading news</p>
        </section>
      </main>
    );
  }
}
