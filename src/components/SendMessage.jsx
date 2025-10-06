import React from 'react'
import Theme from "../Constants/Theme"
import Button from './Button'


const SendMessage = () => {
    return (
        <div className='section-container'>
            <div className={`w-full bg-[${Theme.colors.background}] p-4 px-5 my-10`}>
                <div className='flex justify-between items-center'>
                    <span className={`font-serif text-4xl text-[${Theme.colors.text}]`}>
                        Have You Any Question ? Ask Us Anything!
                    </span>

                    <Button
                        icon={false}
                        variant='secondary'
                    >Send Message</Button>
                </div>


            </div>
        </div>
    )
}

export default SendMessage
