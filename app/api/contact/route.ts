import { ContactTemplate } from '@/app/lib/util/ContactTemplate';
import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export async function POST(req: NextRequest, res:NextResponse) {
    const body = await req.json();
    const { name, email, subject, message, sender  } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: email,
      to: email,
      subject: subject,
      react: ContactTemplate({ firstName: name, message:message, email:email }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}