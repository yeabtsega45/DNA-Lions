import Link from "next/link";

export default function Footer1({}) {
  return (
    <>
      <div className="footer_area" id="footer_contents">
        <div className="footer_widgets_wrap bg_dark_2">
          {/*===============spacing==============*/}
          <div className="pd_top_80" />
          {/*===============spacing==============*/}
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer_widgets about_company light_color">
                  <div className="about_company_inner">
                    <div className="footer_logo">
                      <Link href="#">
                        <img
                          src="/assets/images/dna-logo.png"
                          className="img-fluid"
                          alt="logo"
                        />
                      </Link>
                      {/*===============spacing==============*/}
                      <div className="pd_bottom_30" />
                      {/*===============spacing==============*/}
                    </div>
                    <div className="content_box">
                      <p>
                        Duty the obligations of business will frequently occur
                        that pleasure have too repudiated annoyances endures
                        accepted.
                      </p>
                      <div className="consulting">
                        <div className="image">
                          <img
                            src="/assets/images/authour-image.png"
                            alt="need help"
                          />
                        </div>
                        <div className="help_con">
                          <h6>Need Help?</h6>
                          <h2>
                            <Link href="#"> Free Consultation</Link>
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Get In Touch</h2>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
                <div className="footer_widgets get_in_touch_foo light_color">
                  <div className="get_intouch_inrfo">
                    <div className="foo_cont_inner">
                      <div className="top">
                        <h6> Location</h6>
                        <p>2221 Peachtree Rd, Suite X1 Atlanta, GA 30309</p>
                      </div>
                      <div className="bottom">
                        <h6> Contact</h6>
                        <div className="con_content">
                          <h5> Phone :</h5>
                          <Link href="/tel:+18556777713"> 1-855-677-7713</Link>
                        </div>
                        <div className="con_content">
                          <h5> Mail Us :</h5>
                          <Link href="mailto:dna@247a1taxservices.com">
                            dna@247a1taxservices.com
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Company</h2>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                  <div className="navigation_foo_box">
                    <div className="navigation_foo_inner">
                      <ul className="menu">
                        <li>
                          <Link href="#">Home</Link>
                        </li>
                        <li>
                          <Link href="#">About Us</Link>
                        </li>
                        <li>
                          <Link href="#">Contact</Link>
                        </li>
                        <li>
                          <Link href="#">Professionals</Link>
                        </li>
                        <li>
                          <Link href="#">Insights</Link>
                        </li>
                        <li>
                          <Link href="#">HR Solutions</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Information</h2>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                  <div className="navigation_foo_box">
                    <div className="navigation_foo_box">
                      <div className="navigation_foo_inner">
                        <ul className="menu">
                          <li>
                            <Link href="#">How it’s Work</Link>
                          </li>
                          <li>
                            <Link href="#">Partners</Link>
                          </li>
                          <li>
                            <Link href="#">Testimonials</Link>
                          </li>
                          <li>
                            <Link href="#">Key Areas</Link>
                          </li>
                          <li>
                            <Link href="#">Case Studies</Link>
                          </li>
                          <li>
                            <Link href="#">Pricing</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
                <div className="footer_widgets wid_tit style_one">
                  <div className="fo_wid_title">
                    <h2>Essentials</h2>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_25" />
                {/*===============spacing==============*/}
                <div className="footer_widgets clearfix navigation_foo light_color style_one">
                  <div className="navigation_foo_box">
                    <div className="navigation_foo_inner">
                      <ul className="menu">
                        <li>
                          <Link href="#">Careers</Link>
                        </li>
                        <li>
                          <Link href="#">Infrastructure</Link>
                        </li>
                        <li>
                          <Link href="#">Client Support</Link>
                        </li>
                        <li>
                          <Link href="#">Privacy Policy</Link>
                        </li>
                        <li>
                          <Link href="#">Terms of Use</Link>
                        </li>
                        <li>
                          <Link href="#">Sitemap</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/*===============spacing==============*/}
          <div className="pd_bottom_50" />
          {/*===============spacing==============*/}
        </div>
        <div className="creote-footer-copyright bg_dark_3">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12">
                {/*===============spacing==============*/}
                <div className="pd_top_10" />
                {/*===============spacing==============*/}
                <div className="footer_copy_content color_white">
                  © {new Date().getFullYear()}{" "}
                  <Link href="https://www.revosolutions.com">
                    RevoSolutions.
                  </Link>{" "}
                  All Rights Reserved.
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_10" />
                {/*===============spacing==============*/}
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 text-md-end">
                {/*===============spacing==============*/}
                <div className="pd_top_10" />
                {/*===============spacing==============*/}
                <div className="footer_copy_content_right">
                  <div className="social_media_v_one">
                    <ul>
                      <li>
                        <Link href="#">
                          <span className="fa fa-facebook" />
                          <small>facebook</small>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="fa fa-twitter" />
                          <small>twitter</small>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="fa fa-skype" />
                          <small>skype</small>
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <span className="fa fa-instagram" />
                          <small>instagram</small>
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                {/*===============spacing==============*/}
                <div className="pd_bottom_10" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
