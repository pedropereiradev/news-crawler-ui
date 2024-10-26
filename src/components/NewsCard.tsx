import { News } from "@/types/news";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { buttonVariants } from "./ui/button";
import Link from "next/link";
import { Newspaper } from 'lucide-react'

interface Props {
  news: News;
}

export function NewsCard({ news }: Props) {
  return (
    <Card key={news.id}>
      <CardHeader>
        <CardTitle>{news.title}</CardTitle>
        <CardDescription>{news.site}</CardDescription>
      </CardHeader>
      <CardContent>
        {news.img ? (
          <div className="relative w-full aspect-video">
            <Image
              src={news.img}
              alt={news.title}
              fill
              className="object-cover rounded-md"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : (
          <div className="relative w-full aspect-video bg-muted rounded-md flex items-center justify-center">
            <Newspaper className="w-12 h-12 text-muted-foreground" />
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Link href={news.link} className={buttonVariants({ variant: "outline" })} target="_blank">Leia mais</Link>
      </CardFooter>
    </Card>
  )
}
