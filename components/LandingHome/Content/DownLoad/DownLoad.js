import React from 'react';
import Image from 'next/image';
import styles from './DownLoad.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faApple, faAndroid } from "@fortawesome/free-brands-svg-icons";

const DownLoad = () => {
    return (
        <section id="cbx-call-to-action" className={styles.ex}>
            <div className={`cbx-section ${styles.ex}`}>
                <div className={`container ${styles.ex}`}>
                    <div className={`row ${styles.ex}`}>
                        <div className={`call-to-action text-center ${styles.ex}`}>
                            <h3 className={styles.ex}>
                                Download{" "}
                                <a href="#" className={styles.ex}>
                                    Landing<span>​‌Ž</span>
                                </a>{" "}
                                Now
                            </h3>
                            <p className={styles.ex}>
                                Lorem ipsum dolor sit amet eu debet utinam vim Idque accusam ea sit
                                has justo adversarium.
                            </p>
                            <div className={`call-to-action-btn ${styles.ex}`}>
                                <ul className={styles.ex}>
                                    <li className={`apple ${styles.ex}`}>
                                        <a href="#" className={`${styles.ex}`}>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className={styles.ex}>
                                                <div style={{ marginRight: '10px', padding: "12px" }} className={styles.ex}>
                                                    <FontAwesomeIcon icon={faApple} style={{ width: "26px", height: "26px" }} className={styles.ex} />
                                                </div>
                                                <div className={`cta-btn-content ${styles.ex}`}>
                                                    Download <span className={styles.ex}>From App Store</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li className={`play ${styles.ex}`}>
                                        <a href="#" className={`${styles.ex}`}>
                                            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} className={styles.ex}>
                                                <div style={{ marginRight: '10px', padding: "12px" }} className={styles.ex}>
                                                    <FontAwesomeIcon icon={faAndroid} style={{ width: "26px", height: "26px" }} className={styles.ex} />
                                                </div>
                                                <div className={`cta-btn-content ${styles.ex}`}>
                                                    Download <span className={styles.ex}>From Play Store</span>
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