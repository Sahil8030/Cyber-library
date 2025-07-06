import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Cards from "./Cards";

function Freebook() {
  const book = [
    {
      id: 1,
      title: "Grey hat",
      image: "/image.png",
      link: "https://github.com/DoS0x99/cyber-security-books/blob/main/CyberSec%20In%20General/Gray%20Hat%20Hacking.pdf",
    },
    {
      id: 2,
      title: "Advanced persistent hacking",
      image: "/advance.png",
      link: "https://github.com/DoS0x99/cyber-security-books/blob/main/CyberSec%20In%20General/Advanced%20Persistent%20Threat%20Hacking.pdf",
    },
    {
      id: 3,
      title: "Penetration testing Windows",
      image: "/pent.png",
      link: "https://github.com/DoS0x99/cyber-security-books/blob/main/CyberSec%20In%20General/Hands-On%20Penetration%20Testing%20on%20Windows.pdf",
    },
    {
      id: 4,
      title: "Linux",
      image: "/linux.png",
      link: "https://github.com/DoS0x99/cyber-security-books/blob/main/CyberSec%20In%20General/Linux%20Firewalls.pdf",
    },
    {
      id: 5,
      title: "Social engineering",
      image: "/social.png",
      link: "https://github.com/DoS0x99/cyber-security-books/blob/main/CyberSec%20In%20General/Social%20Engineering%20-%20The%20Art%20of%20Human%20Hacking.pdf",
    },
  ];

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-10">
      <div>
        <h1 className="font-semibold text-2xl pb-2">Free Books</h1>
        <p className="text-gray-900 dark:text-gray-300">
          Start learning without limits. Explore our handpicked cybersecurity books — absolutely free, forever. No cost. No catch. Just pure knowledge to fuel your journey.
        </p>
      </div>

      <div className="mt-10">
        <Slider {...settings}>
          {book.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Freebook;
