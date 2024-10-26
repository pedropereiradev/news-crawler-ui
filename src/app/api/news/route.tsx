import { News } from "@/types/news";
import { NextResponse } from "next/server"
import { getApiUrl } from "@/lib/api";

interface APIResponse {
  news: News[];
}

export const dynamic = 'force-dynamic';

export async function GET(): Promise<Response> {
  try {
    const apiUrl = getApiUrl();
    const response = await fetch(`${apiUrl}/search_news`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data: APIResponse = await response.json();

    return NextResponse.json(data.news);
  } catch (error) {
    console.error('>>>ERROR FETCHING DATA', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}
