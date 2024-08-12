import React from 'react';
import { Link } from 'react-router-dom';

export default function Banner({
  isBannerVisible,
  bannerDescription,
  timeRemaining,
  bannerLink,
  handleBannerToggle,
}) {
  return (
    <div className="flex flex-col min-h-screen "  style={{backgroundImage: 'url(https://res.cloudinary.com/duy3fnmvo/image/upload/v1723456490/tuf_obvghs.png)'}}>
      
      {isBannerVisible && timeRemaining !== null && (
        <div className="bg-blue-500 text-white py-4 px-6 flex justify-between items-center">
          <div>
            <p>{bannerDescription}</p>
            <Link to={bannerLink} className="text-white underline">
              Learn more
            </Link>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-bold text-2xl">
              {Math.floor(timeRemaining / 60)}:{String(timeRemaining % 60).padStart(2, '0')}
            </span>
            <button
              onClick={handleBannerToggle}
              className="bg-transparent text-white p-2 rounded-full hover:bg-white hover:text-blue-500"
            >
              <XIcon className="h-5 w-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
