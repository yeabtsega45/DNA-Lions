import Link from "next/link";
import VideoBox from "../elements/VideoBox";

export default function About4() {
  return (
    <>
      <section className="about-section">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 col-md-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
              <div className="title_all_box style_one dark_color">
                <div className="title_sections left">
                  <div className="before_title"> A Legacy of Excellence </div>
                  <h2 className="title">Our Story</h2>
                  <p>
                    Founded in the capital of Georgia, Atlanta, in 2006 by Ayda
                    Jenkins, 24/7 A1 Tax Services LLC provides a complete range
                    of accounting services that surpass customer expectations.
                  </p>
                  <p>
                    Working closely with a team of dedicated professionals, Ayda
                    has successfully expanded her offices and services over the
                    years, ensuring that the company's reputation for excellence
                    remains unshaken. Through a network of branched-out
                    professionals, extreme flexibility, and efficient methods,
                    we achieve top-notch, high-quality results with each client.
                  </p>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_10" />
              {/*===============spacing==============*/}
              <div className="row gutter_15px">
                <div className="col-lg-4 col-md-12">
                  <div className="theme_btn_all color_one">
                    <Link href="/contact" className="theme-btn three">
                      Contact Us
                    </Link>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12">
                  <div className="extra_content authour_box dark_color">
                    <div className="authour_box_content">
                      <div className="text">
                        <h6>
                          Ayda Jenkins,{" "}
                          <span>
                            Founder &amp; CEO of 24/7 A1 Tax Services LLC
                          </span>
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_20" />
                {/*===============spacing==============*/}
              </div>
            </div>
            <div className="col-xl-6 col-lg-10 col-md-12">
              <div className="image_boxes style_five">
                <div className="image_box one">
                  <img
                    src="/assets/images/about/about-11.jpg"
                    className="img-fluid"
                    alt="img"
                  />
                  <div className="video_box_null">
                    <VideoBox />
                  </div>
                </div>
                <div className="image_box two">
                  <img
                    src="/assets/images/about/about-2.jpg"
                    className="img-fluid two"
                    alt="img"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_80" />
        {/*===============spacing==============*/}
      </section>
    </>
  );
}
