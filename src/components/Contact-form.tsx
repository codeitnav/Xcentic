"use client"

import type React from "react"

import { useState } from "react"
import { X, User, Mail, Phone, MessageSquare, Loader2 } from "lucide-react"
import { submitContactForm } from "@/lib/actions/contact-action"

interface ContactFormProps {
  onClose: () => void
}

export const ContactForm = ({ onClose }: ContactFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    projectDescription: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const result = await submitContactForm(formData)

      if (result.success) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully. We'll get back to you within 10 minutes.",
        })
        // Reset form
        setFormData({
          fullName: "",
          email: "",
          contactNumber: "",
          projectDescription: "",
        })
        // Close form after 3 seconds
        setTimeout(() => {
          onClose()
        }, 3000)
      } else {
        setSubmitStatus({
          type: "error",
          message: result.message || "Something went wrong. Please try again.",
        })
      }
    } catch (error) {
      console.error("Contact form submission error:", error)
      setSubmitStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/60 backdrop-blur-xl transition-all duration-300" onClick={onClose} />

      {/* Modal Container */}
      <div className="relative z-[60] w-full max-w-5xl max-h-[90vh] overflow-auto bg-white rounded-3xl shadow-2xl transform transition-all duration-300 animate-in fade-in-0 zoom-in-95">
        {/* Close Button */}
        <button
          className="absolute top-6 right-6 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-200 group"
          onClick={onClose}
          disabled={isSubmitting}
        >
          <X className="h-5 w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
        </button>

        <div className="grid md:grid-cols-2 min-h-[600px]">
          {/* Left Section - Content */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden rounded-l-3xl">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-200/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Giving your <span className="text-emerald-600">vision</span>
                <br />a smooth transition
                <br />
                to reality
              </h2>
              <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                By enabling an innovative digital experience that fulfills new-age demands.
              </p>

              {/* Laptop illustration */}
              <div className="relative">
                <div className="bg-gray-800 rounded-lg p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded p-6 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-6 h-6 bg-emerald-500 rounded"></div>
                      <span className="font-bold text-gray-800">Xcentic</span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 rounded mb-2"></div>
                    <div className="w-3/4 h-2 bg-gray-100 rounded mx-auto"></div>
                  </div>
                </div>
                {/* Coffee cup */}
                <div className="absolute -right-4 -bottom-2 w-12 h-12 bg-amber-600 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-8 md:p-12 flex flex-col justify-center">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-4 border-b-2 border-gray-200 focus:border-emerald-500 outline-none transition-colors duration-200 bg-transparent text-gray-800 placeholder-gray-500 disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail ID*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-4 border-b-2 border-gray-200 focus:border-emerald-500 outline-none transition-colors duration-200 bg-transparent text-gray-800 placeholder-gray-500 disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number*"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-4 border-b-2 border-gray-200 focus:border-emerald-500 outline-none transition-colors duration-200 bg-transparent text-gray-800 placeholder-gray-500 disabled:opacity-50"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                  <textarea
                    name="projectDescription"
                    placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full pl-12 pr-4 py-4 border-b-2 border-gray-200 focus:border-emerald-500 outline-none transition-colors duration-200 bg-transparent text-gray-800 placeholder-gray-500 resize-none disabled:opacity-50"
                  />
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`p-4 rounded-lg ${
                    submitStatus.type === "success"
                      ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                      : "bg-red-50 text-red-700 border border-red-200"
                  }`}
                >
                  {submitStatus.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Sending...</span>
                  </>
                ) : (
                  <span>Submit</span>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
