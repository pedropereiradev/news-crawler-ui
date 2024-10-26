export function getBaseUrl() {
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_BASE_URL || 'https://news-crawler-ui.vercel.app';
  }
  return 'http://localhost:3000';
}

export function getApiUrl() {
  if (process.env.NODE_ENV === 'production') {
    return process.env.NEXT_PUBLIC_API_URL || 'https://news-crawler-7npj.onrender.com';
  }
  return 'http://localhost:5000';
}
