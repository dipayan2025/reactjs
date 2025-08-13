import React from 'react'

function Card({channel,btn="Visit me"}) {
    console.log("props",{channel});
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-xl shadow-lg p-5 hover:shadow-2xl transition-shadow duration-300">
      <img 
        className="rounded-t-xl w-full h-48 object-cover" 
        src="https://images.pexels.com/photos/30895359/pexels-photo-30895359.jpeg" 
        alt="Card Image" 
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">
          This is a simple card component built with Tailwind CSS. You can customize it as needed.
        </p>
        <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg">
          {channel} {btn} 
        </button>
      </div>
    </div>
  )
}

export default Card
