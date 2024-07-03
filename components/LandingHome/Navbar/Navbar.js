import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from "./Navbar.module.scss";

const Navbar = () => {

    const [isTransparent, setIsTransparent] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop === 0) {
                setIsTransparent(true);
            } else {
                setIsTransparent(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav 
            id="cbx-header" 
            className={`navbar navbar-default cbx-header ${isTransparent ? 'transparent-bg' : ''}`}
            style={{ 
                position: 'fixed', 
                width: '100%', 
                maxWidth: '100vw',
                zIndex: '1000', 
                paddingTop: "10px", 
                paddingBottom: "10px",
                overflowX: 'auto', 
                whiteSpace: 'nowrap',  
                borderRadius: "0px"
            }}
        >
            <div 
                className={`${styles.content_navbar} container design_container`}
            >
                <div className="navbar-header" style={{}}>
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1"
                        aria-expanded="false"
                    >
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <a className={`navbar-brand cbx-logo gotome ${isTransparent ? 'link_design' : ''}`} href="#" style={{ fontSize: "26px", color: "black" }}>
                        <span style={{ fontFamily: "Exo, sans-serif" }}>Landing​</span>
                        <span style={{ fontWeight: "bold" }}>‌Ž</span>
                    </a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className={`nav navbar-nav navbar-right design_ul_navbar ${isTransparent ? 'link_design' : ''}`} style={{ fontSize: "18px"}}>
                        <li>
                            <a href="#hometop" className={`gotome nav_link_design ${isTransparent ? 'link_design' : ''}`} style={{ color: "black" }}>
                                <span>Welcome</span>
                            </a>
                        </li>
                        <li>
                            <a href="#cbx-sfeature" className={`gotome nav_link_design ${isTransparent ? 'link_design' : ''}`} style={{ color: "black" }}>
                                <span>Features</span>
                            </a>
                        </li>
                        <li>
                            <a href="#cbx-screenshot" className={`gotome nav_link_design ${isTransparent ? 'link_design' : ''}`} style={{ color: "black" }}>
                                <span>Screenshots</span>
                            </a>
                        </li>
                        <li>
                            <a href="#cbx-pricing" className={`gotome nav_link_design ${isTransparent ? 'link_design' : ''}`} style={{ color: "black" }}>
                                <span>Pricing</span>
                            </a>
                        </li>
                        <li>
                            <a href="#cbx-latestnews" className={`gotome nav_link_design ${isTransparent ? 'link_design' : ''}`} style={{ color: "black" }}>
                                <span>Blog</span>
                            </a>
                        </li>
                        <li>
                            <a href="#cbx-contact" className={`gotome nav_link_design ${isTransparent ? 'link_design' : ''}`} style={{ color: "black" }}>
                                <span>Contact</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;