import React from 'react';
import Image from 'next/image';
import styles from './VideoFeature.module.scss';

const VideoFeature = () => {

    return (
        <section id="cbx-video">
            <div className="cbx-section">
                <div className="container">
                    <div className="row">
                        <div className="video-section text-center">
                            <a href="//www.youtube.com/watch?v=C0DPdy98e4c" data-lity="">
                                <img src="/static/assets/img/video/play-button.png" alt="video" />
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