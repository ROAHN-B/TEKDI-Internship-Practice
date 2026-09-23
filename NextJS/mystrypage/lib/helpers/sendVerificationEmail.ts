import {resend} from '@/lib/resend';
import VerificationEmail from '@/emails/VerificationEmail';
import { ApiResponse } from '@/Types/ApiResponse';

export async function sendVerificationEmail(
    email:string,
    username:string,
    VerifyCode:string
):Promise<ApiResponse>{
    try{
        await resend.emails.send({
            from:"onbording@resend.dev",
            to:email,
            subject:"Mystry messsage | Verification Code",
            react:VerificationEmail({username, otp:VerifyCode}),
        });
        return {success: true, message:'Verification emil sent successfully'}
    }
    catch(emailError){
        console.error("Email sending verification email",emailError,emailError)
        return {success: false, message:'failed to send verification email'}

    }
}