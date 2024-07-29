import React, { useState, useEffect } from 'react';
import styles from './main-navs.module.css';

const MainNavs = ({ refs }) => {
  const [activeTab, setActiveTab] = useState(1);
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (scrolling) return;

      const blockRefs = [
        refs.mainRef,
        refs.downloadAppRef,
        refs.recipesRef,
        refs.premiumRef,
        refs.footerRef,
      ];

      let activeTabId = -1;

      blockRefs.forEach((ref, index) => {
        if (ref.current) {
          const rect = ref.current.getBoundingClientRect();

          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            activeTabId = index + 1;
          }
        }
      });

      if (activeTabId !== -1 && activeTab !== activeTabId) {
        setActiveTab(activeTabId);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolling, activeTab, refs]);

  const handleTabClick = (tabId) => {
    if (scrolling) return;

    setScrolling(true);

    setActiveTab(tabId);

    switch (tabId) {
      case 1:
        refs.mainRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 2:
        refs.downloadAppRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 3:
        refs.recipesRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 4:
        refs.premiumRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      case 5:
        refs.footerRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        break;
      default:
        break;
    }

    setTimeout(() => {
      setScrolling(false);
    }, 500);
  };

  return (
    <div className={styles.navs}>
      <button
        className={
          styles.navsItem + ' ' + styles.profile + ' ' + (activeTab === 1 ? styles.active : '')
        }
        onClick={() => handleTabClick(1)}
      >
        <p className={styles.navsLink}>Профиль</p>
      </button>
      <button
        className={
          styles.navsItem + ' ' + styles.download + ' ' + (activeTab === 2 ? styles.active : '')
        }
        onClick={() => handleTabClick(2)}
      >
        <p className={styles.navsLink}>Скачать</p>
      </button>
      <button
        className={
          styles.navsItem + ' ' + styles.recipes + ' ' + (activeTab === 3 ? styles.active : '')
        }
        onClick={() => handleTabClick(3)}
      >
        <p className={styles.navsLink}>Рецепты</p>
      </button>
      <button
        className={
          styles.navsItem + ' ' + styles.premium + ' ' + (activeTab === 4 ? styles.active : '')
        }
        onClick={() => handleTabClick(4)}
      >
        <p className={styles.navsLink}>Премиум</p>
      </button>
      <button
        className={
          styles.navsItem + ' ' + styles.contacts + ' ' + (activeTab === 5 ? styles.active : '')
        }
        onClick={() => handleTabClick(5)}
      >
        <p className={styles.navsLink}>Контакты</p>
      </button>
    </div>
  );
};

export default MainNavs;
