import { MailService } from '@sendgrid/mail';
import nodemailer from 'nodemailer';

// Check which email service to use
const useGmailSMTP = process.env.SMTP_USER && process.env.SMTP_PASS && process.env.FROM_EMAIL && process.env.TO_EMAIL;

// SendGrid setup (fallback)
const mailService = new MailService();
if (process.env.SENDGRID_API_KEY && !useGmailSMTP) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

// Gmail SMTP setup
let transporter: nodemailer.Transporter | null = null;
if (useGmailSMTP) {
  const {
    SMTP_HOST = "smtp.gmail.com",
    SMTP_PORT = "587",
    SMTP_USER,
    SMTP_PASS,
  } = process.env;

  transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465, // SSL if 465, otherwise STARTTLS
    auth: { 
      user: SMTP_USER, 
      pass: SMTP_PASS 
    }
  });

  console.log("Using Gmail SMTP for email delivery");
} else if (process.env.SENDGRID_API_KEY) {
  console.log("Using SendGrid for email delivery");
} else {
  console.warn("No email service configured - email functionality disabled");
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function nl2br(str = "") {
  return String(str).replace(/\n/g, "<br>");
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
  // Try Gmail SMTP first if configured
  if (transporter) {
    try {
      const mailOptions = {
        from: process.env.FROM_EMAIL,   // shown to recipient
        to: params.to,                  // recipient
        replyTo: params.from,          // reply goes to the original sender
        subject: params.subject,
        text: params.text,
        html: params.html
      };

      await transporter.sendMail(mailOptions);
      console.log(`Email sent via Gmail SMTP to ${params.to}`);
      return true;
    } catch (error) {
      console.error('Gmail SMTP email error:', error);
      return false;
    }
  }

  // Fallback to SendGrid
  if (!process.env.SENDGRID_API_KEY) {
    console.log('Email would be sent:', params.subject, 'to', params.to);
    return true; // Return success in dev mode without API key
  }

  try {
    const emailData: any = {
      to: params.to,
      from: params.from,
      subject: params.subject,
    };
    
    if (params.text) {
      emailData.text = params.text;
    }
    
    if (params.html) {
      emailData.html = params.html;
    }
    
    await mailService.send(emailData);
    console.log(`Email sent via SendGrid to ${params.to}`);
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

// Template for contact inquiry notification
export async function sendContactInquiryNotification(
  inquiryData: {
    name: string;
    email: string;
    phone?: string | null;
    message: string;
    inquiryType: string;
  },
  toEmail: string
): Promise<boolean> {
  const subject = `New Contact Inquiry from ${inquiryData.name}`;
  
  const text = `
New contact inquiry received:

Name: ${inquiryData.name}
Email: ${inquiryData.email}
Phone: ${inquiryData.phone || 'Not provided'}
Inquiry Type: ${inquiryData.inquiryType}

Message:
${inquiryData.message}
  `.trim();

  const html = `
    <div style="font-family:system-ui,Segoe UI,Roboto,Arial,sans-serif;line-height:1.5">
      <h2>New Contact Inquiry - Property Masters</h2>
      <p><strong>Name:</strong> ${escapeHtml(inquiryData.name)}</p>
      <p><strong>Email:</strong> <a href="mailto:${inquiryData.email}">${escapeHtml(inquiryData.email)}</a></p>
      <p><strong>Phone:</strong> ${escapeHtml(inquiryData.phone || 'Not provided')}</p>
      <p><strong>Inquiry Type:</strong> ${escapeHtml(inquiryData.inquiryType)}</p>
      <p><strong>Message:</strong><br>${nl2br(escapeHtml(inquiryData.message))}</p>
      <hr>
      <small>Sent ${new Date().toISOString()}</small>
    </div>
  `;

  return sendEmail({
    to: toEmail,
    from: inquiryData.email, // Reply-to will be the inquirer
    subject,
    text,
    html
  });
}