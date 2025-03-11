import Link from "next/link";
export default function Process3() {
  return (
    <>
      <section className="process-section">
        {/*===============spacing==============*/}
        <div className="pd_top_80" />
        {/*===============spacing==============*/}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="title_all_box style_one text-center dark_color">
                <div className="title_sections">
                  <div className="before_title">DNA Lions</div>
                  <h2>Why Choose Us?</h2>
                </div>
                {/*===============spacing==============*/}
                <div className="mr_bottom_25" />
                {/*===============spacing==============*/}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="process_box style_four dark_color">
                <div className="process_box_outer_four ">
                  <div className="icon">
                    <img
                      src="/assets/images/service-ico-3.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                    <h6> 01</h6>
                  </div>
                  <div className="content_box">
                    <h2>
                      <Link href="#">Advanced Tax Software</Link>
                    </h2>
                    <p>Packed with powerful features for tax professionals.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              {/*===============spacing==============*/}
              <div className="mr_bottom_25" />
              {/*===============spacing==============*/}
              <div className="process_box style_four dark_color">
                <div className="process_box_outer_four ">
                  <div className="icon">
                    <img
                      src="/assets/images/process-icon-im-1.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                    <h6>02</h6>
                  </div>
                  <div className="content_box">
                    <h2>
                      <Link href="#">Integrated Tax Training</Link>
                    </h2>
                    <p>Stay ahead with expert training and resources.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              <div className="process_box style_four dark_color">
                <div className="process_box_outer_four ">
                  <div className="icon">
                    <img
                      src="/assets/images/service-ico-2.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                    <h6> 03</h6>
                  </div>
                  <div className="content_box">
                    <h2>
                      <Link href="#">Industry-Leading Support</Link>
                    </h2>
                    <p>Get assistance whenever you need it.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-lg-6 col-md-6 col-sm-12">
              {/*===============spacing==============*/}
              <div className="mr_bottom_35" />
              {/*===============spacing==============*/}
              <div className="process_box style_four dark_color">
                <div className="process_box_outer_four ">
                  <div className="icon">
                    <img
                      src="/assets/images/process-icon-im-2.png"
                      className="img-fluid svg_image"
                      alt="icon png"
                    />
                    <h6> 04</h6>
                  </div>
                  <div className="content_box">
                    <h2>
                      <Link href="#">State-of-the-Art Technology</Link>
                    </h2>
                    <p>
                      Experience seamless, efficient, and secure tax processing.
                    </p>
                  </div>
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
