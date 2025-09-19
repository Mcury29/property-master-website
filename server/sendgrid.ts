import { MailService } from '@sendgrid/mail';

if (!process.env.SENDGRID_API_KEY) {
  console.warn("SENDGRID_API_KEY environment variable not set - email functionality disabled");
}

const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

export async function sendEmail(params: EmailParams): Promise<boolean> {
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
    <h2>New Contact Inquiry</h2>
    <p><strong>Name:</strong> ${inquiryData.name}</p>
    <p><strong>Email:</strong> <a href="mailto:${inquiryData.email}">${inquiryData.email}</a></p>
    <p><strong>Phone:</strong> ${inquiryData.phone || 'Not provided'}</p>
    <p><strong>Inquiry Type:</strong> ${inquiryData.inquiryType}</p>
    <p><strong>Message:</strong></p>
    <p>${inquiryData.message.replace(/\n/g, '<br>')}</p>
  `;

  return sendEmail({
    to: toEmail,
    from: inquiryData.email, // Reply-to will be the inquirer
    subject,
    text,
    html
  });
}