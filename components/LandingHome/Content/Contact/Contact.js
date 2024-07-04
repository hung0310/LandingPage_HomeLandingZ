import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import styles from './Contact.module.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faLocationDot,
    faHeadphonesSimple,
    faEnvelope
} from "@fortawesome/free-solid-svg-icons";

const MapComponent = dynamic(() => import('./MapComponent'), { ssr: false });

const Contact = () => {
    useEffect(() => {
        const initializeMap = () => {
            const mapOptions = {
                center: { lat: 44.5403, lng: -78.5463 },
                zoom: 10,
            };

            const map = new google.maps.Map(document.getElementById('map_design'), mapOptions);
        };

        initializeMap();
    }, []);

    return (
        <section>
            <div id="cbx-contact" className={`cbx-section cbx-contact ${styles.ex}`}>
                <div id="cbx-contactinner" className={`cbx-contactinner ${styles.ex}`}>
                    <div className={`cbx-inner ${styles.ex}`}>
                        <div className={`container ${styles.ex}`}>
                            <div className={`text-center cbx-heading ${styles.ex}`}>
                                <h2 className={`uppercase ${styles.ex}`}>Get In Touch</h2>
                                <p className={`${styles.ex}`}>
                                    Donec et viverra ipsum. Quisque vulputate ac ante ut laoreet.
                                    Feugiat eleifend, arcu orci fermentum molestie varius dolor.
                                </p>
                            </div>
                            <div className={`cbx-content ${styles.ex}`}>
                                <div className="row">
                                    <div className={`col-md-4 col-sm-4 col-xs-12 ${styles.ex}`}>
                                        <div className={`cbx-box ${styles.ex}`}>
                                            <span className={`cbx-icon ${styles.ex}`}>
                                                <FontAwesomeIcon icon={faLocationDot} style={{ width: "30px", height: "30px" }} />
                                            </span>
                                            <address className={styles.ex}>
                                                <strong>Twitter, Inc.</strong>
                                                <br />
                                                795 Folsom Ave, Suite 600
                                                <br />
                                                San Francisco, CA 94107.
                                            </address>
                                        </div>
                                    </div>
                                    <div className={`col-md-4 col-sm-4 col-xs-12 ${styles.ex}`}>
                                        <div className={`cbx-box ${styles.ex}`}>
                                            <span className={`cbx-icon ${styles.ex}`}>
                                                <FontAwesomeIcon icon={faHeadphonesSimple} style={{ width: "30px", height: "30px" }} />
                                            </span>
                                            <address className={styles.ex}>
                                                <p>
                                                    <span className={`cbx-type ${styles.ex}`}>Phone:</span>+2545-8546-XXX,
                                                    <br />
                                                    +2545-8546-XXX
                                                </p>
                                            </address>
                                        </div>
                                    </div>
                                    <div className={`col-md-4 col-sm-4 col-xs-12 ${styles.ex}`}>
                                        <div className={`cbx-box ${styles.ex}`}>
                                            <span className={`cbx-icon ${styles.ex}`}>
                                                <FontAwesomeIcon icon={faEnvelope} style={{ width: "30px", height: "30px" }} />
                                            </span>
                                            <address className={styles.ex}>
                                                <p>
                                                    <span className={`cbx-type ${styles.ex}`}>Email:</span>
                                                    jhon.doe@example.com,
                                                    <br /> jhon.doe@example2.com
                                                </p>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className={`col-md-6 ${styles.ex}`}>
                                        <div id="cbx-gmap" className={`${styles.ex}`}>
                                            <div
                                                id="map_design"
                                                className={`cbx-map map_design ${styles.ex}`}
                                                style={{ height: '300px' }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className={`col-md-6 cbx-form ${styles.ex}`}>
                                        <form method="POST" className={`cbx-contactform ${styles.ex}`}>
                                            <div className={`form-group ${styles.ex}`}>
                                                <input
                                                    type="text"
                                                    name="cbxname"
                                                    className={`form-control cbxname ${styles.ex}`}
                                                    id="cbxname"
                                                    placeholder="Enter Your Name"
                                                    required=""
                                                />
                                                <label
                                                    id="cbxname-error"
                                                    className={`error valid ${styles.ex}`}
                                                    htmlFor="cbxname"
                                                />
                                            </div>
                                            <div className={`form-group ${styles.ex}`}>
                                                <input
                                                    type="email"
                                                    name="cbxemail"
                                                    className={`form-control cbxemail ${styles.ex}`}
                                                    id="cbxemail"
                                                    placeholder="Enter email"
                                                    required=""
                                                />
                                                <label
                                                    id="cbxemail-error"
                                                    className={`error valid ${styles.ex}`}
                                                    htmlFor="cbxemail"
                                                />
                                            </div>
                                            <div className={`form-group ${styles.ex}`}>
                                                <textarea
                                                    className={`form-control cbxmessage ${styles.ex}`}
                                                    name="cbxmessage"
                                                    id="cbxmessage"
                                                    rows={6}
                                                    placeholder="Enter Text"
                                                    required=""
                                                    defaultValue={""}
                                                />
                                                <label
                                                    id="cbxmessage-error"
                                                    className={`error valid ${styles.ex}`}
                                                    htmlFor="cbxmessage"
                                                />
                                            </div>
                                            <button type="submit" name="submit" className={`btn btn-block ${styles.ex}`}>
                                                Send
                                            </button>
                                        </form>
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

export default Contact;