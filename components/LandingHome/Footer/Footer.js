import React from 'react';
import Image from 'next/image';
import styles from './Footer.module.scss';

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
                                            <i className="fa fa-facebook" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="twitter" href="#">
                                            <i className="fa fa-twitter" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="linkedin" href="#">
                                            <i className="fa fa-linkedin" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="pinterest" href="#">
                                            <i className="fa fa-pinterest" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="google-plus" href="#">
                                            <i className="fa fa-google-plus" />
                                        </a>
                                    </li>
                                    <li>
                                        <a className="rss" href="#">
                                            <i className="fa fa-rss" />
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