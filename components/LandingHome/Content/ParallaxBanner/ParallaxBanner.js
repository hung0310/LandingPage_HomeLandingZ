import React from 'react';
import classNames from 'classnames';
import styles from './ParallaxBanner.module.scss';

const parallaxLayers = [
    { id: "object1", className: "bglayer1 hidden-sm hidden-xs" },
    { id: "object3", className: "bottomlayer1" },
    { id: "object4", className: "bottomlayer2" },
    { id: "object5", className: "rightlayer1 hidden-sm hidden-xs" },
    { id: "object2", className: "bglayer2 hidden-sm hidden-xs" },
    { id: "object6", className: "rightlayer2shade hidden-sm hidden-xs" },
    { id: "object7", className: "rightlayer2 hidden-sm hidden-xs" },
    { id: "object8", className: "rightlayer3shade hidden-sm hidden-xs" },
    { id: "object9", className: "rightlayer3 hidden-sm hidden-xs" },
];

const ParallaxBanner = () => {
    return (
        <section id="cbx-parallax-banner" className={styles.parallaxBanner}>
            <div className={classNames("cbx-section", styles.cbxSection)}>
                <div id="layer-wrapper" className={classNames("cbx-item-parallax-banner", styles.layerWrapper)}>
                    {parallaxLayers.map(layer => (
                        <div key={layer.id} id={layer.id} className={classNames(layer.className, styles[layer.className])}></div>
                    ))}
                    <div id="object10" className={classNames("leftlayer1", styles.leftlayer1)}>
                        <div className={classNames("banner-content", styles.bannerContent)}>
                            <h2>
                                EXAMPLE <br />
                                APP
                            </h2>
                            <p>An app for social good</p>
                            <span className="hidden-sm hidden-xs" />
                            <a className={classNames("paramore gotome", styles.paramore)} href="#cbx-sfeature">
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