import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message, token } = await request.json();

    // 1. Verify reCAPTCHA Enterprise Token
    const projectID = process.env.GOOGLE_CLOUD_PROJECT_ID;
    const apiKey = process.env.GOOGLE_CLOUD_API_KEY;
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

    const verifyUrl = `https://recaptchaenterprise.googleapis.com/v1/projects/${projectID}/assessments?key=${apiKey}`;

    const recaptchaRes = await fetch(verifyUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        event: {
          token: token,
          siteKey: siteKey,
          expectedAction: 'contact_form',
        },
      }),
    });

    const recaptchaData = await recaptchaRes.json();

    // Check if the token is valid and the score is high enough
    if (!recaptchaData.tokenProperties.valid || recaptchaData.riskAnalysis.score < 0.5) {
      console.error('Recaptcha failed:', recaptchaData);
      return NextResponse.json(
        { error: 'Bot detected. Please try again.' },
        { status: 400 }
      );
    }

    // 2. Send Email via Resend
    const { data, error } = await resend.emails.send({
      from: 'Portfolio Contact <contact@devritik.com>',
      to: 'ritik.kumar006@gmail.com',
      subject: `New Message from ${name}`,
      replyTo: email,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="background: #f4f4f5; padding: 15px; border-radius: 8px;">${message}</p>
        </div>
      `,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
