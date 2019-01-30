import React from "react";
import Slider from "react-slick";

import Testimonial from "./Testimonial";

import "../assets/css/testimonialsArea.css";

export default function TestimonialsArea(props) {
  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000
  };

  return (
    <section className="cs main_color2 parallax page_testimonials section_padding_75">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            {/* <div
              className="owl-carousel testimonials-carousel top-dots"
              data-responsive-sm="1"
              data-responsive-md="1"
              data-responsive-lg="1"
              data-dots="true"
            > */}
            <Slider {...settings}>
              {props.testimonialsArea.testimonials.map((testimonial, index) => {
                return (
                  <Testimonial
                    key={index}
                    quote={testimonial.quote}
                    author={testimonial.author}
                  />
                );
              })}
            </Slider>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}