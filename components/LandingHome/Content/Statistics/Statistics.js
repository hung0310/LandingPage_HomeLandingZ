import React from 'react';
import Image from 'next/image';
import styles from './Statistics.module.scss';
import Statistic from './Statistic'; // Đường dẫn của bạn có thể khác

const Statistics = () => {
    return (
        <div id="cbx-stats" className="cbx-section cbx-stats">
            <div className="cbx-inner">
                <div className="container">
                    <div className="text-center cbx-content">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 col-xs-12">
                                <div className="single-stats">
                                    <div className="stat-icon">
                                        <img src="/static/assets/img/statistics/001-headphones.png" alt="" />
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
                                <div className="single-stats">
                                    <div className="stat-icon">
                                        <img src="/static/assets/img/statistics/002-happy.png" alt="" />
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
                                <div className="single-stats">
                                    <div className="stat-icon">
                                        <img src="/static/assets/img/statistics/003-users.png" alt="" />
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
                                <div className="single-stats">
                                    <div className="stat-icon">
                                        <img src="/static/assets/img/statistics/004-cloud-computing.png" alt="" />
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