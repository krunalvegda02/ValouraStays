import React from "react";
import HeaderTitle from "../../components/HeaderTitle";
import Card from "../../components/Card";
import Theme from "../../Constants/Theme";

const Villas = () => {
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

    return (
        <div className="section-container">
            <HeaderTitle title="Wonderful Villas in the heart of Udaipur Heights" />

            <div className="flex flex-col space-y-16 mt-10">
                {/* Row 1 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-[60%] text-center md:text-left space-y-4">
                        <p className={`text-3xl text-center text-[${Theme.colors.darkText}]`}>
                            And here’s the thing — where you stay makes a huge difference.
                            Imagine waking up to those stunning views, having space for
                            everyone to relax, and winding down by the pool or in a quiet
                            gazebo. That’s exactly what we’ve built with Veloura Stays.
                        </p>
                    </div>

                    <div className="md:w-2/6 flex justify-center">
                        <Card
                            image={villas[0].image}
                            title={villas[0].title}
                            location={villas[0].location}
                            amenities={villas[0].amenities}
                            description={villas[0].description}
                            price={villas[0].price}
                        />
                    </div>
                </div>

                {/* Row 2 (reversed) */}
                <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-10">
                    <div className="md:w-[60%] text-center md:text-left space-y-4">
                        <p className={`text-3xl text-center text-[${Theme.colors.darkText}]`}>
                            Each of our villas in Udaipur has its own charm. Villa Izara can
                            be your private hideout among the mountains. Looking for a royal
                            stay? Hammer Kothi is your place to be. Whichever stay you book,
                            one thing’s for sure — you’ll leave feeling fulfilled.
                        </p>
                    </div>

                    <div className="md:w-2/6 flex justify-center">
                        <Card
                            image={villas[1].image}
                            title={villas[1].title}
                            location={villas[1].location}
                            amenities={villas[1].amenities}
                            description={villas[1].description}
                            price={villas[1].price}
                        />
                    </div>
                </div>

                {/* Row 3 */}
                <div className="flex flex-col md:flex-row items-center justify-between gap-10">
                     <div className="md:w-[60%] text-center md:text-left space-y-4">
                        <p className={`text-3xl text-center text-[${Theme.colors.darkText}]`}>
                            The city of lakes, with its beautiful Aravali ranges and royal
                            forts and palaces, has everything a tourist spot can offer. No
                            wonder it makes the top 10 tourist places every year. While
                            you’re there, something that can truly make your experience
                            worthwhile is the stay you book.
                        </p>
                    </div>

                    <div className="md:w-2/6 flex justify-center">
                        <Card
                            image={villas[2].image}
                            title={villas[2].title}
                            location={villas[2].location}
                            amenities={villas[2].amenities}
                            description={villas[2].description}
                            price={villas[2].price}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Villas;
