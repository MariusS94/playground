export async function bbQuote() {
  const respondse = await fetch(
    "https://breaking-bad-quotes.herokuapp.com/v1/quotes"
  );

  if (!respondse.ok) {
    throw new Error(respond.status);
  }

  const data = await respondse.json();
  return data;
}
