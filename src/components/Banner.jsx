import React from "react";

function Banner() {
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
      <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-36">
        <div className="space-y-8">
          <h1 className="text-2xl md:text-4xl font-bold">
            Build Security Expertise Through{" "}
            <span className="text-pink-500">Trusted Cyber Books!</span>
          </h1>
          <p className="text-sm md:text-xl">
            Every expert was once a beginner. Step into the world of cybersecurity with purpose.
            Explore books that ignite passion, sharpen your skills, and push you closer to mastery.
            Your journey to greatness starts right here.
          </p>
        </div>
      </div>

      {/* Removed the image completely */}
      <div className="order-1 w-full mt-20 md:w-1/2 flex items-center justify-center">
        <div className="text-3xl text-gray-400 italic">📚 Cyber Library</div>
      </div>
    </div>
  );
}

export default Banner;
