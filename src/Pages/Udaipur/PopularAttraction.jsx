import React from 'react'
import Theme from '../../Constants/Theme'

const PopularAttraction = () => {
    const attractions = [
        "Fatesagar Lake",
        "City Palace",
        "Celebration Mall",
        "Ekling Ji Temple",
        "Shreemath Temple",
        "Shayari Ki Bari"
    ]

    return (
        <div className='section-container px-4 sm:px-6 lg:px-20'>
            <div className='my-12 sm:my-16'>
                <h2 className={`text-[${Theme.colors.text}] text-2xl sm:text-4xl lg:text-6xl font-bold mb-8 sm:mb-12 font-serif `}>
                    Popular Attractions in Udaipur
                </h2>

                <div className='border border-gray-200 p-4 sm:p-6 lg:p-8 backdrop-blur-sm shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)] rounded-none'>
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8'>
                        {attractions.map((attraction, index) => (
                            <div
                                key={index}
                                className={`p-4 sm:p-6 lg:p-8 text-[${Theme.colors.text}] transition-all duration-300 hover:scale-105 cursor-pointer group`}
                            >
                                <h2 className='text-xl sm:text-2xl lg:text-3xl font-semibold transition-colors duration-300 '>
                                    {attraction}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>

                <p className={`text-[${Theme.colors.darkText}] my-4 sm:my-7 text-base sm:text-lg lg:text-2xl text-center leading-relaxed`}>
                    Our villas are made for comfort and connection, big families, close friends, or even just a
                    peaceful retreat for yourself. Plus, you’re right in the middle of it all. Want to see the famous
                    lakes? Fatehsagar, Pichola, Badi, and Udaisagar are right there. Love history and architecture?
                    City Palace, Bagore Ki Haveli, and Sajjangarh are a must. Prefer quiet corners? The ghats like
                    Gangaur and Ambrai are perfect for that. You can even make a quick trip to Shreenathji or
                    Jagdish Temple if you’re in the mood for something spiritual.
                </p>
            </div>
        </div>
    )
}

export default PopularAttraction
