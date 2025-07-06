import React from "react";

function Cards({ item }) {
  return (
    <div className="border p-4 rounded shadow text-center">
      <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
      <a
        href={item.link}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 underline"
      >
        View Book
      </a>
    </div>
  );
}

export default Cards;
