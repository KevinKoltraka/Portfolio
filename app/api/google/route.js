import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const { token } = await request.json();
    const secret_key = process.env.NEXT_PUBLIC_RECAPTCHA_SECRET_KEY;

    const { data } = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify`,
      new URLSearchParams({
        secret: secret_key,
        response: token,
      })
    );

    return data.success
      ? NextResponse.json({ 
          message: "Captcha verification success!!", 
          success: true 
        })
      : NextResponse.json(
          { error: "Captcha verification failed!", success: false },
          { status: 400 }
        );
        
  } catch (error) {
    return NextResponse.json(
      { error: "Captcha verification failed!", success: false },
      { status: 500 }
    );
  }
};