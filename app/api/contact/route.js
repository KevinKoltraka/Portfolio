import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import validator from 'validator'; // ✅ Added for validation & sanitization

const transporter = nodemailer.createTransport({
  service: 'gmail',
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.GMAIL_PASSKEY,
  },
  // Better connection handling
  pool: true,
  maxConnections: 3,
  maxMessages: 10
});

const sanitizeInput = (input) => validator.escape(input.trim());

const generateEmailContent = (payload) => {
  const { name, email, message: userMessage } = payload;
  
  // Sanitize all user inputs
  const sanitizedName = sanitizeInput(name);
  const sanitizedEmail = sanitizeInput(email);
  const sanitizedMessage = sanitizeInput(userMessage);

  return {
    text: `New message from ${sanitizedName}\nEmail: ${sanitizedEmail}\nMessage:\n${sanitizedMessage}`,
    html: `
      <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; background-color: #f4f4f4;">
        <div style="max-width: 600px; margin: auto; background-color: #fff; padding: 20px; border-radius: 8px;">
          <h2 style="color: #007BFF;">New Message Received</h2>
          <p><strong>Name:</strong> ${sanitizedName}</p>
          <p><strong>Email:</strong> ${sanitizedEmail}</p>
          <p><strong>Message:</strong></p>
          <blockquote style="border-left: 4px solid #007BFF; padding-left: 10px;">
            ${sanitizedMessage.replace(/\n/g, '<br>')}
          </blockquote>
        </div>
      </div>
    `
  };
};

export async function POST(request) {
  try {
    const payload = await request.json();
    
    // Validate required fields
    if (!payload.name?.trim() || !payload.email?.trim() || !payload.message?.trim()) {
      return NextResponse.json(
        { success: false, message: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    if (!validator.isEmail(payload.email)) {
      return NextResponse.json(
        { success: false, message: 'Invalid email address' },
        { status: 400 }
      );
    }

    const { text, html } = generateEmailContent(payload);

    const mailOptions = {
      from: `"Portfolio Contact" <${process.env.EMAIL_ADDRESS}>`, // Improved from address
      to: process.env.EMAIL_ADDRESS,
      subject: `New Message From ${sanitizeInput(payload.name)}`,
      text,
      html,
      replyTo: payload.email,
      headers: {
        'X-Priority': '1',
        'X-MSMail-Priority': 'High'
      }
    };

    await transporter.sendMail(mailOptions);
    
    return NextResponse.json(
      { success: true, message: 'Email sent successfully!' },
      { status: 200 }
    );

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json(
      { success: false, message: 'Server error occurred' },
      { status: 500 }
    );
  }
}