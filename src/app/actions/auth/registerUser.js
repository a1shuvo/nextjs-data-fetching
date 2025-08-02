"use server";

import dbConnect, { collectionNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    const { username } = payload;

    // 1. Check if the username already exists
    const existingUser = await dbConnect(collectionNames.TEST_USER).findOne({
      username,
    });

    if (existingUser) {
      return { success: false, message: "Username already taken" };
    }

    // 2. Insert the new user
    const result = await dbConnect(collectionNames.TEST_USER).insertOne(
      payload
    );

    return {
      success: true,
      message: "User registered successfully",
      data: {
        acknowledged: result.acknowledged,
        insertedId: result.insertedId.toString(), // 👈 Convert ObjectId to string
      },
    };
  } catch (error) {
    console.error("Registration error:", error);
    return null;
  }
};
