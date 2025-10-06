import React from 'react'
import Theme from '../../Constants/Theme'

const PopularAttraction = () => {
    const attractions = [
        "Fatesagar Lake",
        "City Palace",
        "Celebration mall",
        "Ekling ji temple",
        "Shreemath Temple",
        "Shayari ki bari"
    ]

    return (
        <div className='section-container'>
            <div className='my-16'>
                <h1 className={`text-${Theme.colors.text} text-3xl font-bold  mb-12 font-serif`}>
                    "Popular attraction in Udaipur"
                </h1>
                <div className='border border-gray-200  p-6  backdrop-blur-sm shadow-[0_0_50px_-12px_rgba(0,0,0,0.25)]'>
                    <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
                        {attractions.map((attraction, index) => (
                            <div
                                key={index}
                                className={`p-6 text-[${Theme.colors.text}]  transition-all duration-300 hover:scale-105 cursor-pointer group`}
                            >
                                <h2 className='text-3xl font-semibold  transition-colors duration-300 text-center'>
                                    {attraction}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
                <p className={`text-[${Theme.colors.darkText}] my-7 text-2xl text-center`}>
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