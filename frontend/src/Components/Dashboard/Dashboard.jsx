import React from 'react';

const Dashboard = ({
  isBannerVisible,
  bannerDescription,
  bannerDuration,
  bannerLink,
  handleBannerToggle,
  handleBannerDescriptionChange,
  handleBannerDurationChange,
  handleBannerLinkChange,
}) => {
  return (
    <main className="flex-1 p-8">
      <h1 className="text-3xl font-bold mb-4">Welcome to our website</h1>
      <p className="text-gray-600 mb-8">This is a simple, clean one-page website with an optional banner.</p>
      <div className="bg-gray-100 p-6 rounded-lg shadow">
        <h2 className="text-xl font-bold mb-4">Dashboard</h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="banner-description" className="block font-medium mb-2">
              Banner Description
            </label>
            <input
              id="banner-description"
              value={bannerDescription}
              onChange={(e) => handleBannerDescriptionChange(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="banner-duration" className="block font-medium mb-2">
              Banner Duration (seconds)
            </label>
            <input
              id="banner-duration"
              type="number"
              value={bannerDuration ?? ''}
              onChange={(e) => handleBannerDurationChange(parseInt(e.target.value))}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div>
            <label htmlFor="banner-link" className="block font-medium mb-2">
              Banner Link
            </label>
            <input
              id="banner-link"
              value={bannerLink}
              onChange={(e) => handleBannerLinkChange(e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
          </div>
          <div className="flex items-center justify-end">
            <label className="flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isBannerVisible}
                onChange={handleBannerToggle}
                aria-label="Toggle banner visibility"
                className="sr-only"
              />
              <div className="relative">
                <div className="block bg-gray-600 w-14 h-8 rounded-full"></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition ${
                    isBannerVisible ? 'transform translate-x-full bg-green-400' : ''
                  }`}
                ></div>
              </div>
              <span className="ml-3 text-gray-700">
                {isBannerVisible ? 'Hide Banner' : 'Show Banner'}
              </span>
            </label>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Dashboard;
