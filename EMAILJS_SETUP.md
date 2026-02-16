# EmailJS Setup Instructions

This guide will help you set up EmailJS to send emails from your contact form.

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. After logging in, go to **"Email Services"** in the dashboard
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. For **Gmail**:
   - Click "Connect Account"
   - Sign in with your Gmail account (hemantkumarskh@gmail.com)
   - Allow EmailJS to send emails
5. Copy the **Service ID** (you'll need this)

## Step 3: Create Email Template

1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: New Contact Form Message from {{from_name}}

From: {{from_name}}
Email: {{from_email}}

Message:
{{message}}

---
This message was sent from your portfolio contact form.
Reply to: {{reply_to}}
```

4. In the template settings:
   - **Template Name**: Portfolio Contact Form
   - **To Email**: {{to_email}} (or directly hemantkumarskh@gmail.com)
   - **From Name**: Portfolio Contact
   - **Reply To**: {{reply_to}}
5. Click **"Save"**
6. Copy the **Template ID**

## Step 4: Get Public Key

1. Go to **"Account"** → **"General"**
2. Copy your **Public Key** (also called User ID)

## Step 5: Update Angular App

Open `src/app/pages/contact/contact.component.ts` and update these values:

```typescript
private readonly EMAILJS_SERVICE_ID = 'your_service_id_here';
private readonly EMAILJS_TEMPLATE_ID = 'your_template_id_here';
private readonly EMAILJS_PUBLIC_KEY = 'your_public_key_here';
```

Replace:
- `your_service_id_here` with your Service ID from Step 2
- `your_template_id_here` with your Template ID from Step 3
- `your_public_key_here` with your Public Key from Step 4

## Step 6: Test

1. Save the file
2. The dev server will auto-reload
3. Go to the Contact page
4. Fill out the form and submit
5. Check your email (hemantkumarskh@gmail.com)

## Free Tier Limits

EmailJS free tier includes:
- ✅ 200 emails per month
- ✅ 2 email templates
- ✅ 1 email service
- ✅ Perfect for portfolio contact forms!

## Troubleshooting

**Email not received?**
- Check spam/junk folder
- Verify all IDs are correct in contact.component.ts
- Check browser console for errors
- Verify EmailJS service is connected properly

**CORS Error?**
- EmailJS should work from localhost
- Make sure you're using the latest version

**Rate Limit?**
- Free tier: 200 emails/month
- Emails are queued if limit is reached

## Support

For more help, visit: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
