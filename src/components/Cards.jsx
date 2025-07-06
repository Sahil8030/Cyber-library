import React from "react";

function Cards({ item }) {
  return (
    <div className="p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
        <img
          src={item?.image}
          alt={item?.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg mb-2">{item?.title}</h2>
          <a
            href={item?.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            View PDF
          </a>
        </div>
      </div>
    </div>
  );
}

export default Cards;
