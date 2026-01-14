export async function GET() {
  const res = await fetch('https://dummyjson.com/c/3029-d29f-4014-9fb4')
  const data = await res.json()

  return Response.json({ data })
}

