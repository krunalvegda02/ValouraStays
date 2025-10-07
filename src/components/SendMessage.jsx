import React from 'react';
import Theme from "../Constants/Theme";
import Button from './Button';
import { useNavigate } from 'react-router-dom';

const SendMessage = () => {
    const navigate = useNavigate();

    return (
        <div className='section-container px-4 sm:px-6 lg:px-20'>
            <div className={`w-full bg-[${Theme.colors.background}] p-4 sm:p-6 my-10`}>
                <div className='flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0'>
                    <span className={`font-serif text-2xl sm:text-3xl lg:text-4xl text-center sm:text-left text-[${Theme.colors.text}]`}>
                        Have You Any Question? Ask Us Anything!
                    </span>

                    <Button
                        onClick={() => navigate("/contact")}
                        icon={false}
                        variant='secondary'
                        className='w-full sm:w-auto px-6 py-2 sm:py-3'
                    >
                        <span className='text-sm sm:text-base lg:text-lg'>Send Message</span>
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default SendMessage;
