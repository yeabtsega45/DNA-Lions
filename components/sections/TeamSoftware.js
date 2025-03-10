import React from "react";

function TeamSoftware() {
  return (
    <section className="team-intro">
      {/*===============spacing==============*/}
      <div className="pd_top_90" />
      {/*===============spacing==============*/}
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="team_intro_box">
              <div className="team_intro_inner">
                <div className="image_bg">
                  <img
                    src="/assets/images/team-intro-bg.jpg"
                    className="img-fluid"
                    alt="image"
                  />
                </div>
                <div className="team_intro_start">
                  <div className="row">
                    <div className="col-lg-8">
                      <div className="left_content">
                        <div className="title">
                          <h6>Strong Team</h6>
                          <h1>Foundation of Business</h1>
                        </div>
                        <div className="quotes">
                          <span className="icon-quote" />
                          <h5>
                            Teamwork is the secret that <br /> makes common
                            people achieve <br />
                            uncommon results.
                          </h5>
                        </div>
                        <div className="authour_dtls">
                          <img
                            src="/assets/images/signature.png"
                            className="sign"
                            alt="image"
                          />
                          <h4>
                            Liam Oliver ,<span>Founder &amp; CEO of Qetus</span>
                          </h4>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4"></div>
                  </div>
                </div>
              </div>
              <div className="image_right">
                <img src="/assets/images/team-head-1.png" alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*===============spacing==============*/}
      <div className="pd_top_90" />
    </section>
  );
}

export default TeamSoftware;
