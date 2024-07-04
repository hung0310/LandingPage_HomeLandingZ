import React from 'react';
import Image from 'next/image';
import styles from './VideoFeature.module.scss';

import video from "../../../../public/static/assets/img/video/play-button.png";

const VideoFeature = () => {

    return (
        <section id="cbx-video">
            <div className={`${styles.ex} cbx-section`}>
                <div className={`${styles.ex} container`}>
                    <div className={`${styles.ex} row`}>
                        <div className={`${styles.ex} video-section text-center`}>
                            <a href="//www.youtube.com/watch?v=C0DPdy98e4c" data-lity="">
                                <Image src={video} alt="video" />
                            </a>
                            <h3>AWESOME VIDEO FEATURES</h3>
                            <p>TAKE A LOOK</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>      
    );
};

export default VideoFeature;