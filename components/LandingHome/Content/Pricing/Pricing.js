import React from 'react';
import Image from 'next/image';
import styles from './Pricing.module.scss';

const Pricing = () => {

    return (
        <section>
            <div id="cbx-pricing" className="cbx-section cbx-pricing">
                <div className="cbx-inner">
                    <div className="container">
                        <div className="text-center cbx-content">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="cbx-heading">
                                        <h2 className="uppercase">pricing</h2>
                                        <p className="">
                                        Donec et viverra ipsum. Quisque vulputate ac ante ut laoreet.
                                        Feugiat eleifend, arcu orci fermentum molestie varius dolor.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12 col-xs-12 xs-text-center">
                                                <div className="cbx-singlepricing">
                                                    <div className="cbx-featured-header">
                                                        <h4 className="uppercase">Personal</h4>
                                                        <div className="cbx-doller">
                                                            <p>
                                                                $199 <span>Per Months</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled cbx-featured-list">
                                                        <li>
                                                            <div className="cbx-featured-list-row">
                                                                <h5>01 User Pack</h5>
                                                                <p>
                                                                Curabitur ac lacus arcu. Sed vehicula lectus
                                                                auctor viverra. Vehicula.
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cbx-featured-list-row">
                                                                <h5>1GB Storage</h5>
                                                                <p>
                                                                Curabitur ac lacus arcu. Sed vehicula lectus
                                                                auctor viverra. Vehicula.
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cbx-featured-list-row">
                                                                <h5>Limited Bandwidth</h5>
                                                                <p>
                                                                Curabitur ac lacus arcu. Sed vehicula lectus
                                                                auctor viverra. Vehicula.
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <p className="price-button">
                                                        <a href="#">Get This Now</a>
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-xs-12 xs-text-center">
                                                <div className="cbx-singlepricing">
                                                    <div className="cbx-featured-header">
                                                        <h4 className="uppercase">Business</h4>
                                                        <div className="cbx-doller">
                                                            <p>
                                                                $599 <span>Per Months</span>
                                                            </p>
                                                        </div>
                                                        <div className="cbx-recommended">
                                                            <div className="ribbon">
                                                                <span>hot</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                <ul className="list-unstyled cbx-featured-list">
                                                    <li>
                                                        <div className="cbx-featured-list-row">
                                                            <h5>05 User Pack</h5>
                                                            <p>
                                                            Curabitur ac lacus arcu. Sed vehicula lectus
                                                            auctor viverra. Vehicula.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cbx-featured-list-row">
                                                            <h5>5GB Storage</h5>
                                                            <p>
                                                            Curabitur ac lacus arcu. Sed vehicula lectus
                                                            auctor viverra. Vehicula.
                                                            </p>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="cbx-featured-list-row">
                                                            <h5>Unlimited Bandwidth</h5>
                                                            <p>
                                                            Curabitur ac lacus arcu. Sed vehicula lectus
                                                            auctor viverra. Vehicula.
                                                            </p>
                                                        </div>
                                                    </li>
                                                </ul>
                                                <p className="price-button">
                                                    <a href="#">Get This Now</a>
                                                </p>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-xs-12 xs-text-center">
                                                <div className="cbx-singlepricing">
                                                    <div className="cbx-featured-header">
                                                        <h4 className="uppercase">Enterprise</h4>
                                                        <div className="cbx-doller">
                                                            <p>
                                                                $999 <span>Per Months</span>
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <ul className="list-unstyled cbx-featured-list">
                                                        <li>
                                                            <div className="cbx-featured-list-row">
                                                                <h5>10 User Pack</h5>
                                                                <p>
                                                                Curabitur ac lacus arcu. Sed vehicula lectus
                                                                auctor viverra. Vehicula.
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cbx-featured-list-row">
                                                                <h5>10GB Storage</h5>
                                                                <p>
                                                                Curabitur ac lacus arcu. Sed vehicula lectus
                                                                auctor viverra. Vehicula.
                                                                </p>
                                                            </div>
                                                        </li>
                                                        <li>
                                                            <div className="cbx-featured-list-row">
                                                                <h5>Unlimited Bandwidth</h5>
                                                                <p>
                                                                Curabitur ac lacus arcu. Sed vehicula lectus
                                                                auctor viverra. Vehicula.
                                                                </p>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                    <p className="price-button">
                                                        <a href="#">Get This Now</a>
                                                    </p>
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

export default Pricing;