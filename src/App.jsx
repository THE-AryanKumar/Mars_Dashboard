import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { Sidebar, Navbar } from './components';
import { CampaignDetails, CreateCampaign, Nft, Home, Profile, Community, Escrow } from './pages';

const App = () => {
  return (
    <div className="relative sm:-8 p-4 bg-[#13131a] min-h-screen flex flex-row">
      <div className="sm:flex hidden mr-10 relative">
        <Sidebar />
      </div>

      <div className="flex-1 content-center max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/create-campaign" element={<CreateCampaign />} />
          <Route path="/campaign-details/:id" element={<CampaignDetails />} />
          <Route path="/community" element={<Community />} />
          <Route path='/escrow' element={<Escrow />} />
          <Route path="/nft" element={<Nft />} />
        </Routes>
      </div>
      {/* <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
      <Script src="https://mediafiles.botpress.cloud/6c0b34ce-2bb0-46c8-b54c-b010c7f76dac/webchat/config.js" defer></Script> */}
    </div>
    
  )
}

export default App