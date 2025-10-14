import { MapPin, Mail, Phone } from 'lucide-react';
import React, { useState } from 'react';
import Button from '../../components/Button';
import Theme from '../../Constants/Theme';
import { useNavigate } from 'react-router-dom';
import HeaderTitle from '../../components/HeaderTitle';
import FacebookIcon from "../../assets/social/facebook.svg?react";
import PinterestIcon from "../../assets/social/pinterest.svg?react";
import InstagramIcon from "../../assets/social/Instagram.svg?react";

const ContactForm = () => {
    const navigate = useNavigate();

    const socialLinks = [
        {
            href: "https://www.facebook.com/people/Veloura-Stays/61581131180973/",
            icon: <FacebookIcon />,
        },
        {
            href: "https://www.pinterest.com/velourastays/",
            icon: <PinterestIcon />,
        },
        {
            href: "https://www.instagram.com/velourastays/",
            icon: <InstagramIcon />,
        },
    ];

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
            <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 lg:gap-12 my-6 sm:my-8 mb-12 sm:mb-16">

                {/* Left Section - Contact Details - 40% */}
                <div className="lg:w-2/5 flex flex-col bg-[#F7F5F1] py-7 px-10 sm:p-8 lg:p-12 shadow-xl sm:shadow-2xl rounded-xl sm:rounded-2xl border border-[#403B21]/10 min-h-[370px] sm:min-h-[600px]">

                    <h3 className='text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center lg:text-left tracking-wide'
                        style={{ color: Theme.colors.text }}>
                        Connect With Us
                    </h3>

                    <div className="flex-1 flex flex-col justify-center space-y-5 sm:space-y-6 lg:space-y-8">
                        {[
                            {
                                icon: <MapPin className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#403B21]" />,
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
                                icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-[#403B21]" />,
                                title: 'Message Us',
                                content: 'reservation@velourastays.com'
                            },
                            {
                                icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6 lg:w-6 lg:h-7 text-[#403B21]" />,
                                title: 'Contact Us',
                                content: '+91 9797979075'
                            }
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-start space-x-3 sm:space-x-4 group hover:transform hover:translate-x-1 transition-all duration-300">

                                <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-white rounded-xl sm:rounded-2xl flex items-center justify-center shadow-md sm:shadow-lg border border-[#403B21]/10 group-hover:shadow-lg sm:group-hover:shadow-xl transition-all duration-300">
                                    {item.icon}
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xs sm:text-sm lg:text-base font-semibold mb-1 sm:mb-2 tracking-wide" style={{ color: Theme.colors.text }}>
                                        {item.title}
                                    </h3>
                                    <p className="text-xs sm:text-sm lg:text-base leading-relaxed font-medium" style={{ color: Theme.colors.darkText }}>
                                        {item.content}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-6 sm:mt-8">
                        <div className="flex justify-center lg:justify-start items-center gap-4 sm:gap-6">
                            {socialLinks.map((item, i) => (
                                <a
                                    key={i}
                                    href={item.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 rounded-full hover:scale-110 transition-transform duration-300"
                                >
                                    {React.cloneElement(item.icon, {
                                        className: "w-full h-full object-contain text-[#403B21]",
                                    })}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Section - Contact Form - 60% */}
                <div className="lg:w-3/5 flex flex-col bg-[#F7F5F1] shadow-xl sm:shadow-2xl rounded-xl sm:rounded-2xl p-5 sm:p-8 lg:p-12 border border-[#403B21]/10 min-h-[500px] sm:min-h-[600px]">
                    <div className="flex-1 flex flex-col justify-center">
                        <form className="space-y-4 sm:space-y-6" onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
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

                            <div className="flex justify-center pt-3 sm:pt-4">
                                <Button
                                    icon={false}
                                    variant="secondary"
                                    className="w-full sm:w-2/3 lg:w-1/2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base lg:text-lg font-semibold rounded-lg sm:rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg sm:hover:shadow-xl"
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
            className={`w-full px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl border-2 bg-white/80 backdrop-blur-sm transition-all duration-300 
                placeholder-gray-500 text-sm sm:text-base lg:text-lg font-medium
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
            rows={3}
            placeholder={placeholder}
            className={`w-full px-3 sm:px-4 lg:px-5 py-2 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl border-2 bg-white/80 backdrop-blur-sm transition-all duration-300 
                placeholder-gray-500 text-sm sm:text-base lg:text-lg font-medium resize-none
                focus:outline-none focus:ring-2 focus:ring-[#403B21]/20 focus:border-[#403B21]
                hover:border-[#403B21]/50 ${error ? 'border-red-500 focus:border-red-500' : 'border-[#403B21]/30'}`}
        ></textarea>
        {error && <p className="text-red-500 text-xs font-medium mt-1 pl-1">{error}</p>}
    </div>
);

export default ContactForm;