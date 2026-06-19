# Resend Email Integration Guide

## Step 1: Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up for a free account
3. Go to **API Keys** section
4. Create a new API key
5. Copy it to `.env.local`:

```
RESEND_API_KEY=your-api-key-here
```

## Step 2: Verify Your Domain (Optional but Recommended)

For production, verify your domain:
1. Go to **Domains** in Resend dashboard
2. Add your domain
3. Follow DNS setup instructions
4. Use `noreply@youromain.com` in the email service

For testing, you can use `test@resend.dev`

## Step 3: Update Email Address in Code

Edit `src/lib/email.ts` and change the `from` address:

```typescript
from: 'Your Name <noreply@yourdomain.com>', // Change this
```

## Files Updated

✅ `src/lib/email.ts` - Email service with Resend
✅ `src/routes/admin.clients.$id.tsx` - Sends PDF reports via email
✅ `src/routes/payment.tsx` - Ready for payment confirmation emails

## How It Works

### When User Pays
- User completes payment at Razorpay
- Payment status updated to "Completed"
- (Future) Email confirmation can be sent via webhook

### When Admin Sends Report
1. Admin fills in report details (colors, tips, etc.)
2. Click **"Send PDF to [user@email.com]"** button
3. PDF is generated from the report
4. PDF is converted to Base64
5. Email is sent via Resend API with PDF attachment
6. Report status marked as "Sent"
7. User receives email with PDF attached

## Email Templates

Two emails are configured:

### 1. Report Email
- Sent when admin clicks "Send PDF"
- Contains the generated PDF report
- Personalized greeting

### 2. Payment Confirmation Email  
- Ready to send when payment is confirmed
- Shows order amount
- Informs user report is being prepared

## Testing

To test emails locally:
1. Make sure `RESEND_API_KEY` is set
2. Fill in a test report
3. Click **"Send PDF to..."** button
4. Check your email inbox

## Error Handling

- If email fails to send, toast message shows error
- Server logs the error details
- Payment is NOT blocked if email fails (graceful degradation)
- Report sending shows clear error messages

## Important Notes

⚠️ **Domain Verification**: Free tier can send to any email, but for production set up domain
⚠️ **API Key**: Keep in `.env` file, never commit to git
⚠️ **From Address**: Update to your actual domain email

## Troubleshooting

**Email not sending?**
- Check `RESEND_API_KEY` is set correctly
- Check browser console for errors
- Verify user email is valid

**PDF attachment missing?**
- Ensure jsPDF is properly installed
- Check base64 conversion in buildPdf function

**Wrong email address?**
- Email is pulled from user.email in database
- Verify user registered with correct email
