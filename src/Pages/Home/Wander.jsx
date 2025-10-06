import React, { useState } from 'react'
import HeaderTitle from '../../components/HeaderTitle'

const Wander = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { id: 0, label: "Property View" },
    { id: 1, label: "Udaipur Tourist Spots" },
    { id: 2, label: "Urban Gateways" }
  ]

  const photoCards = [
    {
      id: 1,
      image: "/api/placeholder/400/250",
      location: "Bali, Indonesia",
      state: "Tropical Paradise"
    },
    {
      id: 2,
      image: "/api/placeholder/400/250",
      location: "Aspen, Colorado",
      state: "Mountain Retreat"
    },
    {
      id: 3,
      image: "/api/placeholder/400/250",
      location: "Miami, Florida",
      state: "Beach Front"
    },
    {
      id: 4,
      image: "/api/placeholder/400/250",
      location: "Tokyo, Japan",
      state: "Urban Escape"
    },
    {
      id: 5,
      image: "/api/placeholder/400/250",
      location: "Paris, France",
      state: "City Lights"
    }
  ]

  return (
    <div className="section-container">

      <div className="flex justify-center mt-16 ">
        <div className="w-full max-w-4xl text-center">
          <HeaderTitle title="wander & unwind"  space={false} />
        </div>
      </div>
      <p className='flex my-3  justify-center'>From serene property views to buzzing urban getaways, enjoy every side of your escape.</p>



      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="flex space-x-8 border-b">
          {tabs.map((tab) => (
            <div
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`pb-4 px-1 font-medium text-sm whitespace-nowrap transition-colors duration-200 ${activeTab === tab.id
                ? 'text-gray-900 border-b-2 border-gray-900 font-bold'
                : 'text-gray-500 hover:text-gray-700 border-b-2 border-transparent hover:border-gray-300'
                }`}
            >
              {tab.label}
            </div>
          ))}
        </div>
      </div>
      {/* Photo Cards - 3 in first row, 2 in second row */}
      <div className="space-y-6 ">
        {/* First row - 3 images */}
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          {photoCards.slice(0, 3).map((card) => (
            <div key={card.id} className="group cursor-pointer flex-1 max-w-md">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={card.image}
                  alt={card.location}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white">
                    <div className="font-semibold text-lg">{card.location}</div>
                    <div className="text-sm opacity-90">{card.state}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Second row - 2 images centered */}
        <div className="flex flex-col md:flex-row gap-6 justify-center md:w-2/3 md:mx-auto mb-16" >
          {photoCards.slice(3, 5).map((card) => (
            <div key={card.id} className="group cursor-pointer flex-1 max-w-md">
              <div className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <img
                  src={card.image}
                  alt={card.location}
                  className="w-full h-64 object-cover group-hover:scale-105 transition duration-300"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                  <div className="text-white">
                    <div className="font-semibold text-lg">{card.location}</div>
                    <div className="text-sm opacity-90">{card.state}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Wander