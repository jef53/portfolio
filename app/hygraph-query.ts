export const HygraphFetch = async (query: string) => {

  const data = await fetch(
    String(process.env.HYGRAPH_URL),
    {
      method: "POST",
      body: JSON.stringify({
        query: query,
      }),
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${process.env.PERMANENT_AUTH_TOKEN}`,
      },
      next: {
        revalidate: 60 * 60 * 24,
      }
    }
  ).then((res) => res.json());

  return data;
}