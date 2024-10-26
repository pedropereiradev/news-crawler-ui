import { NewsCard } from "@/components/NewsCard";
import { News } from "@/types/news";

export async function getServerSideProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/news`);
  const data = await res.json();

  return { props: { news: data } };
}

export default async function Home({ news }: { news: News[] }) {

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
}
