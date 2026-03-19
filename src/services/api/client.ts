import { getAccessToken } from "./auth";

const BASE_URL = "https://api.quran.com/api/v4";

export async function qfFetch<T>(path: string): Promise<T> {
  let token: string | undefined;
  try {
    token = await getAccessToken();
  } catch {
    // Auth may not be available — proceed without token
  }

  const headers: Record<string, string> = {
    Accept: "application/json",
  };
  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${BASE_URL}${path}`, { headers });

  if (!response.ok) {
    throw new Error(`QF API error: ${response.status} ${path}`);
  }

  return response.json();
}
