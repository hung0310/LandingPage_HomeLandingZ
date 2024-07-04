import React from 'react';
import Image from 'next/image';
import styles from './Feature.module.scss';

import bubble from "../../../../public/static/assets/img/feature/001-speech-bubble.png";
import youtube from "../../../../public/static/assets/img/feature/002-youtube.png";
import locked from "../../../../public/static/assets/img/feature/003-locked.png";
import cloud from "../../../../public/static/assets/img/feature/004-cloud.png";

const features = [
    {
        id: 1,
        title: "Special Messages",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor",
        imgSrc: bubble,
        imgAlt: "Speech Bubble",
        link: "#cbx-screenshot",
    },
    {
        id: 2,
        title: "Video Streaming",
        description: "Incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet",
        imgSrc: youtube,
        imgAlt: "Video Streaming",
        link: "#cbx-screenshot",
    },
    {
        id: 3,
        title: "Super Secured",
        description: "Sed pharetra ipsum sit amet semper euismod. Phasellus vitae nunc at diam rhoncus.",
        imgSrc: locked,
        imgAlt: "Super Secured",
        link: "#cbx-screenshot",
    },
    {
        id: 4,
        title: "Free Cloud",
        description: "Sed pharetra ipsum sit amet semper euismod. Phasellus vitae nunc at diam rhoncus.",
        imgSrc: cloud,
        imgAlt: "Free Cloud",
        link: "#cbx-screenshot",
    },
];

const Feature = () => {
    return (
        <section className={styles.featureSection}>
            <div id="cbx-sfeature" className={`cbx-section cbx-sfeature ${styles.cbxSfeature}`}>
                <div className={`cbx-inner ${styles.cbxInner}`}>
                    <div className={`container ${styles.container}`}>
                        <div className={`text-center cbx-content ${styles.cbxContent}`}>
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className={`cbx-heading ${styles.cbxHeading}`}>
                                        <h2 className={`uppercase ${styles.uppercase}`}>Feature</h2>
                                        <p>
                                            Onec et viverra ipsum. Quisque vulputate ac ante ut laoreet.
                                            Feugiat eleifend, arcu orci fermentum molestie varius dolor.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="row">
                                            {features.map((feature) => (
                                                <div key={feature.id} className={`col-md-3 col-sm-6 col-xs-12 xs-text-center ${styles.featureColumn}`}>
                                                    <div className={`cbx-single-feature ${styles.cbxSingleFeature}`}>
                                                        <div className={`cbx-sficon ${styles.cbxSficon}`}>
                                                            <Image src={feature.imgSrc} alt={feature.imgAlt} />
                                                        </div>
                                                        <h4>
                                                            <a href={feature.link}>{feature.title}</a>
                                                        </h4>
                                                        <p>{feature.description}</p>
                                                        <a
                                                            className={`cbx-learnmore gotome ${styles.cbxLearnmore}`}
                                                            href={feature.link}
                                                        >
                                                            Learn More
                                                        </a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Feature;