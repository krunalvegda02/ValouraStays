import React from 'react'

const Map = () => {
  return (
    <div className='section-container'>
      <div className="  h-[400px] my-16 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3681.45929128856!2d73.7125!3d24.5854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967f38cdcd011b9%3A0xa8d90a1b16bb7!2sUdaipur%2C%20Rajasthan%2C%20India!5e0!3m2!1sen!2sin!4v1696240000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          loading="lazy"
        ></iframe>
      </div>
    </div>

  )
}

export default Map
