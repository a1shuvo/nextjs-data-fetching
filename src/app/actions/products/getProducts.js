"use server";

import dbConnect from "@/lib/dbConnect";

export const getProducts = async () => {
  try {
    const data = await dbConnect("test")
      .find()
      .sort({ createdAt: -1 })
      .toArray();
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
};
