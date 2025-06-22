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
      <div className="relative z-[60] w-full max-w-sm sm:max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-5xl max-h-[95vh] sm:max-h-[90vh] overflow-auto bg-white rounded-2xl sm:rounded-3xl shadow-2xl transform transition-all duration-300 animate-in fade-in-0 zoom-in-95 mx-2 sm:mx-4">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3 sm:top-6 sm:right-6 z-10 flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm border border-gray-200/50 hover:bg-white hover:shadow-lg hover:scale-105 transition-all duration-200 group"
          onClick={onClose}
          disabled={isSubmitting}
        >
          <X className="h-4 w-4 sm:h-5 sm:w-5 text-gray-600 group-hover:text-gray-800 transition-colors" />
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[500px] sm:min-h-[600px]">
          {/* Left Section - Content */}
          <div className="bg-gradient-to-br from-emerald-50 to-teal-50 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center relative overflow-hidden rounded-t-2xl sm:rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none order-2 lg:order-1">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-200/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-200/20 rounded-full blur-2xl"></div>

            <div className="relative z-10">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
                Giving your <span className="text-emerald-600">vision</span>
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>a smooth transition
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>to reality
              </h2>
              <p className="text-gray-600 text-sm sm:text-base lg:text-lg mb-6 sm:mb-8 leading-relaxed">
                By enabling an innovative digital experience that fulfills new-age demands.
              </p>

              {/* Laptop illustration */}
              <div className="relative hidden sm:block">
                <div className="bg-gray-800 rounded-lg p-2 sm:p-4 shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-300">
                  <div className="bg-white rounded p-3 sm:p-6 text-center">
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <div className="w-4 h-4 sm:w-6 sm:h-6 bg-emerald-500 rounded"></div>
                      <span className="font-bold text-gray-800 text-sm sm:text-base">Xcentic</span>
                    </div>
                    <div className="w-full h-1.5 sm:h-2 bg-gray-100 rounded mb-2"></div>
                    <div className="w-3/4 h-1.5 sm:h-2 bg-gray-100 rounded mx-auto"></div>
                  </div>
                </div>
                {/* Coffee cup */}
                <div className="absolute -right-2 sm:-right-4 -bottom-1 sm:-bottom-2 w-8 h-8 sm:w-12 sm:h-12 bg-amber-600 rounded-full shadow-lg"></div>
              </div>
            </div>
          </div>

          {/* Right Section - Form */}
          <div className="p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-center order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-b-2 border-gray-200 focus:border-emerald-500 outline-none transition-colors duration-200 bg-transparent text-gray-800 placeholder-gray-500 disabled:opacity-50 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="email"
                    name="email"
                    placeholder="E-Mail ID*"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-b-2 border-gray-200 focus:border-emerald-500 outline-none transition-colors duration-200 bg-transparent text-gray-800 placeholder-gray-500 disabled:opacity-50 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <input
                    type="tel"
                    name="contactNumber"
                    placeholder="Contact Number*"
                    value={formData.contactNumber}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-b-2 border-gray-200 focus:border-emerald-500 outline-none transition-colors duration-200 bg-transparent text-gray-800 placeholder-gray-500 disabled:opacity-50 text-sm sm:text-base"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <MessageSquare className="absolute left-3 top-4 text-gray-400 w-4 h-4 sm:w-5 sm:h-5" />
                  <textarea
                    name="projectDescription"
                    placeholder="Describe Your Project/Idea In Brief (Helps Us Come Back Better Prepared)"
                    value={formData.projectDescription}
                    onChange={handleChange}
                    rows={3}
                    disabled={isSubmitting}
                    className="w-full pl-10 sm:pl-12 pr-4 py-3 sm:py-4 border-b-2 border-gray-200 focus:border-emerald-500 outline-none transition-colors duration-200 bg-transparent text-gray-800 placeholder-gray-500 resize-none disabled:opacity-50 text-sm sm:text-base"
                  />
                </div>
              </div>

              {/* Status Messages */}
              {submitStatus.type && (
                <div
                  className={`p-3 sm:p-4 rounded-lg text-sm sm:text-base ${
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
                className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:bg-emerald-400 text-white font-semibold py-3 sm:py-4 px-4 sm:px-6 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg hover:shadow-xl disabled:shadow-md flex items-center justify-center space-x-2 text-sm sm:text-base"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 sm:w-5 sm:h-5 animate-spin" />
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
