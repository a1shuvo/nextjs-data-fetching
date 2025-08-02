"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postSingleData = async (postedData) => {
  try {
    const newProduct = {
      ...postedData,
      createdAt: new Date(),
    };
    const result = await dbConnect(collectionNames.TEST).insertOne(newProduct);
    revalidatePath("/products");
    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(), // ✅ Convert ObjectId to string
    };
  } catch (error) {
    console.log(error);
    return null;
  }
};
