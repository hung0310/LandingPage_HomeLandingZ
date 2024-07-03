import React from 'react';
import Image from 'next/image';
import styles from './Feature.module.scss';

const Feature = () => {

    return (
        <section>
            <div id="cbx-sfeature" className="cbx-section cbx-sfeature">
                <div className="cbx-inner">
                    <div className="container">
                        <div className="text-center cbx-content">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="cbx-heading">
                                        <h2 className="uppercase">Feature</h2>
                                        <p className="">
                                        Onec et viverra ipsum. Quisque vulputate ac ante ut laoreet.
                                        Feugiat eleifend, arcu orci fermentum molestie varius dolor.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-3 col-sm-6 col-xs-12 xs-text-center">
                                                <div className="cbx-single-feature">
                                                <div className="cbx-sficon">
                                                    <img
                                                        src="/static/assets/img/feature/001-speech-bubble.png"
                                                        alt="bubble"
                                                    />
                                                </div>
                                                <h4 className="">
                                                    <a href="#">Special Messages</a>
                                                </h4>
                                                <p className="">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing
                                                    elit.Sed do eiusmod tempor
                                                </p>
                                                <a
                                                    className="cbx-learnmore gotome"
                                                    href="#cbx-screenshot"
                                                >
                                                    Learn More
                                                </a>
                                                </div>
                                            </div>
                                        
                                            <div className="col-md-3 col-sm-6 col-xs-12 xs-text-center">
                                                <div className="cbx-single-feature">
                                                <div className="cbx-sficon">
                                                    <img
                                                        src="/static/assets/img/feature/002-youtube.png"
                                                        alt="bubble"
                                                    />
                                                </div>
                                                <h4 className="">
                                                    <a href="#">Video Streaming</a>
                                                </h4>
                                                <p className="">
                                                    {" "}
                                                    incididunt ut labore et dolore magna aliqua.Lorem ipsum
                                                    dolor sit amet
                                                </p>
                                                <a
                                                    className="cbx-learnmore gotome"
                                                    href="#cbx-screenshot"
                                                >
                                                    Learn More
                                                </a>
                                                </div>
                                            </div>
                                        
                                            <div className="col-md-3 col-sm-6 col-xs-12 xs-text-center">
                                                <div className="cbx-single-feature">
                                                <div className="cbx-sficon">
                                                    <img
                                                        src="/static/assets/img/feature/003-locked.png"
                                                        alt="bubble"
                                                    />
                                                </div>
                                                <h4 className="">
                                                    <a href="#">Super Secured</a>
                                                </h4>
                                                <p className="">
                                                    Sed pharetra ipsum sit amet semper euismod. Phasellus
                                                    vitae nunc at diam rhoncus.
                                                </p>
                                                <a
                                                    className="cbx-learnmore gotome"
                                                    href="#cbx-screenshot"
                                                >
                                                    Learn More
                                                </a>
                                                </div>
                                            </div>
                                        
                                            <div className="col-md-3 col-sm-6 col-xs-12 xs-text-center">
                                                <div className="cbx-single-feature">
                                                <div className="cbx-sficon">
                                                    <img
                                                        src="/static/assets/img/feature/004-cloud.png"
                                                        alt="bubble"
                                                    />
                                                </div>
                                                <h4 className="">
                                                    <a href="#">Free Cloud</a>
                                                </h4>
                                                <p className="">
                                                    Sed pharetra ipsum sit amet semper euismod. Phasellus
                                                    vitae nunc at diam rhoncus.
                                                </p>
                                                <a
                                                    className="cbx-learnmore gotome"
                                                    href="#cbx-screenshot"
                                                >
                                                    Learn More
                                                </a>
                                                </div>
                                            </div>
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