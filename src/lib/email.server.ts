import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendReportEmailServer(
  to: string,
  userName: string,
  pdfBase64: string,
  pdfFileName: string = 'personal-style-report.pdf'
) {
  try {
    const response = await resend.emails.send({
      from: 'Nine Profiles <kayatarun2004@gmail.com>',
      to,
      subject: 'Your Personal Style Report - Nine Profiles',
      html: `
        <html>
          <body style="font-family: 'Montserrat', sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; padding: 40px 20px; border-top: 1px solid #e0e0e0;">
              <p style="font-size: 12px; letter-spacing: 2px; color: #999; text-transform: uppercase;">Nine Profiles</p>
              <h1 style="font-size: 32px; font-family: 'Cormorant Garamond'; margin: 20px 0;">Your Personal Style Report</h1>
            </div>

            <div style="padding: 40px 20px;">
              <p style="font-size: 14px; margin-bottom: 20px;">Dear ${userName},</p>

              <p style="font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
                Thank you for choosing Nine Profiles' Personal Style Lab. Your personalized style report is ready!
              </p>

              <p style="font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
                We've analyzed your unique characteristics and created a comprehensive report tailored just for you. Inside you'll find:
              </p>

              <ul style="font-size: 14px; line-height: 1.8; margin: 20px 0 20px 20px;">
                <li>Your best colors suit you</li>
                <li>Metal harmony recommendations</li>
                <li>Face shape analysis</li>
                <li>Personal styling tips</li>
              </ul>

              <p style="font-size: 14px; line-height: 1.6; margin-bottom: 30px;">
                Please find your complete report attached to this email.
              </p>

              <div style="text-align: center; padding: 20px; background: #f8f8f8; margin: 30px 0;">
                <p style="font-size: 12px; letter-spacing: 1px; color: #666; text-transform: uppercase; margin: 0;">
                  Style for the Life You're Building
                </p>
              </div>
            </div>

            <div style="border-top: 1px solid #e0e0e0; padding: 20px; text-align: center;">
              <p style="font-size: 12px; color: #999;">
                © Nine Profiles. All rights reserved.
              </p>
            </div>
          </body>
        </html>
      `,
      attachments: [
        {
          filename: pdfFileName,
          content: Buffer.from(pdfBase64, 'base64'),
        }
      ]
    });

    return { success: true, messageId: response.data?.id };
  } catch (error) {
    console.error('Failed to send email:', error);
    throw new Error(`Failed to send email: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}

export async function sendPaymentConfirmationEmailServer(
  to: string,
  userName: string,
  amount: number
) {
  try {
    const response = await resend.emails.send({
      from: 'Nine Profiles <kayatarun2004@gmail.com>',
      to,
      subject: 'Payment Confirmed - Personal Style Report',
      html: `
        <html>
          <body style="font-family: 'Montserrat', sans-serif; color: #333; max-width: 600px; margin: 0 auto;">
            <div style="text-align: center; padding: 40px 20px;">
              <p style="font-size: 12px; letter-spacing: 2px; color: #999; text-transform: uppercase;">Nine Profiles</p>
              <h1 style="font-size: 28px; font-family: 'Cormorant Garamond'; margin: 20px 0;">Payment Confirmed</h1>
            </div>

            <div style="padding: 40px 20px;">
              <p style="font-size: 14px; margin-bottom: 20px;">Dear ${userName},</p>

              <p style="font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
                Your payment has been successfully processed. Your Personal Style Report is now being prepared.
              </p>

              <div style="background: #f8f8f8; padding: 20px; margin: 30px 0;">
                <p style="font-size: 12px; color: #666;">Amount Paid</p>
                <p style="font-size: 28px; font-family: 'Cormorant Garamond'; margin: 10px 0 0 0;">₹${amount.toLocaleString('en-IN')}</p>
              </div>

              <p style="font-size: 14px; line-height: 1.6; margin-bottom: 20px;">
                You'll receive your personalized report via email shortly. Thank you for choosing Nine Profiles!
              </p>
            </div>
          </body>
        </html>
      `
    });

    return { success: true, messageId: response.data?.id };
  } catch (error) {
    console.error('Failed to send payment confirmation:', error);
    throw new Error(`Failed to send payment confirmation: ${error instanceof Error ? error.message : 'Unknown error'}`);
  }
}
