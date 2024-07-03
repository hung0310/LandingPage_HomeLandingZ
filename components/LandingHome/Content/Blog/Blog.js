import React from 'react';
import Image from 'next/image';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faUser,
    faClock,
} from "@fortawesome/free-solid-svg-icons";

const Blog = () => {

    return (
        <section>
            <div id="cbx-latestnews" className="cbx-section cbx-latestnews">
                <div className="cbx-inner">
                    <div className="container">
                        <div className=" cbx-content">
                            <div className="row">
                                <div className="col-xs-12">
                                    <div className="text-center cbx-heading">
                                        <h2 className="uppercase">Blog</h2>
                                        <p className="">
                                        Donec et viverra ipsum. Quisque vulputate ac ante ut laoreet.
                                        Feugiat eleifend, arcu orci fermentum molestie varius dolor.
                                        </p>
                                    </div>
                                    <div>
                                        <div className="row">
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <div className="single-blog-item">
                                                    <div className="blog-thumb">
                                                        <a href="single-blog.html">
                                                            <img
                                                                src="/static/assets/img/blog/blog4.png"
                                                                alt=""
                                                                className="img-responsive"
                                                            />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="blog-tags">
                                                            <ul>
                                                                <li className="blog-author">
                                                                    <a href="#" className=''>
                                                                        <FontAwesomeIcon icon={faUser}  aria-hidden="true" className=''/>
                                                                        <span style={{ marginLeft: "10px" }}>Adam Smith</span>
                                                                    </a>
                                                                </li>
                                                                <li className="blog-date">
                                                                    <a href="#">
                                                                        <FontAwesomeIcon icon={faClock}  aria-hidden="true"/>
                                                                        <span style={{ marginLeft: "10px" }}>Jan. 15 2017</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h4>
                                                            <a href="single-blog.html">
                                                                Bibendum est ultricies integer quis.
                                                            </a>
                                                        </h4>
                                                        <p>
                                                        Lorem ipsum dolor sit amet, ridens eligendi an nec,
                                                        his nostro dolorum splendide te Docendi intellegebat
                                                        eu pro.
                                                        </p>
                                                        <a className="readmore" href="single-blog.html">
                                                        Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <div className="single-blog-item">
                                                    <div className="blog-thumb">
                                                        <a href="single-blog.html">
                                                        <img
                                                            src="/static/assets/img/blog/blog5.png"
                                                            alt=""
                                                            className="img-responsive"
                                                        />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="blog-tags">
                                                            <ul>
                                                                <li className="blog-author">
                                                                    <a href="#" className=''>
                                                                        <FontAwesomeIcon icon={faUser}  aria-hidden="true" className=''/>
                                                                        <span style={{ marginLeft: "10px" }}>Adam Smith</span>
                                                                    </a>
                                                                </li>
                                                                <li className="blog-date">
                                                                    <a href="#">
                                                                        <FontAwesomeIcon icon={faClock}  aria-hidden="true"/>
                                                                        <span style={{ marginLeft: "10px" }}>Jan. 15 2017</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h4>
                                                        <a href="single-blog.html">
                                                            Iaculis at erat pellentesque adipiscing.{" "}
                                                        </a>
                                                        </h4>
                                                        <p>
                                                        Lorem ipsum dolor sit amet, ridens eligendi an nec,
                                                        his nostro dolorum splendide te Docendi intellegebat
                                                        eu pro.
                                                        </p>
                                                        <a className="readmore" href="single-blog.html">
                                                        Read More
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-4 col-sm-12 col-xs-12">
                                                <div className="single-blog-item">
                                                    <div className="blog-thumb">
                                                        <a href="single-blog.html">
                                                        <img
                                                            src="/static/assets/img/blog/blog6.png"
                                                            alt=""
                                                            className="img-responsive"
                                                        />
                                                        </a>
                                                    </div>
                                                    <div className="blog-content">
                                                        <div className="blog-tags">
                                                            <ul>
                                                                <li className="blog-author">
                                                                    <a href="#" className=''>
                                                                        <FontAwesomeIcon icon={faUser}  aria-hidden="true" className=''/>
                                                                        <span style={{ marginLeft: "10px" }}>Adam Smith</span>
                                                                    </a>
                                                                </li>
                                                                <li className="blog-date">
                                                                    <a href="#">
                                                                        <FontAwesomeIcon icon={faClock}  aria-hidden="true"/>
                                                                        <span style={{ marginLeft: "10px" }}>Jan. 15 2017</span>
                                                                    </a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <h4>
                                                        <a href="single-blog.html">
                                                            Platea dictumst quisque sagittis purus.
                                                        </a>
                                                        </h4>
                                                        <p>
                                                        Lorem ipsum dolor sit amet, ridens eligendi an nec,
                                                        his nostro dolorum splendide te Docendi intellegebat
                                                        eu pro.
                                                        </p>
                                                        <a className="readmore" href="single-blog.html">
                                                        Read More
                                                        </a>
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

export default Blog;