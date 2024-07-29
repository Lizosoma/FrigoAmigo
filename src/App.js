import './App.css';
import './assets/styles/global.css';
import lines from './assets/pictures/main-lines.svg';

import MainNavs from './components/ui/main-navs/main-navs';
import Footer from './components/Footer/Footer';

import React, { useRef } from 'react';
import UserProvider from './services/user-context';
import MainContainer from './components/main/main-container';
import DownloadContainer from './components/download/download-container';
import RecepiesContainer from './components/recipes/recipes-container';
import PremiumContainer from './components/premium/premium-container';

function App() {
  const mainRef = useRef(null);
  const downloadAppRef = useRef(null);
  const recipesRef = useRef(null);
  const premiumRef = useRef(null);
  const footerRef = useRef(null);

  return (
    <UserProvider>
      <div className="container">
        <img src={lines} alt="lines" className="lines" />
        <MainNavs
          refs={{
            mainRef,
            downloadAppRef,
            recipesRef,
            premiumRef,
            footerRef,
          }}
        />
        <MainContainer ref={mainRef} />
        <DownloadContainer ref={downloadAppRef} />
        <RecepiesContainer ref={recipesRef} />
        <PremiumContainer ref={premiumRef} />
        <Footer ref={footerRef} />
      </div>
    </UserProvider>
  );
}

export default App;
