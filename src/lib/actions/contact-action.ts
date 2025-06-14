"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface ContactFormData {
  fullName: string
  email: string
  contactNumber: string
  projectDescription: string
}

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate the form data
    if (!formData.fullName || !formData.email || !formData.contactNumber) {
      return {
        success: false,
        message: "Please fill in all required fields.",
      }
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      return {
        success: false,
        message: "Please enter a valid email address.",
      }
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>", // Use your verified domain
      to: ["xcentic@gmail.com"],
      subject: "New Contact Form Submission - AMC Inquiry",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9;">
          <div style="background-color: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1);">
            <div style="text-align: center; margin-bottom: 30px;">
              <h1 style="color: #059669; margin: 0; font-size: 28px;">New Contact Form Submission</h1>
              <div style="width: 60px; height: 4px; background: linear-gradient(to right, #10b981, #059669); margin: 10px auto; border-radius: 2px;"></div>
            </div>
            
            <div style="background-color: #f0fdf4; padding: 20px; border-radius: 8px; border-left: 4px solid #10b981; margin-bottom: 20px;">
              <h2 style="color: #065f46; margin: 0 0 15px 0; font-size: 18px;">Contact Information</h2>
              <table style="width: 100%; border-collapse: collapse;">
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 140px;">Full Name:</td>
                  <td style="padding: 8px 0; color: #1f2937;">${formData.fullName}</td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                  <td style="padding: 8px 0; color: #1f2937;">
                    <a href="mailto:${formData.email}" style="color: #059669; text-decoration: none;">${formData.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                  <td style="padding: 8px 0; color: #1f2937;">
                    <a href="tel:${formData.contactNumber}" style="color: #059669; text-decoration: none;">${formData.contactNumber}</a>
                  </td>
                </tr>
              </table>
            </div>

            ${
              formData.projectDescription
                ? `
              <div style="background-color: #fefefe; padding: 20px; border-radius: 8px; border: 1px solid #e5e7eb; margin-bottom: 20px;">
                <h3 style="color: #374151; margin: 0 0 15px 0; font-size: 16px;">Project Description:</h3>
                <p style="color: #4b5563; line-height: 1.6; margin: 0; white-space: pre-wrap;">${formData.projectDescription}</p>
              </div>
            `
                : ""
            }

            <div style="background-color: #eff6ff; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
              <p style="color: #1e40af; margin: 0; font-size: 14px;">
                <strong>⏰ Response Time:</strong> Please respond within 10 minutes as promised to the client.
              </p>
            </div>

            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 12px; margin: 0;">
                This email was sent from your website contact form.<br>
                Submitted on ${new Date().toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </p>
            </div>
          </div>
        </div>
      `,
      // Also send a plain text version
      text: `
New Contact Form Submission - AMC Inquiry

Contact Information:
- Full Name: ${formData.fullName}
- Email: ${formData.email}
- Phone: ${formData.contactNumber}

${formData.projectDescription ? `Project Description:\n${formData.projectDescription}\n` : ""}

Please respond within 10 minutes as promised to the client.

Submitted on ${new Date().toLocaleString()}
      `,
    })

    if (error) {
      console.error("Email sending error:", error)
      return {
        success: false,
        message: "Failed to send email. Please try again later.",
      }
    }

    console.log("Email sent successfully:", data)
    return {
      success: true,
      message: "Your message has been sent successfully!",
    }
  } catch (error) {
    console.error("Contact form submission error:", error)
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later.",
    }
  }
}
