import { Swiper, SwiperSlide } from "swiper/react";

import Link from "next/link";
import { Autoplay, Navigation, Pagination } from "swiper";
export default function HeroSlider1() {
  const swiperOptions = {
    // General
    direction: "horizontal",
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
      nextEl: ".h1n",
      prevEl: ".h1p",
    },

    // Pagination
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  };
  return (
    <>
      <section className="slider style_four nav_position_one">
        <Swiper
          {...swiperOptions}
          className=" owl_nav_block owl_dots_none theme_carousel"
        >
          <SwiperSlide className="slide-item-content">
            <div className="slide-item content_left">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(/assets/images/sliders/Slide-1.jpg)",
                }}
              ></div>
              <div className="auto-container">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="slider_content pd_top_180 pd_bottom_200">
                      <h6 className="animate_up d-inline-block">
                        A leading tax software designed for speed, accuracy, and
                        efficiency.
                      </h6>
                      <h1 className="animate_left">
                        Quick <br /> Tax Refunds
                      </h1>
                      <p className="description animate_right">
                        Our cutting-edge tax software simplifies tax
                        preparation, bank products, <br /> and compliance for
                        high-volume offices.
                      </p>
                      <div className="button_all animate_down">
                        <Link
                          href="/services"
                          className="theme-btn one  animated"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item-content">
            <div className="slide-item content_center">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(/assets/images/sliders/Slide-2.jpg)",
                }}
              ></div>
              <div className="auto-container">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="slider_content pd_top_180 pd_bottom_200">
                      <h6 className="animate_up d-inline-block">
                        A leading tax software designed for speed, accuracy, and
                        efficiency.
                      </h6>
                      <h1 className="animate_left">
                        Bank <br /> Products
                      </h1>
                      <p className="description animate_right">
                        Our cutting-edge tax software simplifies tax
                        preparation, bank products, <br /> and compliance for
                        high-volume offices.
                      </p>
                      <div className="button_all animate_down">
                        <Link
                          href="/services"
                          className="theme-btn one  animated"
                        >
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="slide-item-content">
            <div className="slide-item content_right">
              <div
                className="image-layer"
                style={{
                  backgroundImage: "url(/assets/images/sliders/Slide-3.jpg)",
                }}
              ></div>
              <div className="auto-container">
                <div className="row">
                  <div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
                    <div className="slider_content pd_top_180 pd_bottom_200">
                      <h6 className="animate_up d-inline-block">
                        A leading tax software designed for speed, accuracy, and
                        efficiency.
                      </h6>
                      <h1 className="animate_left">
                        Seamless <br /> Compliance
                      </h1>
                      <p className="description animate_right">
                        Our cutting-edge tax software simplifies tax
                        preparation, bank products, <br /> and compliance for
                        high-volume offices.
                      </p>
                      <Link
                        href="/services"
                        className="theme-btn one  animated _zoomIn"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <div className="owl-nav">
            <div className="owl-prev h1p">
              <span>‹</span>
            </div>
            <div className="owl-next h1n">
              <span>›</span>
            </div>
          </div>
        </Swiper>
      </section>
    </>
  );
}
