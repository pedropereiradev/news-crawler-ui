import { News } from "@/types/news";
import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search_news`)

    const data: News[] = await response.json()

    return NextResponse.json(data.news)
  } catch (error) {
    console.error('>>>ERROR FETCHING DATA', error)
    return []
  }
}
