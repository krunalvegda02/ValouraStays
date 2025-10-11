import { MapPin, Mail, Phone } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Theme from '../../Constants/Theme';
import { useNavigate } from 'react-router-dom';
import HeaderTitle from '../../components/HeaderTitle';

const ContactForm = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phone: '',
        email: '',
        comment: ''
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;

        // Allow only numbers for phone
        if (name === 'phone' && !/^\d*$/.test(value)) return;

        setFormData((prev) => ({ ...prev, [name]: value }));

        if (errors[name]) {
            setErrors((prev) => {
                const newErrors = { ...prev };
                delete newErrors[name];
                return newErrors;
            });
        }
    };

    const validate = () => {
        const newErrors = {};

        if (!formData.firstName.trim()) newErrors.firstName = 'First Name is required';
        if (!formData.lastName.trim()) newErrors.lastName = 'Last Name is required';

        if (!formData.phone.trim()) newErrors.phone = 'Phone Number is required';
        else if (formData.phone.length !== 10) newErrors.phone = 'Phone number must be 10 digits';

        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) newErrors.email = 'Invalid email address';

        if (!formData.comment.trim()) newErrors.comment = 'Comment is required';

        return newErrors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }
        setErrors({});
        navigate('/Thankyou');
    };

    const isSubmitDisabled =
        Object.keys(errors).length > 0 ||
        !formData.firstName.trim() ||
        !formData.lastName.trim() ||
        !formData.phone.trim() ||
        !formData.email.trim() ||
        !formData.comment.trim();

    return (
        <div className="section-container px-4 sm:px-6 lg:px-20">
            <HeaderTitle title="Get In Touch" />

            {/* Flex container for equal height sections */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 my-8 mb-16">

                {/* Left Section - Contact Details */}
                <div className="lg:w-2/5 flex flex-col bg-[#F7F5F1] p-6 sm:p-8 lg:p-12 shadow-2xl rounded-2xl lg:h-[600px] border border-[#403B21]/10">
                    <div className="flex-1 flex flex-col justify-center space-y-6 lg:space-y-8">
                        {[
                            {
                                icon: <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-[#403B21]" />,
                                title: 'Office Address',
                                content: (
                                    <>
                                        E-4, FF-07, Mega Awas Scheme,<br />
                                        Rakampura, Udaipur,<br />
                                        Rajasthan, India - 313024
                                    </>
                                )
                            },
                            {
                                icon: <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-[#403B21]" />,
                                title: 'Message Us',
                                content: 'reservation@velourastays.com'
                            },
                            {
                                icon: <Phone className="w-5 h-6 sm:w-6 sm:h-7 text-[#403B21]" />,
                                title: 'Contact Us',
                                content: '+91 9797979075'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-4 group hover:transform hover:translate-x-1 transition-all duration-300">
                                <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg border border-[#403B21]/10 group-hover:shadow-xl transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-base sm:text-lg lg:text-xl font-semibold mb-2 tracking-wide" style={{ color: Theme.colors.text }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-sm sm:text-base lg:text-lg leading-relaxed font-medium" style={{ color: Theme.colors.darkText }}>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Section - Contact Form */}
                <div className="lg:w-3/5 bg-[#F7F5F1] shadow-2xl rounded-2xl p-6 sm:p-8 lg:p-12 lg:h-[600px] flex flex-col border border-[#403B21]/10">
                    <div className="flex-1 flex flex-col justify-center">
                        <form className="space-y-6" onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <InputField
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    error={errors.firstName}
                                    placeholder="First Name"
                                />
                                <InputField
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    error={errors.lastName}
                                    placeholder="Last Name"
                                />
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                <InputField
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    error={errors.phone}
                                    placeholder="Phone Number"
                                    maxLength={10}
                                />
                                <InputField
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    error={errors.email}
                                    placeholder="Email Address"
                                />
                            </div>

                            <TextAreaField
                                name="comment"
                                value={formData.comment}
                                onChange={handleChange}
                                error={errors.comment}
                                placeholder="Your Comment"
                            />

                            <div className="flex justify-center pt-4">
                                <Button
                                    icon={false}
                                    variant="secondary"
                                    className="w-full sm:w-2/3 lg:w-1/2 px-8 py-4 text-base sm:text-lg font-semibold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-xl"
                                    disabled={isSubmitDisabled}
                                    onClick={handleSubmit}
                                >
                                    Submit Now
                                </Button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Reusable Input Field Component
const InputField = ({ name, value, onChange, error, placeholder, maxLength }) => (
    <div className="space-y-2">
        <input
            id={name}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            placeholder={placeholder}
            className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 bg-white/80 backdrop-blur-sm transition-all duration-300 
                placeholder-gray-500 text-base sm:text-lg font-medium
                focus:outline-none focus:ring-2 focus:ring-[#403B21]/20 focus:border-[#403B21]
                hover:border-[#403B21]/50 ${error ? 'border-red-500 focus:border-red-500' : 'border-[#403B21]/30'}`}
        />
        {error && <p className="text-red-500 text-xs font-medium mt-1 pl-1">{error}</p>}
    </div>
);

// Reusable TextArea Field
const TextAreaField = ({ name, value, onChange, error, placeholder }) => (
    <div className="space-y-2">
        <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            rows={4}
            placeholder={placeholder}
            className={`w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl border-2 bg-white/80 backdrop-blur-sm transition-all duration-300 
                placeholder-gray-500 text-base sm:text-lg font-medium resize-none
                focus:outline-none focus:ring-2 focus:ring-[#403B21]/20 focus:border-[#403B21]
                hover:border-[#403B21]/50 ${error ? 'border-red-500 focus:border-red-500' : 'border-[#403B21]/30'}`}
        ></textarea>
        {error && <p className="text-red-500 text-xs font-medium mt-1 pl-1">{error}</p>}
    </div>
);

export default ContactForm;