import Link from "next/link";

export default function Service10() {
  return (
    <>
      <section className="service-box-sction">
        {/*===============spacing==============*/}
        <div className="pd_top_100" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
              <div className="icon_box_all style_five">
                <div className="icon_content">
                  <div className="icon">
                    <span className="icon-support" />
                  </div>
                  <small>01</small>
                  <div className="text_box">
                    <h2>Remote Signature Capture</h2>
                    <p>Get client signatures anywhere, anytime.</p>
                  </div>
                  <div className="hover_content">
                    <div className="content">
                      <div className="inner">
                        <p>Get client signatures anywhere, anytime.</p>
                        <Link href="#" className="read_more">
                          Read More
                          <span className="icon-right-arrow-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_20" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
              <div className="icon_box_all style_five">
                <div className="icon_content">
                  <div className="icon">
                    <span className="icon-united" />
                  </div>
                  <small>02</small>
                  <div className="text_box">
                    <h2>Integrated Text Messaging</h2>
                    <p>Communicate with clients instantly.</p>
                  </div>
                  <div className="hover_content">
                    <div className="content">
                      <div className="inner">
                        <p>Communicate with clients instantly.</p>
                        <Link href="#" className="read_more">
                          Read More <span className="icon-right-arrow-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_20" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="icon_box_all style_five">
                <div className="icon_content">
                  <div className="icon">
                    <span className="icon-solution" />
                  </div>
                  <small>03</small>
                  <div className="text_box">
                    <h2>Electronic Signature Pad Technology</h2>
                    <p>Secure, paperless transactions.</p>
                  </div>
                  <div className="hover_content">
                    <div className="content">
                      <div className="inner">
                        <p>Secure, paperless transactions.</p>
                        <Link href="#" className="read_more">
                          Read More <span className="icon-right-arrow-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_30" />
              {/*===============spacing==============*/}
            </div>
          </div>

          <div className="row">
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
              <div className="icon_box_all style_five">
                <div className="icon_content">
                  <div className="icon">
                    <span className="icon-support" />
                  </div>
                  <small>04</small>
                  <div className="text_box">
                    <h2>Mobile & Desktop Versions</h2>
                    <p>Work on any device seamlessly.</p>
                  </div>
                  <div className="hover_content">
                    <div className="content">
                      <div className="inner">
                        <p>Work on any device seamlessly.</p>
                        <Link href="#" className="read_more">
                          Read More
                          <span className="icon-right-arrow-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_20" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 mb-sm-5 mb-md-5 mb-lg-5 mb-xl-0">
              <div className="icon_box_all style_five">
                <div className="icon_content">
                  <div className="icon">
                    <span className="icon-united" />
                  </div>
                  <small>05</small>
                  <div className="text_box">
                    <h2>Scan & Store Capability</h2>
                    <p>Keep all documents organized digitally.</p>
                  </div>
                  <div className="hover_content">
                    <div className="content">
                      <div className="inner">
                        <p>Keep all documents organized digitally.</p>
                        <Link href="#" className="read_more">
                          Read More <span className="icon-right-arrow-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_20" />
              {/*===============spacing==============*/}
            </div>
            <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12">
              <div className="icon_box_all style_five">
                <div className="icon_content">
                  <div className="icon">
                    <span className="icon-solution" />
                  </div>
                  <small>06</small>
                  <div className="text_box">
                    <h2>Point-and-Shoot Error Detection</h2>
                    <p>Instantly spot and fix errors.</p>
                  </div>
                  <div className="hover_content">
                    <div className="content">
                      <div className="inner">
                        <p>Instantly spot and fix errors.</p>
                        <Link href="#" className="read_more">
                          Read More <span className="icon-right-arrow-long" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/*===============spacing==============*/}
              <div className="pd_bottom_20" />
              {/*===============spacing==============*/}
            </div>
          </div>
        </div>
        {/*===============spacing==============*/}
        <div className="pd_bottom_70" />
        {/*===============spacing==============*/}
      </section>
    </>
  );
}
