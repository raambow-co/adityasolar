import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { formType, name, phone, email, service, location, source, message } = req.body;

  if (!name || !phone || !email) {
    return res.status(400).json({ message: 'Name, Phone, and Email are required.' });
  }

  try {
    // Create reusable transporter object using SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'adityasolarsolution.info@gmail.com',
        pass: process.env.EMAIL_PASS, // App password stored in Vercel Env Vars
      },
    });

    let subject = formType === 'brochure' 
      ? `New Brochure Request from ${name}` 
      : `New Enquiry from ${name}`;

    let htmlContent = `
      <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
        <h2 style="color: #1e3a8a; border-bottom: 2px solid #facc15; padding-bottom: 10px;">${subject}</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
    `;

    if (formType === 'enquiry') {
      htmlContent += `
        <p><strong>Service of Interest:</strong> ${service || 'Not specified'}</p>
        <p><strong>Location:</strong> ${location || 'Not specified'}</p>
        <p><strong>Source:</strong> ${source || 'Not specified'}</p>
        <h3 style="color: #1e3a8a; margin-top: 20px;">Message:</h3>
        <p style="background: #f3f4f6; padding: 15px; border-radius: 8px;">${message || 'No message provided.'}</p>
      `;
    }

    htmlContent += `</div>`;

    // Send mail with defined transport object
    await transporter.sendMail({
      from: `"Aditya Solar Website" <adityasolarsolution.info@gmail.com>`, // sender address
      to: 'adityasolarsolution.info@gmail.com', // list of receivers
      subject: subject, // Subject line
      html: htmlContent, // html body
    });

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ message: 'Failed to send email. Please try again later.' });
  }
}
