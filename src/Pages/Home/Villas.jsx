import React from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";
import HeaderTitle from "../../components/HeaderTitle";

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
    <div className="section-container my-16">

      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-16">


        <div className="flex justify-center mt-16 items-center ">
          <div className="w-full max-w-7xl text-center">
            <HeaderTitle title=" Luxury Villas & Heritage Stays" />
          </div>
        </div>

        <Button
          className="rounded-xl"
          icon={false}
          variant="primary"
        >
          <span className="font-serif">Explore More Villas!</span>
        </Button>
      </div>

      {/* Villas Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {villas.map((villa) => (
          <Card key={villa.id} {...villa} />
        ))}
      </div>
    </div>

  );
};

export default Villas;
