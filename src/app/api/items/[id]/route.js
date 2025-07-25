export async function GET(req, params) {
  const p = await params;
  return Response.json({ params: p });
}

export async function DELETE(req, params) {
  const p = await params;
  return Response.json({ params: p });
}

export async function PATCH(req, params) {
  const p = await params;
  return Response.json({ params: p });
}
