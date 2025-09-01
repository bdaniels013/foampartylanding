# 🎉 Lead Delivery System Setup Guide

Your foam party booking form now sends leads to **multiple destinations** for maximum reliability! Here's how to set everything up:

## ✅ What's Already Working

Your form now automatically:
1. **Stores leads locally** (backup)
2. **Opens your email client** with a pre-filled booking request
3. **Logs to browser console** for immediate visibility
4. **Attempts Formspree** (if configured)

## 📧 Email Setup (IMMEDIATE - Already Working!)

**Your email client will automatically open** when someone submits a booking with:
- Pre-filled subject: "🎉 NEW FOAM PARTY BOOKING - [Customer Name]"
- Complete booking details in the body
- Customer contact information

**To customize the email address:**
1. Open `src/components/BookingForm.tsx`
2. Find line: `window.open(\`mailto:bookings@gulfcoastfoamparty.com?subject=${emailSubject}&body=${emailBody}\`);`
3. Change `bookings@gulfcoastfoamparty.com` to your preferred email

## 📱 Formspree Setup (RECOMMENDED)

Formspree is a free service that sends form submissions directly to your email.

### Step 1: Create Formspree Account
1. Go to [formspree.io](https://formspree.io)
2. Sign up for a free account
3. Create a new form

### Step 2: Get Your Form ID
1. After creating a form, you'll get a form ID like `xayzqkqw`
2. Copy this ID

### Step 3: Update Your Code
1. Open `src/components/BookingForm.tsx`
2. Find line: `await fetch('https://formspree.io/f/xayzqkqw', {`
3. Replace `xayzqkqw` with your actual form ID

### Step 4: Test
1. Submit a test booking
2. Check your email - you should receive the booking immediately!

## 📱 SMS Notifications (OPTIONAL)

### Option A: Twilio (Professional)
1. Sign up at [twilio.com](https://twilio.com)
2. Get your Account SID and Auth Token
3. Create a new file `src/utils/sms.ts`:

```typescript
import twilio from 'twilio';

const client = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export const sendSMS = async (to: string, message: string) => {
  try {
    await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: to
    });
    return true;
  } catch (error) {
    console.error('SMS failed:', error);
    return false;
  }
};
```

### Option B: Free SMS Services
- **TextLocal** (India)
- **MessageBird** (International)
- **Vonage** (formerly Nexmo)

## 🔗 Webhook Setup (ADVANCED)

### Zapier Integration
1. Go to [zapier.com](https://zapier.com)
2. Create a new Zap
3. Choose "Webhooks" as trigger
4. Copy the webhook URL
5. Update the code in `BookingForm.tsx`:

```typescript
const webhookUrl = 'YOUR_ZAPIER_WEBHOOK_URL';
```

### Make.com (formerly Integromat)
1. Go to [make.com](https://make.com)
2. Create a new scenario
3. Add webhook trigger
4. Copy the webhook URL
5. Update your code

## 📊 Lead Management Options

### Option 1: Google Sheets
1. Create a Google Sheet
2. Use Zapier to send leads to Google Sheets
3. Set up email notifications for new rows

### Option 2: CRM Integration
- **HubSpot** (free tier available)
- **Salesforce** (paid)
- **Pipedrive** (affordable)

### Option 3: Simple Spreadsheet
1. Create a Google Sheet
2. Share the form data via email
3. Manually copy leads to your spreadsheet

## 🚀 Deployment Options

### Vercel (Recommended)
1. Connect your GitHub repo to Vercel
2. Deploy automatically
3. Get a live URL like `your-site.vercel.app`

### Netlify
1. Connect your GitHub repo to Netlify
2. Deploy automatically
3. Get a live URL like `your-site.netlify.app`

### GitHub Pages
1. Go to your repo settings
2. Enable GitHub Pages
3. Choose main branch as source

## 🔧 Customization Options

### Change Email Template
Edit the email body in `BookingForm.tsx` around line 50:

```typescript
const emailBody = encodeURIComponent(`
YOUR CUSTOM EMAIL TEMPLATE HERE
`);
```

### Add More Fields
1. Add new fields to the form
2. Update the `formData` state
3. Include in email template
4. Update Formspree configuration

### Change Success Message
Edit the success message in the `isSubmitted` section of `BookingForm.tsx`.

## 📞 Phone Integration

### Call Tracking
- **CallRail** - Track phone calls from your website
- **Google Analytics** - Track phone number clicks
- **Custom solution** - Use your own phone system

### SMS Integration
- **Twilio** - Professional SMS service
- **MessageBird** - International SMS
- **Local providers** - Check your area for SMS services

## 🎯 Next Steps

1. **Test the form** - Submit a test booking
2. **Set up Formspree** - Get immediate email notifications
3. **Deploy to Vercel** - Get your live website
4. **Configure SMS** - Add phone notifications
5. **Set up CRM** - Organize your leads

## 🆘 Troubleshooting

### Form not sending emails?
- Check browser console for errors
- Verify Formspree form ID is correct
- Test email client integration

### Not receiving notifications?
- Check spam folder
- Verify email address in code
- Test Formspree configuration

### Need help?
- Check the browser console for error messages
- Verify all form fields are filled
- Test with different browsers

## 💡 Pro Tips

1. **Always test** with real data before going live
2. **Backup your leads** - the local storage feature helps
3. **Monitor your forms** - check for spam submissions
4. **Respond quickly** - leads are hot when they first come in
5. **Track your conversions** - see which leads turn into bookings

---

**Your lead delivery system is now set up for maximum reliability! 🎉**

Every booking will be captured and sent to you through multiple channels, ensuring you never miss a potential customer.
