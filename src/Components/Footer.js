// src/components/Footer.jsx
import React from "react";

const Footer = () => {
  return (
    <footer className='bg-gray-100 text-center py-4 shadow-inner mt-10'>
      <p className='text-sm text-gray-600'>
        © {new Date().getFullYear()} TeamTweak . All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
