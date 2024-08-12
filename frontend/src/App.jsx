// // import './App.css';
// import { useEffect, useState } from "react";
// import { Route, Routes } from "react-router-dom";
// import Banner from './Components/Banner/Banner';
// import Dashboard from './Components/Dashboard/Dashboard';
// import axios from 'axios';

// function App() {
//   const [data, setData] = useState();
//   const fetchData = async () => {
//     try {
//       const response = await axios.get(`http://localhost:5000/api/v1/${1}`);
//       setData(response?.data?.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(()=>{
//   fetchData();
//   },[]);

//   return (
//     <>
//       <Routes>
//         <Route path="/" element={<Banner data={data} fetchData={fetchData} setData={setData} />} />
//         <Route path="/dashboard" element={<Dashboard />} />
//       </Routes>

//     </>
//   )
// }

// export default App

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Banner from './Components/Banner/BannerNew';
import Dashboard from './Components/Dashboard/Dashboard';
import tuf from './assets/tuf.png' 

function App() {
  const [isBannerVisible, setIsBannerVisible] = useState(true);
  const [bannerDescription, setBannerDescription] = useState('');
  const [bannerDuration, setBannerDuration] = useState(null);
  const [timeRemaining, setTimeRemaining] = useState(null);
  const [bannerLink, setBannerLink] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:5000/api/v1/${1}`)
      .then(response => {
        const { description, timer, link, is_visible } = response.data.data;
        setBannerDescription(description);
        setBannerDuration(timer);
        setTimeRemaining(timer);
        setBannerLink(link);
        setIsBannerVisible(is_visible);
      });
  }, []);

  useEffect(() => {
    let interval;
    if (isBannerVisible && timeRemaining !== null) {
      interval = setInterval(() => {
        setTimeRemaining((prevTime) => prevTime - 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isBannerVisible, timeRemaining]);

  useEffect(() => {
    if (timeRemaining === 0) {
      setIsBannerVisible(false);
      updateBannerVisibility(false);
    }
  }, [timeRemaining]);

  const updateBannerVisibility = (isVisible) => {
    axios.put(`http://localhost:5000/api/v1/${1}`, { is_visible: isVisible })
      .catch(error => {
        console.error('There was an error updating the banner visibility!', error);
      });
  };

  const handleBannerToggle = () => {
    const newVisibility = !isBannerVisible;
    setIsBannerVisible(newVisibility);
    setTimeRemaining(newVisibility ? bannerDuration : null);
    updateBannerVisibility(newVisibility);
  };

  const handleBannerDescriptionChange = (newDescription) => {
    setBannerDescription(newDescription);
    updateBanner('description', newDescription);
  };

  const handleBannerDurationChange = (newDuration) => {
    setBannerDuration(newDuration);
    setTimeRemaining(newDuration);
    updateBanner('timer', newDuration);
  };

  const handleBannerLinkChange = (newLink) => {
    setBannerLink(newLink);
    updateBanner('link', newLink);
  };

  const updateBanner = (field, value) => {
    axios.put(`http://localhost:5000/api/v1/${1}`, { [field]: value })
      .then(response => {
        console.log('Banner updated successfully:', response.data);
      })
      .catch(error => {
        console.error('There was an error updating the banner:', error);
      });
  };

  return (
      <div className=''>
      <Routes>
        <Route
          path="/"
          element={
            <Banner
              isBannerVisible={isBannerVisible}
              bannerDescription={bannerDescription}
              timeRemaining={timeRemaining}
              bannerLink={bannerLink}
              handleBannerToggle={handleBannerToggle}
            />
          }
        />
        <Route
          path="/dashboard"
          element={
            <Dashboard
              isBannerVisible={isBannerVisible}
              bannerDescription={bannerDescription}
              bannerDuration={bannerDuration}
              bannerLink={bannerLink}
              handleBannerToggle={handleBannerToggle}
              handleBannerDescriptionChange={handleBannerDescriptionChange}
              handleBannerDurationChange={handleBannerDurationChange}
              handleBannerLinkChange={handleBannerLinkChange}
            />
          }
        />
      </Routes>
      </div>
  );
}

export default App;
