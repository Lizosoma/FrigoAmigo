import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const getItemFromLocalStorage = (key, defaultValue) => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== 'undefined' && storedValue !== 'null' && storedValue !== null) {
      return JSON.parse(storedValue);
    }
    return defaultValue;
  };

  const [user, setUser] = useState(getItemFromLocalStorage('user', null));
  const [authenticated, setAuthenticated] = useState(
    getItemFromLocalStorage('authenticated', false),
  );

  const [fridgeName, setFridgeName] = useState(() => {
    const userFromStorage = getItemFromLocalStorage('user', null);
    if (userFromStorage && userFromStorage.fridges && userFromStorage.fridges.length > 0) {
      return userFromStorage.fridges[0].name;
    }
    return null;
  });

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user]);

  useEffect(() => {
    localStorage.setItem('authenticated', JSON.stringify(authenticated));
  }, [authenticated]);

  useEffect(() => {
    localStorage.setItem('fridgeName', JSON.stringify(fridgeName));
  }, [fridgeName]);

  const logOut = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('user');
    localStorage.removeItem('fridgeName');
    setUser(null);
    setAuthenticated(false);
    setFridgeName(null);
  };

  const allDataLoaded = () => {
    return user !== null && authenticated !== null && fridgeName !== null;
  };

  const checkIsMobile = () => window.innerWidth < 561;
  const [isMobile, setIsMobile] = useState(checkIsMobile);

  useEffect(() => {
    localStorage.setItem('isMobile', JSON.stringify(isMobile));
  }, [isMobile]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const contextValue = {
    user,
    setUser,
    authenticated,
    setAuthenticated,
    fridgeName,
    setFridgeName,
    logOut,
    allDataLoaded,
    isMobile,
  };

  return <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>;
};

export default UserProvider;
