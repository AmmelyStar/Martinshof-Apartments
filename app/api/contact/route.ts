import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const { name, email, company, phone, message, privacy } = data;

    if (!name || !email || !message || !privacy) {
      return NextResponse.json(
        {
          message: "Bitte füllen Sie alle Pflichtfelder aus.",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Martinshof Apartments" <${process.env.SMTP_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: email,

      subject: `Neue Buchungsanfrage von ${name} | Martinshof Apartments`,

      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px;">
          <h2 style="color:#1f3b34;">
            Neue Buchungsanfrage | Martinshof Apartments
          </h2>

          <p>
            Über das Kontaktformular wurde eine neue Anfrage gesendet.
          </p>

          <hr style="border:none;border-top:1px solid #ddd;margin:20px 0;" />

          <p><strong>Name:</strong> ${name}</p>

          <p><strong>E-Mail:</strong> ${email}</p>

          <p><strong>Unternehmen:</strong> ${company || "-"}</p>

          <p><strong>Telefon:</strong> ${phone || "-"}</p>

          <p><strong>Nachricht:</strong></p>

          <div
            style="
              background:#f7f7f7;
              padding:15px;
              border-radius:8px;
              white-space:pre-wrap;
            "
          >
            ${message}
          </div>
        </div>
      `,
    });

    return NextResponse.json({
      message:
        "Vielen Dank für Ihre Anfrage! Wir haben Ihre Nachricht erhalten und werden uns schnellstmöglich bei Ihnen melden.",
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message:
          "Fehler beim Senden. Bitte versuchen Sie es später erneut.",
      },
      { status: 500 }
    );
  }
}