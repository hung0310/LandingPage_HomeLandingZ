import React from 'react';
import styles from './ParallaxBanner.module.scss';

const ParallaxBanner = () => {

    return (
        <section id="cbx-parallax-banner">
            <div className="cbx-section">
                <div id="layer-wrapper" className="cbx-item-parallax-banner">
                    <div id="object1" className="bglayer1 hidden-sm hidden-xs"></div>
                    <div id="object3" className="bottomlayer1"></div>
                    <div id="object4" className="bottomlayer2"></div>
                    <div id="object5" className="rightlayer1 hidden-sm hidden-xs"></div>
                    <div id="object2" className="bglayer2 hidden-sm hidden-xs"></div>
                    <div id="object6" className="rightlayer2shade hidden-sm hidden-xs"></div>
                    <div id="object7" className="rightlayer2 hidden-sm hidden-xs"></div>
                    <div id="object8" className="rightlayer3shade hidden-sm hidden-xs"></div>
                    <div id="object9" className="rightlayer3 hidden-sm hidden-xs"></div>
                    <div id="object10" className="leftlayer1">
                        <div className="banner-content">
                            <h2>
                                EXAMPLE <br />
                                APP
                            </h2>
                            <p>An app for social good</p>
                            <span className="hidden-sm hidden-xs" />
                            <a className="paramore gotome" href="#cbx-sfeature">
                                More
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ParallaxBanner;