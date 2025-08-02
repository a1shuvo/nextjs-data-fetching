import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const p = await params;
  const singleData = await dbConnect(collectionNames.TEST).findOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(singleData);
}

export async function DELETE(req, { params }) {
  const p = await params;
  const response = await dbConnect(collectionNames.TEST).deleteOne({
    _id: new ObjectId(p.id),
  });
  return Response.json(response);
}

export async function PATCH(req, { params }) {
  const p = await params;
  const postedData = await req.json();
  const filter = { _id: new ObjectId(p.id) };
  const updatedResponse = await dbConnect(collectionNames.TEST).updateOne(
    filter,
    { $set: { ...postedData } },
    { upsert: true }
  );
  return Response.json(updatedResponse);
}
