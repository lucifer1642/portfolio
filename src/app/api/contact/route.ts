import { NextResponse } from 'next/server';
import { z } from 'zod';
import nodemailer from 'nodemailer';

export const runtime = 'edge';

const contactSchema = z.object({
    name: z.string().min(2).max(100),
    email: z.string().email().max(255),
    subject: z.string().min(3).max(200),
    message: z.string().min(10).max(5000),
});

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
    },
});

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // Validate
        const result = contactSchema.safeParse(body);
        if (!result.success) {
            return NextResponse.json(
                { message: 'Validation error', errors: result.error.flatten().fieldErrors },
                { status: 400 }
            );
        }

        const { name, email, subject, message } = result.data;

        // Send email via Nodemailer + Gmail
        await transporter.sendMail({
            from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
            to: 'ashwinikumarkar16@gmail.com',
            replyTo: email,
            subject: `Portfolio Contact: ${subject}`,
            text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px;">
          <h2 style="color: #00D4FF;">New Portfolio Message</h2>
          <p><strong>From:</strong> ${name} (${email})</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <hr style="border: 1px solid #eee;" />
          <p style="white-space: pre-wrap;">${message}</p>
        </div>
      `,
        });

        return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json(
            { message: 'Something went wrong. Please try again.' },
            { status: 500 }
        );
    }
}
