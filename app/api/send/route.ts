// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse, NextRequest } from "next/server";
import { Resend } from "resend";
import { MessageUsEmail } from "@/app/components/EmailMessage";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(req: NextRequest, res: NextResponse) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const data = await resend.emails.send({
      from: fromEmail || "",
      to: [fromEmail, email],
      subject: subject,
      react: MessageUsEmail({subject, message }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}