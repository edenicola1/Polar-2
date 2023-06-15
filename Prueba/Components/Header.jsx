import React, { useState, useEffect } from 'react';
import '../Styles/Header.css';
import Logo from '../Logotype 2-02.png';

const Header = ({ background }) => {
    const [scrollBackground, setScrollBackground] = useState(false);
    const [scrollLeft, setScrollLeft] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.pageYOffset;

            if (scrollTop > 0) {
                setScrollBackground(true);
                setScrollLeft(true);
            } else {
                setScrollBackground(false);
                setScrollLeft(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToSection = (event, targetId) => {
        event.preventDefault();
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleLogoClick = () => {
        window.location.href = window.location.origin + window.location.pathname;
    };


    return (
        <header style={{ backgroundColor: background }}>
            <img
                src={Logo}
                id="HeaderLogo"
                alt="Logo"
                onClick={handleLogoClick}
                style={{ cursor: 'pointer' }}
            />
            <nav>
                <ul
                    className={`nav-links ${scrollBackground ? 'black' : ''} ${scrollLeft ? 'scroll-left' : ''
                        }`}
                >
                    <li>
                        <a href="/" onClick={(event) => scrollToSection(event, 'Benefits')}>
                            BENEFICIOS
                        </a>
                    </li>
                    <li>
                        <a href="/" onClick={(event) => scrollToSection(event, 'Products')}>
                            PODS
                        </a>
                    </li>
                    <li>
                        <a href="/" onClick={(event) => scrollToSection(event, 'about-us')}>
                            SOBRE NOSOTROS
                        </a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
