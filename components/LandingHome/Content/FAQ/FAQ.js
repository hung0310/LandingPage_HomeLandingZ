import React from 'react';
import Image from 'next/image';
import styles from './FAQ.module.scss';

import fag from "../../../../public/static/assets/img/faq/faq.png";

const FAQ = () => {
    return (
        <section className={styles.ex}>
            <div id="cbx-faq" className={`cbx-section cbx-faq ${styles.ex}`}>
                <div className={`cbx-inner ${styles.ex}`}>
                    <div className={`container ${styles.ex}`}>
                        <div className={`cbx-content ${styles.ex}`}>
                            <div className={`row ${styles.ex}`}>
                                <div className={`col-sm-12 ${styles.ex}`}>
                                    <div className={`text-center cbx-heading ${styles.ex}`}>
                                        <h2 className={`uppercase ${styles.ex}`}>FAQ</h2>
                                        <p className={styles.ex}>
                                            Donec et viverra ipsum. Quisque vulputate ac ante ut laoreet.
                                            Feugiat eleifend, arcu orci fermentum molestie varius dolor.
                                        </p>
                                    </div>
                                    <div className={`row paddingTop ${styles.ex}`}>
                                        <div className={`col-md-6 col-sm-12 ${styles.ex}`}>
                                            <div className={`faq-img ${styles.ex}`}>
                                                <Image src={fag} alt="" className={styles.ex} />
                                            </div>
                                        </div>
                                        <div className={`col-md-6 col-sm-12 ${styles.ex}`}>
                                            <div className={`cbx-single-faq ${styles.ex}`}>
                                                <div
                                                    className={`panel-group ${styles.ex}`}
                                                    id="accordionthree"
                                                    role="tablist"
                                                    aria-multiselectable="true"
                                                >
                                                    <div className={`panel panel-default cbx-panel ${styles.ex}`}>
                                                        <div
                                                            className={`panel-heading ${styles.ex}`}
                                                            role="tab"
                                                            id="headingthirtytwo"
                                                        >
                                                            <p
                                                                className={`panel-title ${styles.ex}`}
                                                                id="collapsible-group-item-18"
                                                            >
                                                                <a
                                                                    className={`uncollapse collapsed ${styles.ex}`}
                                                                    data-toggle="collapse"
                                                                    data-parent="#accordionfour"
                                                                    href="#collapsethertytwo"
                                                                    aria-expanded="false"
                                                                >
                                                                    <span className={styles.ex}>
                                                                        You wake up feeling exhausted, with barely any
                                                                        memory?
                                                                    </span>
                                                                </a>
                                                                <a
                                                                    className={`anchorjs-link ${styles.ex}`}
                                                                    href="#collapsible-group-item-18"
                                                                >
                                                                    <span className={`anchorjs-icon ${styles.ex}`} />
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div
                                                            id="collapsethertytwo"
                                                            className={`panel-collapse collapse ${styles.ex}`}
                                                            role="tabpanel"
                                                            aria-expanded="false"
                                                            style={{ height: 0 }}
                                                        >
                                                            <div className={`panel-body ${styles.ex}`}>
                                                                <p className={styles.ex}>
                                                                    Sed pharetra ipsum sit are amet semper euismod.
                                                                    Phasellus vitae nunc at diam is rhoncus faucibus.
                                                                    Aenean fermentum magna egestas sem viverra
                                                                    feugiat. Pellentesque aliquet diam sit amet ligula
                                                                    pellentesque accumsan. Praesent sodales orci at
                                                                    hendreritgravida. Nam sodalessollicitudin
                                                                    sodalesorci diam sit sed egestas.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`panel panel-default cbx-panel ${styles.ex}`}>
                                                        <div
                                                            className={`panel-heading ${styles.ex}`}
                                                            role="tab"
                                                            id="headingthirtythree"
                                                        >
                                                            <p
                                                                className={`panel-title ${styles.ex}`}
                                                                id="collapsible-group-item-19"
                                                            >
                                                                <a
                                                                    className={`uncollapse collapsed ${styles.ex}`}
                                                                    data-toggle="collapse"
                                                                    data-parent="#accordionfour"
                                                                    href="#collapsethertythree"
                                                                    aria-expanded="false"
                                                                >
                                                                    <span className={styles.ex}>
                                                                        That was my life, too, until about a month ago?
                                                                    </span>
                                                                </a>
                                                                <a
                                                                    className={`anchorjs-link ${styles.ex}`}
                                                                    href="#collapsible-group-item-19"
                                                                >
                                                                    <span className={`anchorjs-icon ${styles.ex}`} />
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div
                                                            id="collapsethertythree"
                                                            className={`panel-collapse collapse ${styles.ex}`}
                                                            role="tabpanel"
                                                            aria-expanded="false"
                                                            style={{ height: 0 }}
                                                        >
                                                            <div className={`panel-body ${styles.ex}`}>
                                                                <p className={styles.ex}>
                                                                    Sed pharetra ipsum sit are amet semper euismod.
                                                                    Phasellus vitae nunc at diam is rhoncus faucibus.
                                                                    Aenean fermentum magna egestas sem viverra
                                                                    feugiat. Pellentesque aliquet diam sit amet ligula
                                                                    pellentesque accumsan. Praesent sodales orci at
                                                                    hendreritgravida. Nam sodalessollicitudin
                                                                    sodalesorci diam sit sed egestas.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`panel panel-default cbx-panel ${styles.ex}`}>
                                                        <div
                                                            className={`panel-heading ${styles.ex}`}
                                                            role="tab"
                                                            id="headingthirtyfour"
                                                        >
                                                            <p
                                                                className={`panel-title ${styles.ex}`}
                                                                id="collapsible-group-item-20"
                                                            >
                                                                <a
                                                                    className={`uncollapse collapsed ${styles.ex}`}
                                                                    data-toggle="collapse"
                                                                    data-parent="#accordionfour"
                                                                    href="#collapsethertyfour"
                                                                    aria-expanded="false"
                                                                >
                                                                    <span className={styles.ex}>
                                                                        “Whoa, hold on there!” you might be saying. I
                                                                        should cut?
                                                                    </span>
                                                                </a>
                                                                <a
                                                                    className={`anchorjs-link ${styles.ex}`}
                                                                    href="#collapsible-group-item-20"
                                                                >
                                                                    <span className={`anchorjs-icon ${styles.ex}`} />
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div
                                                            id="collapsethertyfour"
                                                            className={`panel-collapse collapse ${styles.ex}`}
                                                            role="tabpanel"
                                                            aria-expanded="false"
                                                            style={{ height: 0 }}
                                                        >
                                                            <div className={`panel-body ${styles.ex}`}>
                                                                <p className={styles.ex}>
                                                                    Sed pharetra ipsum sit are amet semper euismod.
                                                                    Phasellus vitae nunc at diam is rhoncus faucibus.
                                                                    Aenean fermentum magna egestas sem viverra
                                                                    feugiat. Pellentesque aliquet diam sit amet ligula
                                                                    pellentesque accumsan. Praesent sodales orci at
                                                                    hendreritgravida. Nam sodalessollicitudin
                                                                    sodalesorci diam sit sed egestas.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`panel panel-default cbx-panel ${styles.ex}`}>
                                                        <div
                                                            className={`panel-heading ${styles.ex}`}
                                                            role="tab"
                                                            id="headingthirtyfive"
                                                        >
                                                            <p
                                                                className={`panel-title ${styles.ex}`}
                                                                id="collapsible-group-item-21"
                                                            >
                                                                <a
                                                                    className={`uncollapse collapsed ${styles.ex}`}
                                                                    data-toggle="collapse"
                                                                    data-parent="#accordionfour"
                                                                    href="#collapsethertyfive"
                                                                    aria-expanded="false"
                                                                >
                                                                    <span className={styles.ex}>
                                                                        But you know what? That’s not what your job is
                                                                        really?
                                                                    </span>
                                                                </a>
                                                                <a
                                                                    className={`anchorjs-link ${styles.ex}`}
                                                                    href="#collapsible-group-item-21"
                                                                >
                                                                    <span className={`anchorjs-icon ${styles.ex}`} />
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div
                                                            id="collapsethertyfive"
                                                            className={`panel-collapse collapse ${styles.ex}`}
                                                            role="tabpanel"
                                                            aria-expanded="false"
                                                            style={{ height: 0 }}
                                                        >
                                                            <div className={`panel-body ${styles.ex}`}>
                                                                <p className={styles.ex}>
                                                                    Sed pharetra ipsum sit are amet semper euismod.
                                                                    Phasellus vitae nunc at diam is rhoncus faucibus.
                                                                    Aenean fermentum magna egestas sem viverra
                                                                    feugiat. Pellentesque aliquet diam sit amet ligula
                                                                    pellentesque accumsan. Praesent sodales orci at
                                                                    hendreritgravida. Nam sodalessollicitudin
                                                                    sodalesorci diam sit sed egestas.
                                                                </p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={`panel panel-default cbx-panel ${styles.ex}`}>
                                                        <div
                                                            className={`panel-heading ${styles.ex}`}
                                                            role="tab"
                                                            id="headingOne"
                                                        >
                                                            <p
                                                                className={`panel-title ${styles.ex}`}
                                                                id="collapsible-group-item-1"
                                                            >
                                                                <a
                                                                    className={`uncollapse collapsed ${styles.ex}`}
                                                                    data-toggle="collapse"
                                                                    data-parent="#accordionone"
                                                                    href="#collapseOne"
                                                                    aria-expanded="false"
                                                                >
                                                                    <span className={styles.ex}>
                                                                        “Whoa, hold on there!” you might be saying. I
                                                                        should cut?
                                                                    </span>
                                                                </a>
                                                                <a
                                                                    className={`anchorjs-link ${styles.ex}`}
                                                                    href="#collapsible-group-item-1"
                                                                >
                                                                    <span className={`anchorjs-icon ${styles.ex}`} />
                                                                </a>
                                                            </p>
                                                        </div>
                                                        <div
                                                            id="collapseOne"
                                                            className={`panel-collapse collapse ${styles.ex}`}
                                                            role="tabpanel"
                                                            aria-expanded="false"
                                                            style={{ height: 0 }}
                                                        >
                                                            <div className={`panel-body ${styles.ex}`}>
                                                                <p className={styles.ex}>
                                                                    Sed pharetra ipsum sit are amet semper euismod.
                                                                    Phasellus vitae nunc at diam is rhoncus faucibus.
                                                                    Aenean fermentum magna egestas sem viverra
                                                                    feugiat. Pellentesque aliquet diam sit amet ligula
                                                                    pellentesque accumsan. Praesent sodales orci at
                                                                    hendreritgravida. Nam sodalessollicitudin
                                                                    sodalesorci diam sit sed egestas est dictum.
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
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;