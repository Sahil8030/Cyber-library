import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function PremiumB() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    // Simulate API call with placeholder data
    const getBooks = async () => {
      try {
        const fakeData = [
          { id: 1, title: "Network Security Basics", author: "John Smith" },
          { id: 2, title: "Ethical Hacking 101", author: "Jane Doe" },
          { id: 3, title: "Cyber Threat Intelligence", author: "Michael Green" },
          { id: 4, title: "Penetration Testing Guide", author: "Alice Brown" },
          { id: 5, title: "Web Security Essentials", author: "David Lee" },
          { id: 6, title: "Malware Analysis Handbook", author: "Chris White" },
          { id: 7, title: "Digital Forensics Toolkit", author: "Sarah Johnson" },
          { id: 8, title: "Security+ Exam Prep", author: "Brian Black" },
        ];
        setBooks(fakeData);
      } catch (error) {
        console.log(error);
      }
    };
    getBooks();
  }, []);

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
      <div className="mt-28 text-center">
        <h1 className="text-2xl md:text-4xl font-semibold">
          Explore <span className="text-pink-500">Cyber Security Books</span>
        </h1>
        <p className="mt-12 text-gray-700">
          Dive into the world of cybersecurity with our carefully curated selection
          of books. From ethical hacking and network defense to malware analysis
          and digital forensics — enhance your knowledge and skills with expert content.
        </p>
        <Link to="/">
          <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
            Back
          </button>
        </Link>
      </div>

      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
        {books.map((book) => (
          <div
            key={book.id}
            className="border border-gray-200 p-6 rounded-md shadow-sm hover:shadow-md duration-300"
          >
            <h2 className="text-xl font-bold text-pink-600">{book.title}</h2>
            <p className="text-gray-600 mt-2">by {book.author}</p>
            <p className="text-sm text-gray-500 mt-4 italic">More content coming soon...</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PremiumB;
