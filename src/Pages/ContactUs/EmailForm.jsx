import { MapPin, Mail, Phone } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../../components/Button'
import Theme from '../../Constants/Theme'
import { useNavigate } from 'react-router-dom'
import HeaderTitle from '../../components/HeaderTitle'

const ContactForm = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        subject: '',
        comment: ''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))

        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev }
                delete newErrors[name]
                return newErrors
            })
        }
    }

    const validate = () => {
        const newErrors = {}
        if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required'
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required'
        if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required'
        else if (!/^\+?\d{10,15}$/.test(formData.phone)) newErrors.phone = 'Invalid phone number'
        if (!formData.subject.trim()) newErrors.subject = 'Subject is required'
        if (!formData.comment.trim()) newErrors.comment = 'Comment is required'
        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const validationErrors = validate()
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
            return
        }
        setErrors({})
        navigate('/thankyou')
    }

    const isSubmitDisabled =
        Object.keys(errors).length > 0 ||
        !formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.phone.trim() ||
        !formData.subject.trim() ||
        !formData.comment.trim()

    return (
        <div className="section-container px-4 sm:px-6 lg:px-20">

            <HeaderTitle  title='Get In Touch' />

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 my-16">

                {/* Left Section - Contact Details */}
                <div className="space-y-6 lg:col-span-4">
                    <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#F7F5F1] rounded-full flex items-center justify-center">
                            <MapPin className="w-6 h-6 sm:w-9 sm:h-9 text-gray-800" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2" style={{ color: Theme.colors.text }}>
                                Office Address
                            </h3>
                            <p className="text-sm sm:text-base" style={{ color: Theme.colors.darkText }}>
                                E-4, FF-07, Mega Awas Scheme,<br />
                                Rakampura, Udaipur,<br />
                                Rajasthan, India - 313024
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#F7F5F1] rounded-full flex items-center justify-center">
                            <Mail className="w-6 h-6 sm:w-9 sm:h-9 text-gray-800" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2" style={{ color: Theme.colors.text }}>
                                Message Us
                            </h3>
                            <p className="text-sm sm:text-base" style={{ color: Theme.colors.darkText }}>
                                <u>reservation@velourastays.com</u>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-3 sm:space-x-4">
                        <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 bg-[#F7F5F1] rounded-full flex items-center justify-center">
                            <Phone className="w-5 h-6 sm:w-7 sm:h-9 text-gray-800" />
                        </div>
                        <div>
                            <h3 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2" style={{ color: Theme.colors.text }}>
                                Contact Us
                            </h3>
                            <p className="text-sm sm:text-base" style={{ color: Theme.colors.darkText }}>
                                +91 9797979075
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="lg:col-span-6 bg-[#F7F5F1] shadow-lg p-6 sm:p-10 rounded-lg">
                    {/* <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center" style={{ color: Theme.colors.text }}>
                        Get In Touch
                    </h2> */}
                    <form className="space-y-4 sm:space-y-6 mt-4" onSubmit={handleSubmit} noValidate>
                        <div className="p-4 sm:p-6 rounded-lg space-y-4">

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                                        First Name
                                    </label>
                                    <input
                                        id="firstName"
                                        type="text"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        aria-invalid={errors.firstName ? "true" : "false"}
                                        aria-describedby="firstName-error"
                                        className={`w-full px-3 bg-white sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${errors.firstName ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="John"
                                        required
                                    />
                                    {errors.firstName && <p id="firstName-error" className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
                                </div>

                                <div>
                                    <label htmlFor="lastName" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                                        Last Name
                                    </label>
                                    <input
                                        id="lastName"
                                        type="text"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        aria-invalid={errors.lastName ? "true" : "false"}
                                        aria-describedby="lastName-error"
                                        className={`w-full px-3 bg-white sm:px-4 py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${errors.lastName ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="Doe"
                                        required
                                    />
                                    {errors.lastName && <p id="lastName-error" className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                                <div>
                                    <label htmlFor="phone" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        aria-invalid={errors.phone ? "true" : "false"}
                                        aria-describedby="phone-error"
                                        className={`w-full px-3 sm:px-4 bg-white py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${errors.phone ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="+91 9876543210"
                                        required
                                    />
                                    {errors.phone && <p id="phone-error" className="text-red-500 text-xs mt-1">{errors.phone}</p>}
                                </div>

                                <div>
                                    <label htmlFor="subject" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                                        Subject
                                    </label>
                                    <input
                                        id="subject"
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        aria-invalid={errors.subject ? "true" : "false"}
                                        aria-describedby="subject-error"
                                        className={`w-full px-3 sm:px-4 bg-white py-2 sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${errors.subject ? 'border-red-500' : 'border-gray-300'}`}
                                        placeholder="How can we help you?"
                                        required
                                    />
                                    {errors.subject && <p id="subject-error" className="text-red-500 text-xs mt-1">{errors.subject}</p>}
                                </div>
                            </div>

                            <div>
                                <label htmlFor="comment" className="block text-sm sm:text-base font-medium text-gray-700 mb-1 sm:mb-2">
                                    Write a comment
                                </label>
                                <textarea
                                    id="comment"
                                    name="comment"
                                    value={formData.comment}
                                    onChange={handleChange}
                                    rows={4}
                                    aria-invalid={errors.comment ? "true" : "false"}
                                    aria-describedby="comment-error"
                                    className={`w-full px-3 sm:px-4 py-2 bg-white sm:py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm sm:text-base ${errors.comment ? 'border-red-500' : 'border-gray-300'}`}
                                    placeholder="Your comments here..."
                                    required
                                ></textarea>
                                {errors.comment && <p id="comment-error" className="text-red-500 text-xs mt-1">{errors.comment}</p>}
                            </div>

                            <div className="flex justify-center">
                                <Button type="submit" icon={false} variant="secondary" className='w-full sm:w-1/2 ' disabled={isSubmitDisabled}>
                                    Submit Now
                                </Button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
