import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Afficher le bouton quand l'utilisateur a scrollé 300px
    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    // Fonction pour remonter en haut de la page
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <button
            className={`scroll-to-top ${isVisible ? 'show' : ''}`}
            onClick={scrollToTop}
            aria-label="Retour en haut de la page"
        >
            ↑
        </button>
    );
};

export default ScrollToTop;