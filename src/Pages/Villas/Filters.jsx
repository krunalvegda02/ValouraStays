import React, { useState } from 'react';
import HeaderTitle from '../../components/HeaderTitle';
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
            location: "Udaipur, Rajasthan",
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

    const [priceRange, setPriceRange] = useState(5000);
    const [adults, setAdults] = useState(1);
    const [children, setChildren] = useState(0);
    const [villaType, setVillaType] = useState({
        acSuite: false,
        withoutAc: false,
        breakfast: false
    });

    const handleVillaTypeChange = (type) => {
        setVillaType(prev => ({
            ...prev,
            [type]: !prev[type]
        }));
    };

    const handleReset = () => {
        setPriceRange(5000);
        setAdults(1);
        setChildren(0);
        setVillaType({
            acSuite: false,
            withoutAc: false,
            breakfast: false
        });
    };

    const handleFilter = () => {
        // Implement your filter logic here
        console.log({ priceRange, adults, children, villaType });
    };

    return (
        <div className='section-container '>
            <div className=' mb-8'>
                <HeaderTitle
                    title='Wonderful Villas in the heart of Udaipur Heights'
                    textColor={Theme.colors.text}
                />

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8  '>

                    {/* Left Section - Filters */}
                    <div className='lg:col-span-1'>
                        <div className='sticky top-6'>
                            <div className='pt-0 px-6 pb-6  sm:p-6  shadow-lg'>
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
                                            className="w-full h-2 appearance-none cursor-pointer rounded-lg"
                                            style={{
                                                backgroundColor: Theme.colors.lightText,
                                                accentColor: Theme.colors.text
                                            }}
                                        />
                                        <div className='flex justify-between text-xs md:text-sm text-[${Theme.colors.darkText}] mt-2'>
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
                                                className='cursor-pointer transition'
                                                style={{ color: Theme.colors.text }}
                                                onClick={() => setAdults(prev => Math.max(1, prev - 1))}
                                            />
                                            <span className='text-lg md:text-2xl font-medium' style={{ color: Theme.colors.text }}>
                                                {adults}
                                            </span>
                                            <PlusCircle
                                                size={30}
                                                className='cursor-pointer transition'
                                                style={{ color: Theme.colors.text }}
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
                                                className='cursor-pointer transition'
                                                style={{ color: Theme.colors.text }}
                                                onClick={() => setChildren(prev => Math.max(0, prev - 1))}
                                            />
                                            <span className='text-lg md:text-2xl font-medium' style={{ color: Theme.colors.text }}>
                                                {children}
                                            </span>
                                            <PlusCircle
                                                size={30}
                                                className='cursor-pointer transition'
                                                style={{ color: Theme.colors.text }}
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
                                                        className='w-4 h-4 rounded focus:ring'
                                                        style={{ accentColor: Theme.colors.text }}
                                                    />
                                                    <span className='ml-2  text-base sm:text-lg md:text-xl' style={{ color: Theme.colors.darkText }}>
                                                        {key === 'acSuite' ? 'AC Suite' : key === 'withoutAc' ? 'Without AC Suite' : 'Add Breakfast'}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Buttons */}
                                    <div className='flex space-x-3 mt-6'>
                                        <div
                                            onClick={handleFilter}
                                            className='flex-1 text-center py-3 font-semibold shadow-md cursor-pointer transition-colors duration-300'
                                            style={{ backgroundColor: Theme.colors.text, color: Theme.colors.background }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = Theme.colors.darkText;
                                                e.target.style.color = Theme.colors.lightText;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = Theme.colors.text;
                                                e.target.style.color = Theme.colors.background;
                                            }}
                                        >
                                            Filter
                                        </div>

                                        <div
                                            onClick={handleReset}
                                            className='flex-1 text-center py-3 font-semibold shadow-md cursor-pointer transition-colors duration-300'
                                            style={{ backgroundColor: Theme.colors.lightText, color: Theme.colors.text }}
                                            onMouseEnter={(e) => {
                                                e.target.style.backgroundColor = Theme.colors.darkText;
                                                e.target.style.color = Theme.colors.background;
                                            }}
                                            onMouseLeave={(e) => {
                                                e.target.style.backgroundColor = Theme.colors.lightText;
                                                e.target.style.color = Theme.colors.text;
                                            }}
                                        >
                                            Reset
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Villas */}
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
    );
};

export default Filters;
