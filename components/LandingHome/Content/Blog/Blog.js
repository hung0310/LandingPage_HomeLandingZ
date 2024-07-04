import React from 'react';
import Image from 'next/image';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faUser,
    faClock,
} from "@fortawesome/free-solid-svg-icons";

import blog4 from "../../../../public/static/assets/img/blog/blog4.png";
import blog5 from "../../../../public/static/assets/img/blog/blog5.png";
import blog6 from "../../../../public/static/assets/img/blog/blog6.png";

const Blog = () => {

    const blogPosts = [
        {
            image: blog4,
            author: "Adam Smith",
            date: "Jan. 15 2017",
            title: "Bibendum est ultricies integer quis.",
            content: "Lorem ipsum dolor sit amet, ridens eligendi an nec, his nostro dolorum splendide te Docendi intellegebat eu pro."
        },
        {
            image: blog5,
            author: "Adam Smith",
            date: "Jan. 15 2017",
            title: "Iaculis at erat pellentesque adipiscing.",
            content: "Lorem ipsum dolor sit amet, ridens eligendi an nec, his nostro dolorum splendide te Docendi intellegebat eu pro."
        },
        {
            image: blog6,
            author: "Adam Smith",
            date: "Jan. 15 2017",
            title: "Platea dictumst quisque sagittis purus.",
            content: "Lorem ipsum dolor sit amet, ridens eligendi an nec, his nostro dolorum splendide te Docendi intellegebat eu pro."
        }
    ];

    return (
        <section>
            <div id="cbx-latestnews" className={`cbx-section cbx-latestnews ${styles.ex}`}>
                <div className={`cbx-inner ${styles.ex}`}>
                    <div className={`container ${styles.ex}`}>
                        <div className={`cbx-content ${styles.ex}`}>
                            <div className={`row ${styles.ex}`}>
                                <div className={`col-xs-12 ${styles.ex}`}>
                                    <div className={`text-center cbx-heading ${styles.ex}`}>
                                        <h2 className={`uppercase ${styles.ex}`}>Blog</h2>
                                        <p className={`${styles.ex}`}>
                                            Donec et viverra ipsum. Quisque vulputate ac ante ut laoreet.
                                            Feugiat eleifend, arcu orci fermentum molestie varius dolor.
                                        </p>
                                    </div>
                                    <div>
                                        <div className={`row ${styles.ex}`}>
                                            {blogPosts.map((post, index) => (
                                                <div key={index} className={`col-md-4 col-sm-12 col-xs-12 ${styles.ex}`}>
                                                    <div className={`single-blog-item ${styles.ex}`}>
                                                        <div className={`blog-thumb ${styles.ex}`}>
                                                            <a href="#" className={styles.ex}>
                                                                <Image
                                                                    src={post.image}
                                                                    alt={`Blog Post ${index + 1}`}
                                                                    className={`img-responsive ${styles.ex}`}
                                                                />
                                                            </a>
                                                        </div>
                                                        <div className={`blog-content ${styles.ex}`}>
                                                            <div className={`blog-tags ${styles.ex}`}>
                                                                <ul className={styles.ex}>
                                                                    <li className={`blog-author ${styles.ex}`}>
                                                                        <a href="#" className={`${styles.ex}`}>
                                                                            <FontAwesomeIcon icon={faUser}  aria-hidden="true" className={styles.ex}/>
                                                                            <span style={{ marginLeft: "10px" }}>{post.author}</span>
                                                                        </a>
                                                                    </li>
                                                                    <li className={`blog-date ${styles.ex}`}>
                                                                        <a href="#" className={styles.ex}>
                                                                            <FontAwesomeIcon icon={faClock}  aria-hidden="true" className={styles.ex}/>
                                                                            <span style={{ marginLeft: "10px" }}>{post.date}</span>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                            <h4 className={styles.ex}>
                                                                <a href="#" className={styles.ex}>
                                                                    {post.title}
                                                                </a>
                                                            </h4>
                                                            <p className={styles.ex}>
                                                                {post.content}
                                                            </p>
                                                            <a className={`readmore ${styles.ex}`} href="#">
                                                                Read More
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
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