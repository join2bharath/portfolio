# 📧 Email Setup Guide - Contact Form

## Current Status:
❌ **Emails are NOT being sent yet** - You need to set up EmailJS (free service)

The contact form shows "Message sent successfully" but emails don't actually go to your inbox yet.

---

## 🚀 How to Set Up Real Email Sending (FREE)

### Step 1: Create EmailJS Account

1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up Free"**
3. Sign up with your email (or use Google sign-in)
4. Verify your email

### Step 2: Add Email Service

1. After logging in, go to **"Email Services"**
2. Click **"Add New Service"**
3. Choose **"Gmail"** (recommended)
4. Click **"Connect Account"**
5. Sign in with your Gmail: **join2bharath2003@gmail.com**
6. Allow EmailJS to send emails on your behalf
7. **Copy the Service ID** (looks like: `service_xxxxxxx`)

### Step 3: Create Email Template

1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. Use this template:

**Template Name:** `template_contact`

**Subject:** 
```
New Portfolio Contact: {{subject}}
```

**Content:**
```
You have a new message from your portfolio!

From: {{from_name}}
Email: {{from_email}}

Subject: {{subject}}

Message:
{{message}}

---
Reply to: {{from_email}}
```

4. Click **"Save"**
5. **Copy the Template ID** (looks like: `template_xxxxxxx`)

### Step 4: Get Your Public Key

1. Go to **"Account"** → **"General"**
2. Find **"Public Key"** section
3. **Copy your Public Key** (looks like: `xxxxxxxxxxxxxxx`)

### Step 5: Update Your Portfolio Code

Open `ai-portfolio/src/components/Contact.jsx` and replace:

```javascript
await emailjs.send(
  'service_portfolio', // Replace with YOUR Service ID
  'template_contact',  // Replace with YOUR Template ID
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'join2bharath2003@gmail.com'
  },
  'YOUR_PUBLIC_KEY' // Replace with YOUR Public Key
)
```

**Replace:**
- `'service_portfolio'` → Your Service ID
- `'template_contact'` → Your Template ID  
- `'YOUR_PUBLIC_KEY'` → Your Public Key

### Step 6: Test It!

1. Save the file
2. Go to your portfolio: http://localhost:5173
3. Fill out the contact form
4. Click "Send Message"
5. Check your email: **join2bharath2003@gmail.com**

---

## 📋 Quick Example:

If your IDs are:
- Service ID: `service_abc123`
- Template ID: `template_xyz789`
- Public Key: `myPublicKey123`

Update the code to:

```javascript
await emailjs.send(
  'service_abc123',
  'template_xyz789',
  {
    from_name: formData.name,
    from_email: formData.email,
    subject: formData.subject,
    message: formData.message,
    to_email: 'join2bharath2003@gmail.com'
  },
  'myPublicKey123'
)
```

---

## 🎯 Alternative: Simple mailto Link

If you don't want to set up EmailJS, you can use a simple mailto link instead.

The form will open the user's email client with your email pre-filled.

Let me know if you want this simpler option!

---

## ✅ Benefits of EmailJS:

- ✅ **Free** - 200 emails/month on free plan
- ✅ **No backend needed** - Works with static sites
- ✅ **Spam protection** - Built-in security
- ✅ **Email templates** - Professional formatting
- ✅ **Easy setup** - Takes 5-10 minutes

---

## 🆘 Need Help?

If you want me to:
1. Set up a simpler mailto solution
2. Help you configure EmailJS
3. Use a different email service

Just let me know!

---

## 📝 Current Configuration:

**Your Email:** join2bharath2003@gmail.com  
**EmailJS Status:** ❌ Not configured yet  
**Form Status:** ✅ Working (but not sending real emails)

**Next Step:** Follow the guide above to enable real email sending!
