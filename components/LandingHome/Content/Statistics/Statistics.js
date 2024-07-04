import React from 'react';
import Image from 'next/image';
import styles from './Statistics.module.scss';

import Statistic from './Statistic';
import headphonesIcon from '../../../../public/static/assets/img/statistics/001-headphones.png';
import happyIcon from '../../../../public/static/assets/img/statistics/002-happy.png';
import usersIcon from '../../../../public/static/assets/img/statistics/003-users.png';
import cloudIcon from '../../../../public/static/assets/img/statistics/004-cloud-computing.png';

const Statistics = () => {
    return (
        <div id="cbx-stats" className={`cbx-section cbx-stats ${styles.ex}`}>
            <div className="cbx-inner">
                <div className="container">
                    <div className="text-center cbx-content">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className={`single-stats ${styles.ex}`}>
                                    <div className="stat-icon">
                                        <Image src={headphonesIcon} style={{ width: "60px", height: "60px"}} alt="Headphones Icon" />
                                    </div>
                                    <div className="stat-content">
                                        <p>
                                            <Statistic endValue={1000} />+
                                        </p>
                                        <p>Accessories</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className={`single-stats ${styles.ex}`}>
                                    <div className="stat-icon">
                                        <Image src={happyIcon} style={{ width: "60px", height: "60px"}} alt="Happy Icon" />
                                    </div>
                                    <div className="stat-content">
                                        <p>
                                            <Statistic endValue={1200} />+
                                        </p>
                                        <p>Pictures Uploaded</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className={`single-stats ${styles.ex}`}>
                                    <div className="stat-icon">
                                        <Image src={usersIcon} style={{ width: "60px", height: "60px"}} alt="Users Icon" />
                                    </div>
                                    <div className="stat-content">
                                        <p>
                                            <Statistic endValue={5000} />+
                                        </p>
                                        <p>Users</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className={`single-stats ${styles.ex}`}>
                                    <div className="stat-icon">
                                        <Image src={cloudIcon} style={{ width: "60px", height: "60px"}} alt="Cloud Icon" />
                                    </div>
                                    <div className="stat-content">
                                        <p>
                                            <Statistic endValue={10000} />+
                                        </p>
                                        <p>Downloads</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Statistics;