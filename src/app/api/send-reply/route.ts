import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { reply } = await request.json();

    if (!reply) {
      return NextResponse.json({ error: 'Reply is empty' }, { status: 400 });
    }

    // Configure the SMTP transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_PORT === '465', // true for port 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"Confession Portal" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.SMTP_USER,
      subject: "New Whisper from Confession Portal",
      text: reply,
      html: `
        <div style="font-family: sans-serif; padding: 24px; background-color: #131317; color: #e4e1e7; border-radius: 12px; border: 1px solid #353439;">
          <h2 style="color: #cebdff; margin-bottom: 20px; font-family: 'Epilogue', sans-serif;">You received a whisper!</h2>
          <p style="font-size: 16px; line-height: 1.6; padding: 20px; background-color: #1b1b1f; border-left: 4px solid #a78bfa; border-radius: 8px;">
            ${reply}
          </p>
          <p style="margin-top: 30px; font-size: 12px; color: #948e9d;">Glow Confession Portal</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('SMTP Error:', error);
    return NextResponse.json({ error: 'Failed to send email. Check SMTP settings.' }, { status: 500 });
  }
}
