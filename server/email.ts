import { Resend } from "resend";
import type { InsertContact } from "@shared/schema";

const RECIPIENT_EMAIL = "pathuthangamuthu@gmail.com";

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

export async function sendContactEmail(contact: InsertContact): Promise<void> {
  if (!resend) {
    console.warn("RESEND_API_KEY not set — skipping contact email send.");
    return;
  }

  await resend.emails.send({
    from: "Portfolio Contact Form <onboarding@resend.dev>",
    to: RECIPIENT_EMAIL,
    replyTo: contact.email,
    subject: `[Portfolio] ${contact.subject}`,
    html: `
      <div style="font-family: sans-serif; font-size: 15px; line-height: 1.6; color: #1a1a1a;">
        <p><strong>Name:</strong> ${escapeHtml(contact.name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(contact.email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(contact.subject)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(contact.message)}</p>
      </div>
    `,
  });
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
