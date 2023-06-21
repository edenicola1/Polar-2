import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Body from "../Components/Body.jsx"
import Header from '../Components/Header'
import Footer from "../Components/Footer.jsx"

function App() {
  const [headerBackground, setHeaderBackground] = useState('transparent');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 0) {
        setHeaderBackground('white');
      } else {
        setHeaderBackground('transparent');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Set the scroll behavior to smooth
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      // Reset the scroll behavior when the component unmounts
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Header background={headerBackground} />
      <Body />
      <Footer />
    </>
  )
}

export default App
