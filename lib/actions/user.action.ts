"use server"
import User from "./model/user.model";
import { connectToDB } from "../db";
export async function createUser(user:any) {
    try {
        await connectToDB();
        const newUser = await User.create(user) ;
        console.log(newUser)
        return JSON.parse(JSON.stringify(newUser))
        
    } catch (error) {
        console.log(error)
        
    }
    
}