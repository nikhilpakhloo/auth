"use server";
import User, { IUser } from "./model/user.model";
import { connectToDB } from "../db";

export async function createUser(user: Partial<IUser>) {
  try {
    await connectToDB();

    const newUser = await User.create(user);

    console.log(newUser);

    return JSON.parse(JSON.stringify(newUser));
  } catch (error) {
    console.error("Error creating user:", error);
    throw new Error("User creation failed");
  }
}
