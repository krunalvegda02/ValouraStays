import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import HeaderTitle from "../../components/HeaderTitle";
import IMAGES from "../../Constants/Images";
import { useNavigate } from "react-router-dom";

const Villas = () => {
  const navigate = useNavigate();

  const villas = [
    {
      id: 1,
      image: IMAGES.VILLA1,
      title: "Hammer Kothi",
      location: "Udaipur, Rajasthan",
      amenities: "AC Suite / Dining / Kitchen",
      description: `Stay at Villa Izara, where luxury meets nature in the 
heart of the Aravalli ranges. With spacious interiors, a 
private pool, and world-class amenities, every moment 
invites you to relax, celebrate, and make unforgettable 
memories.`,
      price: "₹ 50,000",
      link: "/villasIzara",
    },
    {
      id: 2,
      image: IMAGES.VILLA3,
      title: "Villa Izara",
      location: "Jaipur, Rajasthan",
      amenities: "AC Suite / Pool / Kitchen",
      description: `Stay at Villa Izara, where luxury meets nature in the 
heart of the Aravalli ranges. With spacious interiors, a 
private pool, and world-class amenities, every moment 
invites you to relax, celebrate, and make unforgettable 
memories.`,
      price: "₹ 60,000",
      link: "/villasIzara",
    },
    {
      id: 3,
      image: IMAGES.VILLA2,
      title: "Kairos Hills",
      location: "Udaipur, Rajasthan",
      amenities: "AC Suite / Lake View / Dining",
      description: `Stay at Villa Izara, where luxury meets nature in the 
heart of the Aravalli ranges. With spacious interiors, a 
private pool, and world-class amenities, every moment 
invites you to relax, celebrate, and make unforgettable 
memories.`,
      price: "₹ 50,000",
      link: "/villasIzara",
    },
  ];

  return (
    <div className="section-container ">
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12">
        <div className="flex justify-center items-center text-center sm:mb-0 w-full sm:w-auto">
          <HeaderTitle title="Luxury Villas & Heritage Stays" />
        </div>

        {/* Explore More Button */}
        <Button
          onClick={() => navigate("/villas")}
          className="rounded-xl sm:rounded-xl w-full sm:w-auto mx-auto sm:mx-0 px-8 py-3 sm:px-10 text-base sm:text-lg shadow-md hover:shadow-lg transition-all duration-300"
          icon={false}
          variant="primary"
        >
          <span className="font-serif">Explore More Villas!</span>
        </Button>
      </div>

      {/* Villas Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
        {villas.map((villa) => (
          <Card key={villa.id} {...villa} />
        ))}
      </div>
    </div>
  );
};

export default Villas;
