"use server";

import dbConnect from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const postSingleData = async (postedData) => {
  try {
    const newProduct = {
      ...postedData,
      createdAt: new Date(),
    };
    const result = await dbConnect("test").insertOne(newProduct);
    revalidatePath("/products");
    return result;
  } catch (error) {
    console.log(error);
    return null;
  }
};
