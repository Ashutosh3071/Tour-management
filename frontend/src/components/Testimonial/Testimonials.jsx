import React from "react";
import Slider from "react-slick";
import ava01 from "../../assets/images/ava-1.jpg";
import ava02 from "../../assets/images/ava-2.jpg";
import ava03 from "../../assets/images/ava-3.jpg";

const Testimonials = () => {

    const settings= {
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoplaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slideToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slideToScroll: 1,
                },
            },
        ],
    };
  return (
 <Slider {...settings}>
    <div className="testimonial py-4 px-3">
        <p>"Perfectly Planned Trip!"
        "Everything was so well-organized, from flights to excursions. No stress, just amazing memories!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
         <img src={ava01} className="w-25 h-25 rounded-2" alt="" />
         <div>
           <h6 className="mb-0 mt-3">Subham </h6>
           <p>Customers</p>
         </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>"Best Travel Experience Ever!"
        "This site helped me find incredible places I'd never have discovered on my own. Truly unique experiences!
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
         <img src={ava02} className="w-25 h-25 rounded-2" alt="" />
         <div>
           <h6 className="mb-0 mt-3">Nisha </h6>
           <p>Customers</p>
         </div>
        </div>
    </div>
    <div className="testimonial py-4 px-3">
        <p>"BEasy, Fun, and Hassle-Free!"
        "Booking was a breeze, and the itinerary suggestions were spot on. I’m already planning my next trip!"
        </p>

        <div className="d-flex align-items-center gap-4 mt-3">
         <img src={ava03} className="w-25 h-25 rounded-2" alt="" />
         <div>
           <h6 className="mb-0 mt-3">Teja </h6>
           <p>Customers</p>
         </div>
        </div>
    </div>
  </Slider>
  );
};

export default Testimonials;
