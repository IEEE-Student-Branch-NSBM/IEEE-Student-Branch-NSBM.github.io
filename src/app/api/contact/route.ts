import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { firstName, secondName, email, message } = await req.json();

    if (!firstName || !secondName || !email || !message) {
      return NextResponse.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    const mailOptions = {
      from: `"IEEE NSBM Contact Form" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `Contact Form: Message from ${firstName} ${secondName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #1e40af;">New Contact Form Submission</h2>
          <hr style="border: 1px solid #e5e7eb;" />
          <p><strong>Name:</strong> ${firstName} ${secondName}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <h3 style="color: #374151;">Message:</h3>
          <p style="background: #f3f4f6; padding: 16px; border-radius: 8px;">${message}</p>
          <hr style="border: 1px solid #e5e7eb;" />
          <p style="color: #6b7280; font-size: 12px;">
            This email was sent from the IEEE NSBM Student Branch website contact form.
          </p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully!" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 },
    );
  }
}
