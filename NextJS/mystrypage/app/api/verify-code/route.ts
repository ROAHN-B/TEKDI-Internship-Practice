import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export async function POST(request: Request) {
  await dbConnect();

  try {
    const { username, code } = await request.json();
    const decodedUsername = decodeURIComponent(username);

    console.log("Verify Request received for:", { username: decodedUsername, code });

    const user = await UserModel.findOne({ username: decodedUsername });

    if (!user) {
      return Response.json(
        {
          success: false,
          message: "User not found",
        },
        { status: 404 } // Changed from 500 to 404 for clarity
      );
    }

    // Convert both to string to avoid String vs Number strict equality bug
    const isCodeValid = String(user.verifyCode) === String(code);
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

    console.log("Validation details:", {
      enteredCode: code,
      dbCode: user.verifyCode,
      isCodeValid,
      expiryInDb: user.verifyCodeExpiry,
      isCodeNotExpired,
    });

    if (isCodeValid && isCodeNotExpired) {
      user.isVerified = true;
      await user.save();

      return Response.json(
        {
          success: true,
          message: "Account is verified successfully",
        },
        { status: 200 }
      );
    } else if (!isCodeNotExpired) {
      return Response.json(
        {
          success: false,
          message: "Verification code has expired, please signup again to get new code",
        },
        { status: 400 }
      );
    } else {
      return Response.json(
        {
          success: false,
          message: "Verification code is incorrect",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error verifying user", error);
    return Response.json(
      {
        success: false,
        message: "Error verifying user",
      },
      { status: 500 }
    );
  }
}