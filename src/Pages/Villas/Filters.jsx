import React, { useState } from 'react'
import HeaderTitle from '../../components/HeaderTitle'
import Card from '../../components/Card';
import IMAGES from '../../Constants/Images';
import Theme from '../../Constants/Theme';
import { MinusCircle, PlusCircle } from 'lucide-react';

const Filters = () => {

    const villas = [
        {
            id: 1,
            image: IMAGES.VILLA1,
            title: "Hammer Kothi",
            location: "Udaipur, Rajasthan",
            amenities: "AC Suite / Dining / Kitchen",
            description:
                `Stay at Villa Izara, where luxury meets nature in the 
heart of the Aravalli ranges. With spacious interiors, a 
private pool, and world-class amenities, every moment 
invites you to relax, celebrate, and make unforgettable 
memories.`,
            price: "₹ 50,000",
            link: "/villasIzara"
        },
        {
            id: 2,
            image: IMAGES.VILLA3,
            title: "Villa Izara",
            location: "Jaipur, Rajasthan",
            amenities: "AC Suite / Pool / Kitchen",
            description:
                `Stay at Villa Izara, where luxury meets nature in the 
heart of the Aravalli ranges. With spacious interiors, a 
private pool, and world-class amenities, every moment 
invites you to relax, celebrate, and make unforgettable 
memories.`,
            price: "₹ 60,000",
            link: "/villasIzara"
        },
        {
            id: 3,
            image: IMAGES.VILLA2,
            title: "Kairos Hills",
            location: "Udaipur, Rajasthan",
            amenities: "AC Suite / Lake View / Dining",
            description:
                `Stay at Villa Izara, where luxury meets nature in the 
heart of the Aravalli ranges. With spacious interiors, a 
private pool, and world-class amenities, every moment 
invites you to relax, celebrate, and make unforgettable 
memories.`,
            price: "₹ 50,000",
            link: "/villasIzara"
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
            <div className=' px-4 md:px-8'>
                <HeaderTitle
                    title='Wonderful Villas in the heart of Udaipur Heights'
                    textColor={Theme.colors.text}
                />

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 mt-10'>
                    {/* Left Section - Filters - Sticky */}
                    <div className='lg:col-span-1'>
                        <div className='sticky top-6'>
                            <div className='p-6 rounded-2xl bg-white shadow-lg'>
                                <h3 className='text-lg md:text-xl font-semibold mb-6' style={{ color: Theme.colors.text }}>
                                    Filters
                                </h3>

                                <div className='space-y-6'>
                                    {/* Price Range */}
                                    <div>
                                        <label className='block text-sm md:text-base font-medium mb-3' style={{ color: Theme.colors.darkText }}>
                                            Price Range: ₹{priceRange}
                                        </label>
                                        <input
                                            type="range"
                                            min="1000"
                                            max="20000"
                                            step="500"
                                            value={priceRange}
                                            onChange={(e) => setPriceRange(e.target.value)}
                                            className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-[#E2CAB3] accent-[#403B21]"
                                        />
                                        <div className='flex justify-between text-xs md:text-sm text-gray-500 mt-2'>
                                            <span>₹1000</span>
                                            <span>₹20000</span>
                                        </div>
                                    </div>

                                    {/* Adults */}
                                    <div>
                                        <label className='block text-sm md:text-base font-medium mb-3' style={{ color: Theme.colors.darkText }}>
                                            Adults
                                        </label>
                                        <div className='flex items-center space-x-3'>
                                            <MinusCircle
                                                size={30}
                                                className='cursor-pointer text-[#403B21] hover:text-[#332f1a] transition'
                                                onClick={() => setAdults(prev => Math.max(1, prev - 1))}
                                            />
                                            <span className='text-lg md:text-2xl font-medium'>{adults}</span>
                                            <PlusCircle
                                                size={30}
                                                className='cursor-pointer text-[#403B21] hover:text-[#332f1a] transition'
                                                onClick={() => setAdults(prev => prev + 1)}
                                            />
                                        </div>
                                    </div>

                                    {/* Children */}
                                    <div>
                                        <label className='block text-sm md:text-base font-medium mb-3' style={{ color: Theme.colors.darkText }}>
                                            Children
                                        </label>
                                        <div className='flex items-center space-x-3'>
                                            <MinusCircle
                                                size={30}
                                                className='cursor-pointer text-[#403B21] hover:text-[#332f1a] transition'
                                                onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                                            />
                                            <span className='text-lg md:text-2xl font-medium'>{children}</span>
                                            <PlusCircle
                                                size={30}
                                                className='cursor-pointer text-[#403B21] hover:text-[#332f1a] transition'
                                                onClick={() => setChildren(prev => prev + 1)}
                                            />
                                        </div>
                                    </div>

                                    {/* Villa Type */}
                                    <div>
                                        <label className='block text-sm md:text-base font-medium mb-3' style={{ color: Theme.colors.darkText }}>
                                            Villa Type
                                        </label>
                                        <div className='space-y-2'>
                                            {Object.keys(villaType).map((key) => (
                                                <label key={key} className='flex items-center'>
                                                    <input
                                                        type="checkbox"
                                                        checked={villaType[key]}
                                                        onChange={() => handleVillaTypeChange(key)}
                                                        className="w-4 h-4 text-[#403B21] rounded focus:ring-[#403B21]"
                                                        style={{ accentColor: Theme.colors.lightText }}
                                                    />
                                                    <span className='ml-2' style={{ color: Theme.colors.darkText, fontWeight: '500' }}>
                                                        {key === 'acSuite' ? 'AC Suite' : key === 'withoutAc' ? 'Without AC Suite' : 'Add Breakfast'}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Buttons below content */}
                                    <div className='flex space-x-3 mt-6'>
                                        <div className={`flex-1 bg-[${Theme.colors.background}] text-[${Theme.colors.text}] text-center py-3 rounded-lg cursor-pointer font-semibold hover:bg-[#332f1a] hover:text-white transition shadow-md`}>
                                            Filter
                                        </div>
                                        <div
                                            onClick={handleReset}
                                            className='flex-1 bg-gray-300 text-center py-3 rounded-lg cursor-pointer font-semibold hover:bg-gray-400 transition shadow-md'
                                        >
                                            Reset
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Villas - Scrollable */}
                    <div className='lg:col-span-2'>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
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