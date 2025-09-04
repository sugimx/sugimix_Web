# EmailJS Setup Guide for Sug Contact Form

This guide will help you set up EmailJS to enable your contact form to send emails through Gmail.

## What is EmailJS?

EmailJS is a service that allows you to send emails directly from your website using JavaScript, without requiring a backend server. It integrates with popular email services like Gmail, Outlook, and others.

## Step-by-Step Setup

### 1. Create an EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

### 2. Set Up Gmail Service

1. **Log in to EmailJS Dashboard**
   - Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
   - Click on "Email Services" in the left sidebar

2. **Add Gmail Service**
   - Click "Add New Service"
   - Select "Gmail" from the service list
   - Click "Connect Account"
   - Sign in with your Gmail account
   - Grant necessary permissions
   - Give your service a name (e.g., "Sug Gmail")
   - Note down the **Service ID** (you'll need this later)

### 3. Create Email Template

1. **Go to Email Templates**
   - Click "Email Templates" in the left sidebar
   - Click "Create New Template"

2. **Design Your Template**
   - Give it a name (e.g., "Sug Contact Form")
   - Set the subject: `New Contact Form Submission from {{from_name}}`
   - Design the email body using the template variables:

```html
<h2>New Contact Form Submission</h2>

<p><strong>Name:</strong> {{from_name}}</p>
<p><strong>Email:</strong> {{from_email}}</p>
<p><strong>Phone:</strong> {{from_phone}}</p>
<p><strong>Service Needed:</strong> {{service_needed}}</p>
<p><strong>Message:</strong></p>
<p>{{message}}</p>

<hr>
<p><em>This email was sent from the Sug website contact form.</em>
```

3. **Save and Note Template ID**
   - Save the template
   - Note down the **Template ID** (you'll need this later)

### 4. Update Your Website Code

1. **Replace Placeholder IDs in JavaScript**
   - Open `js/main.js`
   - Find these lines and replace with your actual IDs:

```javascript
// Replace 'YOUR_SERVICE_ID' with your actual EmailJS service ID
emailjs.init('YOUR_SERVICE_ID');

// In the emailjs.send function, replace both instances:
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)
```

   - Replace `YOUR_SERVICE_ID` with your Gmail service ID
   - Replace `YOUR_TEMPLATE_ID` with your email template ID

2. **Example with Real IDs:**
```javascript
emailjs.init('service_abc123');
// ...
emailjs.send('service_abc123', 'template_xyz789', templateParams)
```

### 5. Test Your Setup

1. **Open your contact page** in a web browser
2. **Fill out the contact form** with test data
3. **Submit the form** - you should see:
   - Button changes to "Sending..."
   - Success message appears
   - Email is sent to your Gmail account

## Configuration Options

### Customizing Email Recipients

By default, emails will be sent to the Gmail account you connected. To send to different addresses:

1. **Modify the template** to include a "to" field
2. **Update the JavaScript** to include recipient information

### Rate Limiting

- **Free Plan**: 200 emails/month
- **Paid Plans**: Higher limits available
- **Gmail**: 500 emails/day limit

### Security Considerations

- EmailJS service IDs are public (safe to expose)
- Template IDs are public (safe to expose)
- Your Gmail account credentials are secure with EmailJS

## Troubleshooting

### Common Issues

1. **"Service not found" error**
   - Check your service ID is correct
   - Ensure the service is properly connected

2. **"Template not found" error**
   - Verify your template ID is correct
   - Check the template is published

3. **Emails not sending**
   - Check browser console for errors
   - Verify Gmail account permissions
   - Check EmailJS dashboard for error logs

4. **Form validation errors**
   - Ensure all required fields are filled
   - Check email format is valid
   - Verify phone number format

### Debug Mode

Enable debug mode in your JavaScript:

```javascript
emailjs.init('YOUR_SERVICE_ID', {
    debug: true
});
```

## Advanced Features

### Custom Success/Error Messages

You can customize the messages shown to users by modifying the `showFormMessage` function calls in the JavaScript.

### Form Data Processing

The form automatically collects:
- Full name
- Business email
- Phone number
- Service needed
- Message

You can modify the `templateParams` object to include additional fields or change the data structure.

### Styling Customization

The CSS includes styles for:
- Success messages (green)
- Error messages (red)
- Field validation errors
- Loading states

You can customize these styles in `css/style.css`.

## Support

- **EmailJS Documentation**: [https://www.emailjs.com/docs/](https://www.emailjs.com/docs/)
- **EmailJS Support**: [https://www.emailjs.com/support/](https://www.emailjs.com/support/)
- **Community Forum**: [https://community.emailjs.com/](https://community.emailjs.com/)

## Cost

- **Free Plan**: 200 emails/month
- **Starter Plan**: $9/month for 1,000 emails
- **Professional Plan**: $25/month for 10,000 emails
- **Enterprise Plan**: Custom pricing

For most small to medium businesses, the free plan is sufficient to start with.

---

**Note**: Keep your EmailJS account credentials secure and monitor your usage to avoid exceeding limits.
