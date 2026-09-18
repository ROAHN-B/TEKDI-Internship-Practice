import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { z } from "zod";
import { usernamevalidation } from "@/Schemas/signUpSchema";
import mongoose from "mongoose";

const UserNameQuerySchema=z.object({
    username:usernamevalidation
})

export async function GET (request: Request){
    await dbConnect()
    try{
        const{searchParams} = new URL(request.url)
        const queryParam={
            username: searchParams.get('username')
        }
        //validate with ZOD
        const result=UserNameQuerySchema.safeParse(queryParam)
        console.log(result) // todo: remove
        if (!result.success){
            const usernameErrors=result.error.format().username?._errors || []
            return Response.json({
                success:false,
                message: usernameErrors?.length>0?usernameErrors.join(', '): 'Invalid query paramters',
            }, {status: 400})
        }

        const {username}= result.data
        console.log("1. Connected to Database:", mongoose.connection.name); 
        console.log("2. Searching for:", { username, isVerified: true });
        const existingVerifiedUser=await UserModel.findOne({ username, isVerified:true })
        console.log("3. Database Result:", existingVerifiedUser);
        if (existingVerifiedUser){
            return Response.json({
                success:false,
                message: 'Username is already taken',
            }, {status:400})

        }
        return Response.json({
                success:true,
                message: 'Username is available',
            }, {status:200})
    }
    catch (error){
        console.error("Error checking username", error)
        return Response.json({
            success:false,
            message:"Error in checking username"
        },
        { status:500 }
    )
    }
}