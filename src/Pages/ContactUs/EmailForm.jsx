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
        subject: '',
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

        if (!formData.subject.trim()) newErrors.subject = 'Subject is required';
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
        !formData.subject.trim() ||
        !formData.comment.trim();

    return (
        <div className="section-container px-4 sm:px-6 lg:px-20">
            <HeaderTitle title="Get In Touch" />

            <div className="grid grid-cols-1 lg:grid-cols-10 gap-8 lg:gap-12 my-8">

                {/* Left Section - Contact Details */}
                <div className="space-y-6 lg:col-span-4">
                    {[
                        {
                            icon: <MapPin className="w-6 h-6 sm:w-9 sm:h-9 text-[#403B21]" />,
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
                            icon: <Mail className="w-6 h-6 sm:w-9 sm:h-9 text-[#403B21]" />,
                            title: 'Message Us',
                            content: <u>reservation@velourastays.com</u>
                        },
                        {
                            icon: <Phone className="w-5 h-6 sm:w-7 sm:h-9 text-[#403B21]" />,
                            title: 'Contact Us',
                            content: '+91 9797979075'
                        }
                    ].map((item, idx) => (
                        <div key={idx} className="flex items-start space-x-3 sm:space-x-4">
                            <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20  bg-[#F7F5F1] rounded-full flex items-center justify-center shadow-md">
                                {item.icon}
                            </div>
                            <div>
                                <h3 className="text-lg sm:text-2xl font-semibold mb-1 sm:mb-2" style={{ color: Theme.colors.text }}>
                                    {item.title}
                                </h3>
                                <p className="text-sm sm:text-base" style={{ color: Theme.colors.darkText }}>
                                    {item.content}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Section - Contact Form */}
                <div className="lg:col-span-6  bg-[#F7F5F1]  shadow-lg p-6 sm:p-10 ">
                    <form className="space-y-6 mt-4" onSubmit={handleSubmit} noValidate>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <InputField
                                label="First Name"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                error={errors.firstName}
                                placeholder="John"
                            />
                            <InputField
                                label="Last Name"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                error={errors.lastName}
                                placeholder="Doe"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                            <InputField
                                label="Phone Number"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                error={errors.phone}
                                placeholder="9876543210"
                                maxLength={10}
                            />
                            <InputField
                                label="Email Address"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                error={errors.email}
                                placeholder="you@example.com"
                            />
                        </div>

                        <InputField
                            label="Subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleChange}
                            error={errors.subject}
                            placeholder="How can we help you?"
                        />

                        <TextAreaField
                            label="Comment"
                            name="comment"
                            value={formData.comment}
                            onChange={handleChange}
                            error={errors.comment}
                            placeholder="Your comments here..."
                        />

                        <div className="flex justify-center">
                            <Button type="submit" icon={false} variant="secondary" className='w-full sm:w-1/2 ' disabled={isSubmitDisabled}>
                                Submit Now
                            </Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};



// Reusable Input Field Component
const InputField = ({ label, name, value, onChange, error, placeholder, maxLength }) => (
    <div>
        <label htmlFor={name} className="block text-sm sm:text-base font-medium mb-1 sm:mb-2" style={{ color: Theme.colors.darkText }}>
            {label}
        </label>
        <input
            id={name}
            type="text"
            name={name}
            value={value}
            onChange={onChange}
            maxLength={maxLength}
            className={`w-full px-3 sm:px-4 py-2 sm:py-3  rounded focus:ring-2 focus:ring-[#403B21] focus:border-transparent text-sm sm:text-base ${error ? 'border-red-500' : 'border-[#403B21] '}  bg-white`}
            placeholder={placeholder}
        />
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

// Reusable TextArea Field
const TextAreaField = ({ label, name, value, onChange, error, placeholder }) => (
    <div>
        <label htmlFor={name} className="block text-sm sm:text-base font-medium mb-1 sm:mb-2" style={{ color: Theme.colors.darkText }}>
            {label}
        </label>
        <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            rows={5}
            className={`bg-white w-full px-3 sm:px-4 py-2 sm:py-3  rounded focus:ring-2 focus:ring-[#403B21] focus:border-transparent text-sm sm:text-base ${error ? 'border-red-500' : 'border-[#403B21]'}`}
            placeholder={placeholder}
        ></textarea>
        {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
);

export default ContactForm;
