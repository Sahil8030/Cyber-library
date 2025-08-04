import React from "react";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-6 mt-28 text-center">
      <h1 className="text-3xl font-bold mb-4 text-pink-600">Contact Us</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-8">
        For inquiries, please email us at cyberbooks@example.com or fill out our form (coming soon).
      </p>

      <Link to="/">
        <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
          Back to Home
        </button>
      </Link>
    </div>
  );
}

export default Contact;
