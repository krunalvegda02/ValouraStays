import React, { useState } from 'react'
import HeaderTitle from '../../components/HeaderTitle'
import Card from '../../components/Card';

const Filters = () => {

    const villas = [
        {
            id: 1,
            image: "/api/placeholder/400/300",
            title: "Hammer Kothi",
            location: "Udaipur, Rajasthan",
            amenities: "AC Suite / Dining / Kitchen",
            description:
                "In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. In enim justo, rhoncus ut,...",
            price: "₹ 12,999",
        },
        {
            id: 2,
            image: "/api/placeholder/400/300",
            title: "Royal Palace",
            location: "Jaipur, Rajasthan",
            amenities: "AC Suite / Pool / Kitchen",
            description:
                "Luxurious palace with traditional architecture and modern amenities for a royal experience.",
            price: "₹ 15,999",
        },
        {
            id: 3,
            image: "/api/placeholder/400/300",
            title: "Lake View Villa",
            location: "Udaipur, Rajasthan",
            amenities: "AC Suite / Lake View / Dining",
            description:
                "Beautiful villa overlooking the lake with stunning sunset views and premium comforts.",
            price: "₹ 11,999",
        },
    ];



    const [priceRange, setPriceRange] = useState(5000)
    const [adults, setAdults] = useState(1)
    const [children, setChildren] = useState(0)
    const [villaType, setVillaType] = useState({
        acSuite: false,
        withoutAc: false,
        breakfast: false
    })

    const handleVillaTypeChange = (type) => {
        setVillaType(prev => ({
            ...prev,
            [type]: !prev[type]
        }))
    }

    const handleReset = () => {
        setPriceRange(5000)
        setAdults(1)
        setChildren(0)
        setVillaType({
            acSuite: false,
            withoutAc: false,
            breakfast: false
        })
    }

    return (
        <div className='section-container'>
            <div className='py-16'>
                <HeaderTitle
                    title='Wonderful Villas in the heart of Udaipur Hights'
                />

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12'>
                    {/* Left Section - 30% */}
                    <div className='lg:col-span-1  p-6'>
                        <h3 className='text-xl font-semibold text-gray-800 mb-6'>Filters</h3>

                        {/* Price Range */}
                        <div className='mb-8'>
                            <label className='block text-sm font-medium text-gray-700 mb-4'>
                                Price Range: ₹{priceRange}
                            </label>
                            <input
                                type="range"
                                min="1000"
                                max="20000"
                                step="500"
                                value={priceRange}
                                onChange={(e) => setPriceRange(e.target.value)}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                            />
                            <div className='flex justify-between text-xs text-gray-500 mt-2'>
                                <span>₹1000</span>
                                <span>₹20000</span>
                            </div>
                        </div>

                        {/* Adults */}
                        <div className='mb-8'>
                            <label className='block text-sm font-medium text-gray-700 mb-4'>
                                Adults
                            </label>
                            <div className='flex items-center space-x-4'>
                                <button
                                    onClick={() => setAdults(prev => Math.max(1, prev - 1))}
                                    className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100'
                                >
                                    -
                                </button>
                                <span className='text-lg font-medium'>{adults}</span>
                                <button
                                    onClick={() => setAdults(prev => prev + 1)}
                                    className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100'
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Children */}
                        <div className='mb-8'>
                            <label className='block text-sm font-medium text-gray-700 mb-4'>
                                Children
                            </label>
                            <div className='flex items-center space-x-4'>
                                <button
                                    onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                                    className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100'
                                >
                                    -
                                </button>
                                <span className='text-lg font-medium'>{children}</span>
                                <button
                                    onClick={() => setChildren(prev => prev + 1)}
                                    className='w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100'
                                >
                                    +
                                </button>
                            </div>
                        </div>

                        {/* Villa Type */}
                        <div className='mb-8'>
                            <label className='block text-sm font-medium text-gray-700 mb-4'>
                                Villa Type
                            </label>
                            <div className='space-y-3'>
                                <label className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        checked={villaType.acSuite}
                                        onChange={() => handleVillaTypeChange('acSuite')}
                                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                    />
                                    <span className='ml-3 text-gray-700'>AC Suite</span>
                                </label>
                                <label className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        checked={villaType.withoutAc}
                                        onChange={() => handleVillaTypeChange('withoutAc')}
                                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                    />
                                    <span className='ml-3 text-gray-700'>Without AC Suite</span>
                                </label>
                                <label className='flex items-center'>
                                    <input
                                        type="checkbox"
                                        checked={villaType.breakfast}
                                        onChange={() => handleVillaTypeChange('breakfast')}
                                        className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                                    />
                                    <span className='ml-3 text-gray-700'>Add Breakfast</span>
                                </label>
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className='flex space-x-4'>
                            <button className='flex-1  text-white py-3 rounded-lg  transition duration-300 font-semibold'>
                                Filter
                            </button>
                            <button
                                onClick={handleReset}
                                className='flex-1 bg-gray-300  py-3 rounded-lg transition duration-300 font-semibold'
                            >
                                Reset
                            </button>
                        </div>
                    </div>

                    {/* Right Section - 70% */}
                    <div className='lg:col-span-2 rounded-2xl p-6'>
                        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
                            {villas.map((villa) => (
                                <Card key={villa.id} {...villa} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filters