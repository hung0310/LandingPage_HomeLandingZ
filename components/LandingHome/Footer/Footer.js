import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faFacebookF,
    faTwitter,
    faLinkedinIn,
    faPinterest,
    faGooglePlusG,
} from "@fortawesome/free-brands-svg-icons";

import {
    faWifi
} from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer>
            <div id="cbx-footer">
                <div className="container">
                    <div className="cbx-content">
                        <div className="row">
                            <div className="col-md-6 col-sm-12">
                                <p className="copyrightinformation">
                                    Copyright 2017 © <a href="https://codeboxr.com/">Codeboxr</a>. All
                                    Rights Reserved.
                                </p>
                            </div>
                            
                            <div className="col-md-6 col-sm-12">
                                <ul className="social">
                                    <li>
                                        <a className="facebok" href="#">
                                            <FontAwesomeIcon icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <FontAwesomeIcon icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="#">
                                            <FontAwesomeIcon icon={faLinkedinIn} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="pinterest" href="#">
                                            <FontAwesomeIcon icon={faPinterest} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google-plus" href="#">
                                            <FontAwesomeIcon icon={faGooglePlusG} />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="rss" href="#">
                                            <FontAwesomeIcon icon={faWifi} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
      </footer>        
    );
};

export default Footer;