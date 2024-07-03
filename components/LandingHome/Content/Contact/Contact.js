import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
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
            <div id="cbx-contact" className="cbx-section cbx-contact">
                <div id="cbx-contactinner" className="cbx-contactinner">
                    <div className="cbx-inner">
                        <div className="container">
                            <div className="text-center cbx-heading">
                                <h2 className="uppercase">Get In Touch</h2>
                                <p className="">
                                    Donec et viverra ipsum. Quisque vulputate ac ante ut laoreet.
                                    Feugiat eleifend, arcu orci fermentum molestie varius dolor.
                                </p>
                            </div>
                            <div className="cbx-content">
                                <div className="row">
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="cbx-box">
                                            <span className="cbx-icon">
                                                <FontAwesomeIcon icon={faLocationDot} style={{ width: "30px", height: "30px" }} />
                                            </span>
                                            <address>
                                                <strong>Twitter, Inc.</strong>
                                                <br />
                                                795 Folsom Ave, Suite 600
                                                <br />
                                                San Francisco, CA 94107.
                                            </address>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="cbx-box">
                                            <span className="cbx-icon">
                                                <FontAwesomeIcon icon={faHeadphonesSimple} style={{ width: "30px", height: "30px" }} />
                                            </span>
                                            <address>
                                                <p>
                                                    <span className="cbx-type">Phone:</span>+2545-8546-XXX,
                                                    <br />
                                                    +2545-8546-XXX
                                                </p>
                                            </address>
                                        </div>
                                    </div>
                                    <div className="col-md-4 col-sm-4 col-xs-12">
                                        <div className="cbx-box">
                                            <span className="cbx-icon">
                                                <FontAwesomeIcon icon={faEnvelope} style={{ width: "30px", height: "30px" }} />
                                            </span>
                                            <address>
                                                <p>
                                                    <span className="cbx-type">Email:</span>
                                                    jhon.doe@example.com,
                                                    <br /> jhon.doe@example2.com
                                                </p>
                                            </address>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="row">
                                    <div className="col-md-6">
                                        <div id="cbx-gmap" className="">
                                            <div
                                                id="map_design"
                                                className="cbx-map map_design"
                                                style={{ height: '300px' }}
                                            ></div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 cbx-form">
                                        <form method="POST" className="cbx-contactform">
                                            <div className="form-group">
                                                <input
                                                    type="text"
                                                    name="cbxname"
                                                    className="form-control cbxname"
                                                    id="cbxname"
                                                    placeholder="Enter Your Name"
                                                    required=""
                                                />
                                                <label
                                                    id="cbxname-error"
                                                    className="error valid"
                                                    htmlFor="cbxname"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <input
                                                    type="email"
                                                    name="cbxemail"
                                                    className="form-control cbxemail"
                                                    id="cbxemail"
                                                    placeholder="Enter email"
                                                    required=""
                                                />
                                                <label
                                                    id="cbxemail-error"
                                                    className="error valid"
                                                    htmlFor="cbxemail"
                                                />
                                            </div>
                                            <div className="form-group">
                                                <textarea
                                                    className="form-control cbxmessage"
                                                    name="cbxmessage"
                                                    id="cbxmessage"
                                                    rows={6}
                                                    placeholder="Enter Text"
                                                    required=""
                                                    defaultValue={""}
                                                />
                                                <label
                                                    id="cbxmessage-error"
                                                    className="error valid"
                                                    htmlFor="cbxmessage"
                                                />
                                            </div>
                                            <button type="submit" name="submit" className="btn btn-block">
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