import React from 'react';
import "./globals.css";
import "tailwindcss/tailwind.css";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto shadow p-8 rounded">
        <h1 className="text-4xl font-black mb-4">404 - Page Not Found</h1>
        <p className="text-gray-400">
          Sorry, the page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
