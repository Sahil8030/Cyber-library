import React from "react";

function Cards({ item }) {
  // 🛡️ Guard: If item is undefined, skip rendering
  if (!item) return null;

  const { image, title, link } = item;

  return (
    <div className="p-4">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-md overflow-hidden">
        <img
          src={image ?? "/fallback.png"} // ✅ fallback image if missing
          alt={title ?? "Book cover"}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="font-semibold text-lg mb-2">{title}</h2>
          <a
            href={link ?? "#"}
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
