import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import styles from "./News.module.scss";

import screen1 from '../../../../public/static/assets/img/screenshots/screen1.png';
import screen2 from '../../../../public/static/assets/img/screenshots/screen2.png';
import screen3 from '../../../../public/static/assets/img/screenshots/screen3.png';
import screen4 from '../../../../public/static/assets/img/screenshots/screen4.png';
import screen5 from '../../../../public/static/assets/img/screenshots/screen5.png';
import screen6 from '../../../../public/static/assets/img/screenshots/screen6.png';
import screen7 from '../../../../public/static/assets/img/screenshots/screen7.png';
import gallery from '../../../../public/static/assets/img/screenshots/gallery.png';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), {
    ssr: false,
    loadableGenerated: {
        webpack: () => [require.resolveWeak('react-owl-carousel')],
        modules: ['react-owl-carousel']
    }
});

const News = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });

    const options = {
        items: 5,
        loop: true,
        margin: 10,
        nav: true,
        dots: false,
        center: true,
        autoplay: true,
        autoplayTimeout: 3000,
        responsive: {
            0: {
                items: 1,
                dots: true,
            },
            768: {
                items: 3,
                dots: true,
            },
            1200: {
                items: 5
            }
        }
    };

    return (
        <section>
            <div id="cbx-screenshot" className={`${styles.section_new} cbx-section`} ref={ref}>
                <div className={`${styles.content_section_new} cbx-inner`}>
                    <div className={`${styles.content_container} container`}>
                        <div className={`${styles.detail_container} cbx-content`}>
                            <div className={`${styles.row_one} row`}>
                                <div className={`${styles.content_row_one} col-md-12`}>
                                    <div className={`${styles.text_row_one} text-center cbx-heading`}>
                                        <h2 className="uppercase">Screenshots</h2>
                                    </div>
                                </div>
                            </div>
                        
                            <div className={`${styles.row_two} row`}>
                                <div className={`${styles.content_row_two} col-md-12`}>
                                    {inView && (
                                        <div className={`${styles.detail_content_row_two} carousel-container p-4`}>
                                            <div className={`${styles.gallery_overlay} gallery_overlay`}>
                                                <Image src={gallery} alt="Gallery" />
                                            </div>
                                            <OwlCarousel className={`${styles.owl_carousel_img} owl-carousel owl-theme`} {...options}>
                                                <div className={`${styles.img_item} item`}>
                                                    <Image src={screen1} alt="Screen 1" className={`${styles.img_screen} `} />
                                                </div>
                                                <div className={`${styles.img_item} item`}>
                                                    <Image src={screen2} alt="Screen 2" className={`${styles.img_screen} `} />
                                                </div>
                                                <div className={`${styles.img_item} item`}>
                                                    <Image src={screen3} alt="Screen 3" className={`${styles.img_screen} `} />
                                                </div>
                                                <div className={`${styles.img_item} item`}>
                                                    <Image src={screen4} alt="Screen 4" className={`${styles.img_screen} `} />
                                                </div>
                                                <div className={`${styles.img_item} item`}>
                                                    <Image src={screen5} alt="Screen 5" className={`${styles.img_screen} `} />
                                                </div>
                                                <div className={`${styles.img_item} item`}>
                                                    <Image src={screen6} alt="Screen 6" className={`${styles.img_screen} `} />
                                                </div>
                                                <div className={`${styles.img_item} item`}>
                                                    <Image src={screen7} alt="Screen 7" className={`${styles.img_screen} `} />
                                                </div>
                                            </OwlCarousel>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;