import { MapPin, Mail, Phone } from 'lucide-react'
import React from 'react'
import Button from '../../components/Button'
import Theme from '../../Constants/Theme'
import { useNavigate } from 'react-router-dom' // ✅ Import navigation hook

const ContactForm = () => {
    const navigate = useNavigate() // ✅ Initialize navigation

    const handleSubmit = (e) => {
        e.preventDefault() // Prevent default form reload

        // Optionally: You can add form validation or send data to backend here

        // Navigate to thank-you page
        navigate('/thankyou')
    }

    return (
        <div className="section-container">
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-12 my-16 mx-20">
                {/* Left Section - Contact Details */}
                <div className="space-y-10 lg:col-span-4">
                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-20 h-20 bg-[#F7F5F1] rounded-full flex items-center justify-center">
                            <MapPin className="w-9 h-9 text-gray-800" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2" style={{ color: Theme.colors.text }}>
                                Office Address
                            </h3>
                            <p style={{ color: Theme.colors.darkText }}>
                                E-4, FF-07, Mega Awas Scheme,<br />
                                Rakampura, Udaipur,<br />
                                Rajasthan, India - 313024
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-20 h-20 bg-[#F7F5F1] rounded-full flex items-center justify-center">
                            <Mail className="w-9 h-9 text-gray-800" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2" style={{ color: Theme.colors.text }}>
                                Message Us
                            </h3>
                            <p style={{ color: Theme.colors.darkText }}>
                                <u>reservation@velourastays.com</u>
                            </p>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-20 h-20 bg-[#F7F5F1] rounded-full flex items-center justify-center">
                            <Phone className="w-7 h-9 text-gray-800" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold mb-2" style={{ color: Theme.colors.text }}>
                                Contact Us
                            </h3>
                            <p style={{ color: Theme.colors.darkText }}>
                                +91 9797979075
                            </p>
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="lg:col-span-6 bg-[#F7F5F1] shadow-lg p-10 rounded-lg">
                    <h2 className="text-3xl font-bold mb-6 text-center" style={{ color: Theme.colors.text }}>
                        Get In Touch
                    </h2>
                    <form className="space-y-6 mt-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="John"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="Doe"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                                <input
                                    type="tel"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="+91 9876543210"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                                <input
                                    type="text"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    placeholder="How can we help you?"
                                />
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Write a comment</label>
                            <textarea
                                rows={4}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                placeholder="Your comments here..."
                            ></textarea>
                        </div>

                        <div className="flex justify-center">
                            <Button onClick={handleSubmit} type="submit" icon={false} variant="secondary" className='w-full'>
                                Submit Now
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ContactForm
