import React from "react";

function CallToActionSoftware() {
  return (
    <>
      <div className="pd_bottom_70" />
      {/*===============spacing==============*/}

      <section className="call-to-action-section">
        <div className="auto-container">
          <div className="call_to_action style_two">
            <div className="image">
              <img
                src="../assets/images/sliders/slider-1-2.jpg"
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="auto-container">
              <div className="row">
                <div className="col-lg-8">
                  <div className="left_content">
                    <div className="main_content">
                      <h1>Need Some Help?</h1>
                      <div className="bottom_content">
                        <div className="call_content">
                          <span className="icon-phone-call1 icon" />
                          <div className="content_bx">
                            <h2>Contact Us Soon</h2>
                            <p>creote@support.com &amp; 16599349993</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="image_right">
                    <img
                      decoding="async"
                      src="../assets/images/cal-img.png"
                      alt="image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*===============spacing==============*/}
      <div className="pd_bottom_70" />
    </>
  );
}

export default CallToActionSoftware;
