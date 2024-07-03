import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import testimonial1 from '../../../../public/static/assets/img/team/profile-4.png';
import testimonial2 from '../../../../public/static/assets/img/team/profile-5.png';
import testimonial3 from '../../../../public/static/assets/img/team/profile-6.png';

const OwlCarousel = dynamic(() => import('react-owl-carousel'), { ssr: false });

const Testimonial = () => {
  const testimonials = [
    {
      image: testimonial1,
      name: 'Adam Smith',
      company: 'BigSoft',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuovod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation.',
    },
    {
      image: testimonial2,
      name: 'Jone Doe',
      company: 'MiniSoft',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuovod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation.',
    },
    {
      image: testimonial3,
      name: 'Nicole Morrison',
      company: 'MediumSoft',
      text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiuovod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim quis nostrud exercitation.',
    },
  ];

  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    margin: 0,
    nav: true,
    dots: true,
    items: 1
  };

  return (
    <section>
      <div id="cbx-testimonial" className="cbx-section cbx-testimonial">
        <div className="cbx-inner">
          <div className="container">
            <div className="cbx-content">
              <div className="row">
                <div className="col-sm-12">
                  <div className="text-center cbx-heading">
                    <h2 className="uppercase">Testimonials</h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-8 col-md-offset-2">
                  <OwlCarousel className="owl-carousel owl-theme" {...options}>
                    {testimonials.map((testimonial, index) => (
                      <div className="item" key={index}>
                        <div className="content text-center">
                          <Image
                            src={testimonial.image}
                            alt={`Testimonial ${index + 1}`}
                            style={{
                              width: "120px",
                              height: "120px",
                              borderRadius: "50%",
                              objectFit: "cover",
                              marginBottom: "3rem"
                            }}
                          />
                          <blockquote style={{ borderLeft: 'none' }}>
                            <p style={{ marginBottom: "2rem" }}>{testimonial.text}</p>
                          </blockquote>
                          <div className="testimonial-client-info" style={{ marginBottom: "4rem" }}>
                            <span className="name" style={{ color: "#48AEFF", fontSize: "20px", fontWeight: "600", fontFamily:"Open Sans, sans-serif" }}>{testimonial.name}</span>
                            <p className="company">{testimonial.company}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </OwlCarousel>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;