import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import Card from "../../components/Card";
import Theme from "../../Constants/Theme";
import IMAGES from "../../Constants/Images";

const Villas = () => {
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

    return (
        <div className="section-container ">
            <div className="mt-6 sm:mt-12">
                <HeaderTitle title="Wonderful Villas in the heart of Udaipur Heights" />

                <div className="flex flex-col space-y-8  sm:space-y-4 ">
                    {villas.map((villa, index) => {
                        const isReversed = index % 2 === 1; // reverse every second row
                        return (
                            <div
                                key={villa.id}
                                className={`flex flex-col md:flex-row ${!isReversed ? 'md:flex-row-reverse' : ''} items-center justify-between gap-6 md:gap-10`}
                            >
                                {/* Text Section */}
                                <div className="md:w-3/5 text-center md:text-left space-y-3 md:space-y-4">
                                    <p
                                        className={`text-sm sm:text-2xl md:text-3xl text-[${Theme.colors.darkText}]`}
                                    >
                                        {index === 0 &&
                                            "And here’s the thing — where you stay makes a huge difference. Imagine waking up to those stunning views, having space for everyone to relax, and winding down by the pool or in a quiet gazebo. That’s exactly what we’ve built with Veloura Stays."
                                        }
                                        {index === 1 &&
                                            "Each of our villas in Udaipur has its own charm. Villa Izara can be your private hideout among the mountains. Looking for a royal stay? Hammer Kothi is your place to be. Whichever stay you book, one thing’s for sure — you’ll leave feeling fulfilled."
                                        }
                                        {index === 2 &&
                                            "The city of lakes, with its beautiful Aravali ranges and royal forts and palaces, has everything a tourist spot can offer. No wonder it makes the top 10 tourist places every year. While you’re there, something that can truly make your experience worthwhile is the stay you book."
                                        }
                                    </p>
                                </div>

                                {/* Card Section */}
                                <div className="md:w-2/5 flex justify-center">
                                    <Card
                                        image={villa.image}
                                        title={villa.title}
                                        location={villa.location}
                                        amenities={villa.amenities}
                                        description={villa.description}
                                        price={villa.price}
                                        className="rounded-none" // sharp edges
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>

        </div>
    );
};

export default Villas;
