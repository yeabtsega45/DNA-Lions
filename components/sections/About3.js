import Link from "next/link";
import VideoBox from "../elements/VideoBox";

export default function About3() {
  return (
    <>
      <section className="about-section">
        {/*===============spacing==============*/}
        <div className="pd_top_85" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-12 mb-5 mb-lg-5 mb-xl-0">
              <div className="image_boxes style_four">
                <div className="image_box one">
                  <img
                    src="/assets/images/about/about-11.jpg"
                    className="img-fluid"
                    alt="about"
                  />
                </div>
                <div className="image_box">
                  <div className="row">
                    <div className="col-lg-6 col-md-12 ps-0 ps-lg-0 pe-0 pe-lg-3 pe-xl-3 mb-4 mb-lg-0 mb-xl-0">
                      <div className="imgs">
                        <img
                          src="/assets/images/about/about-3.jpg"
                          className="img-fluid one_img"
                          alt="about"
                        />
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-12 ps-0 ps-lg-3 pe-0 pe-lg-0 pe-xl-0">
                      <div className="imgs">
                        <img
                          src="/assets/images/about/about-4.jpg"
                          className="img-fluid one_img"
                          alt="about"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="image_content_inner viceo_en">
                  <h2> 19 Years Of Experience</h2>
                  <div className="video_box_null">
                    <VideoBox />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-12">
              <div className="pd_left_20">
                {/*===============spacing==============*/}
                <div className="pd_top_25" />
                {/*===============spacing==============*/}
                <div className="title_all_box style_three  dark_color">
                  <div className="title_sections three left">
                    <div className="before_title">
                      Commitment, Integrity, and Success
                    </div>
                    <h2>Our Core Values</h2>
                    <p>
                      From small enterprises and personal taxes to multinational
                      corporations, we are determined to make the seemingly
                      impossible possible while earning our clients' respect and
                      loyalty.
                    </p>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_25" />
                {/*===============spacing==============*/}
                <div className="extra_content image_with_content dark_color">
                  <div className="simple_image">
                    <img
                      src="/assets/images/united-states-flag.png"
                      alt="img"
                    />
                    <h2>
                      Since 2006, <br /> Operating in Georgia, Atlanta.
                    </h2>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_25" />
                {/*===============spacing==============*/}
                <div className="description_box">
                  <p>
                    We develop relationships that create positive differences in
                    our customers' lives by delivering premium value and
                    upholding the highest standards of integrity in all our
                    actions.
                  </p>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_25" />
                {/*===============spacing==============*/}
                <div className="row gutter_15px">
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="icon_box_all  style_two">
                      <div className="icon_content  icon_imgs ">
                        <div className="icon">
                          <img
                            src="/assets/images/icon-img-n-1.png"
                            className="img-fluid svg_image"
                            alt="icon png"
                          />
                        </div>
                        <div className="txt_content">
                          <h3>
                            <Link href="#">
                              Unwavering Integrity & Accountability
                            </Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-sm-12">
                    <div className="icon_box_all  style_two">
                      <div className="icon_content  icon_imgs ">
                        <div className="icon">
                          <img
                            src="/assets/images/icon-img-n-2.png"
                            className="img-fluid svg_image"
                            alt="icon png"
                          />
                        </div>
                        <div className="txt_content">
                          <h3>
                            <Link href="#">Excellence in Service</Link>
                          </h3>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_30" />
                {/*===============spacing==============*/}
                <div className="theme_btn_all color_one">
                  <Link href="/contact" className="theme-btn five">
                    Contact us
                    <i className="icon-right-arrow" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_60" />
        {/*===============spacing==============*/}
      </section>
    </>
  );
}
