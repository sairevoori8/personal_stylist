'use server';

import { sendReportEmailServer } from '@/lib/email.server';

export async function sendReportAction({
  to,
  userName,
  pdfBase64,
  pdfFileName
}: {
  to: string;
  userName: string;
  pdfBase64: string;
  pdfFileName: string;
}) {
  return await sendReportEmailServer(to, userName, pdfBase64, pdfFileName);
}
