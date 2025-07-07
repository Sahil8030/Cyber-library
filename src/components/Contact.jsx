import React from "react";

function Contact() {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
      {/* Brand Info */}
      <h1 className="text-2xl font-bold text-blue-600">Cyber Library</h1>
      <p className="text-sm text-gray-500 mt-2">
        A growing collection of trusted cybersecurity books for learners and professionals.
      </p>

      
      <button
        onClick={goBack}
        className="mt-6 text-blue-600 hover:underline text-sm"
      >
        ← Go Back
      </button>
    </div>
  );
}

export default Contact;
