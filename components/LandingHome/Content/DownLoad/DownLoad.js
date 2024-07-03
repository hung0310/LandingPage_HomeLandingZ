import React from 'react';
import Image from 'next/image';
import styles from './DownLoad.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faApple,
    faAndroid
} from "@fortawesome/free-brands-svg-icons";

const DownLoad = () => {

    return (
        <section id="cbx-call-to-action">
            <div className="cbx-section">
                <div className="container">
                    <div className="row">
                        <div className="call-to-action text-center">
                            <h3>
                                Download{" "}
                                <a href="#">
                                Landing<span>​‌Ž</span>
                                </a>{" "}
                                Now
                            </h3>
                            <p>
                                Lorem ipsum dolor sit amet eu debet utinam vim Idque accusam ea sit
                                has justo adversarium.
                            </p>
                            <div className="call-to-action-btn">
                                <ul>
                                    <li className="apple">
                                        <a href="#" className=''>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div style={{ marginRight: '10px', padding: "12px" }}>
                                                    <FontAwesomeIcon icon={faApple} style={{ width: "26px", height: "26px" }}/>
                                                </div>
                                                <div className="cta-btn-content">
                                                    Download <span>From App Store</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className="play">
                                        <a href="#" className=''>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                                                <div style={{ marginRight: '10px', padding: "12px" }}>
                                                    <FontAwesomeIcon icon={faAndroid} style={{ width: "26px", height: "26px" }}/>
                                                </div>
                                                <div className="cta-btn-content">
                                                    Download <span>From Play Store</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownLoad;