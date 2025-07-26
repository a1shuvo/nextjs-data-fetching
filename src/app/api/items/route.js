import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export async function GET() {
  const data = await dbConnect("test").find().sort({ createdAt: -1 }).toArray();
  return Response.json(data);
}

export async function POST(req) {
  const postedData = await req.json();
  const newProduct = {
    ...postedData,
    createdAt: new Date(),
  };
  const result = await dbConnect("test").insertOne(newProduct);
  revalidatePath("/products");
  return Response.json(result);
}
