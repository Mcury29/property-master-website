import nodemailer from 'nodemailer';

interface EmailData {
  fullName: string;
  email: string;
  phone?: string;
  message: string;
}

function sanitizeMessage(message: string): string {
  return message
    .replace(/<[^>]*>/g, '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;')
    .trim();
}

export async function sendContactEmail(data: EmailData): Promise<boolean> {
  const smtpHost = process.env.SMTP_HOST;
  const smtpPort = process.env.SMTP_PORT;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM;
  const smtpTo = process.env.SMTP_TO;

  if (!smtpHost || !smtpPort || !smtpUser || !smtpPass || !smtpFrom || !smtpTo) {
    console.error('Missing SMTP configuration. Required: SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM, SMTP_TO');
    throw new Error('Email service not configured');
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: parseInt(smtpPort),
    secure: false,
    auth: {
      user: smtpUser,
      pass: smtpPass,
    },
  });

  const sanitizedMessage = sanitizeMessage(data.message);

  const emailHtml = `
    <h2>New Contact Inquiry from Property Masters Website</h2>
    <p><strong>Name:</strong> ${data.fullName}</p>
    <p><strong>Email:</strong> ${data.email}</p>
    ${data.phone ? `<p><strong>Phone:</strong> ${data.phone}</p>` : ''}
    <p><strong>Message:</strong></p>
    <p style="white-space: pre-line;">${sanitizedMessage}</p>
  `;

  const emailText = `
New Contact Inquiry from Property Masters Website

Name: ${data.fullName}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}

Message:
${sanitizedMessage}
  `;

  try {
    await transporter.sendMail({
      from: smtpFrom,
      to: smtpTo,
      subject: `New Contact Inquiry from ${data.fullName}`,
      text: emailText,
      html: emailHtml,
    });

    return true;
  } catch (error) {
    console.error('Failed to send email:', error);
    throw error;
  }
}
