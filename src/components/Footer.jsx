import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-slate-800 py-6 mt-10">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-300">
        <p className="mb-2">© 2025 The Cyber Book Vault. All rights reserved.</p>
        <div className="space-x-4">
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
