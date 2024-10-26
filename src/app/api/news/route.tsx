import { News } from "@/types/news";
import { NextResponse } from "next/server"

interface APIResponse {
  news: News[];
}

export async function GET(): Promise<Response> {
  try {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/search_news`)

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: APIResponse = await response.json();

    return NextResponse.json(data.news)
  } catch (error) {
    console.error('>>>ERROR FETCHING DATA', error);
    // Return a proper error response instead of empty array
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}
