
import React from "react";

function Cards({ item }) {
  return (
    <div className="p-4">
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <img
          src={item.image || "/images/default.jpg"} // fallback image
          alt={item.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg text-gray-800">{item.title}</h2>
          <button
            onClick={() => window.open(item.link || "#", "_blank")}
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;

