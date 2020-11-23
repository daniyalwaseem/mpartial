import React, { useEffect } from 'react';
import Range from "./Range";
import './Main.css';

function Main() {

  useEffect(() => {
    const script = document.createElement('script');
    script.src = "/js/index.js";
    script.async = true;
    document.body.appendChild(script);
  return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className='sections'>

      {/* Ground-Truth Section Start */}

      <section id="Ground-Truth-Data">
        <div className="container">

          <div className="row">

            <div className="col-lg-6 col-md-6 col-sm-12">
              <h1 className="section_title_text"> GROUND-TRUTH DATA EVERYONE TRUSTS </h1>
            </div>

            <div className="col-lg-6 col-md-6 col-sm-12">
              <div className="section_title_description" >
              We have combined the best-of-breed technology platforms with an eye towards relieving you of administrative burden. Matterport 3D scans augmented by TrueSketch PLUS are used to generate consistent Xactimate sheets that are delivered in accord with Actionable Insights compliance rule sets. Each mpartial is produced with full transparency, unprecedented forensic photography, and infallible geospatial data that collectively result in rapid approvals.
              </div>
            </div>

          </div>

          <div className="compare_images_section">
            <div className="ba-slider">
              <img src="/images/pre.jpg" alt="" />
                <div className="resize">
                  <img src="/images/post.jpg" alt="" />
                </div>
                  <span className="handle"></span>
            </div>
          </div>

          <div className="try_now_btn">
            <button className="btn"> Try Today </button>
          </div>

        </div>
      </section>

      {/* Ground-Truth Section End */}

      {/* How it Works Section Start */}

      <section id="How-It-Works">
        <div className="container">

          <div className="row">
            <div className="col">
              <h1 className="section_title_text"> How It Works </h1>
            </div>
          </div>

          <div className="data_points">
            <div className="row no-gutters">

              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_1 col-md-4 col-sm-12">
                    1
                  </div>
                  <div className="data_text col-md-8 col-sm-12 ">
                    <a href="https://www.getinsights.org/matterport-standards/?__hstc=6037484.9a1fbca92ecb2b8f2deea5cabbec72a4.1604381325683.1604846303276.1604851023155.14&__hssc=6037484.4.1604851023155&__hsfp=2467125210">
                      Perform pre-mitigation and post-mitigation scans with a Matterport Pro Series camera.
                    </a>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_2 col-md-4 col-sm-12">
                    2
                  </div>
                  <div className="data_text col-md-8 col-sm-12 ">
                    <span> Submit the Matterport scans via the mpartial portal and then go back to what you do great. </span>
                  </div>
                </div>
              </div>

              <div className="col-md-4 col-sm-12">
                <div className="data_point_item row no-gutters">
                  <div className="data_number data_number_3 col-md-4 col-sm-12">
                    3
                  </div>
                  <div className="data_text col-md-8 col-sm-12 ">
                    <span> Receive a well-formatted, fully documented Xactimate PDF, ESX & Matterport TrueSketch PLUS SKX. </span>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="try_now_btn">
            <button className="btn"> Get Started </button>
          </div>

        </div>
      </section>

      {/* How it Works Section End */}

      {/* Fee Structure Section Start */}

      <section id="Fee-Structure">
        <div className="container">

          <div className="row">
            <div className="col">
              <h1 className="section_title_text"> Waterfall Fee Structure </h1>
            </div>
          </div>

          <Range />

        </div>
      </section>

      {/* Fee Structure Section End */}

      {/* Example Deliverables Section Start */}

      <section id="Example-Deliverables">
        <div className="container">

          <div className="row">
            <div className="col">
              <h1 className="section_title_text"> Example Deliverables </h1>
            </div>
          </div>

          <h3 className="widget-title mt-1"> Pre-Mitigation Scan + Post-Mitigation Scan = ESX & SKX (TrueSketch PLUS) </h3>

          <div className="deliver_widget_container">
            <div className="row">

              <div className="col-lg-6 col-md-12 col-sm-12 Example_1">
                <iframe src="https://my.matterport.com/show/?m=e5Wxtu8Arbx" frameborder="0" allowfullscreen allow="vr" title="Example_1"> </iframe>
              </div>

              <div className="col-lg-6 col-md-12 col-sm-12">
                <iframe src="https://my.matterport.com/show/?m=DhqzGgT7M1E" frameborder="0" allowfullscreen allow="vr" title="Example_2"> </iframe>
              </div>

            </div>
          </div>

          <div className="deliver-slider">
            <h3 className="widget-title mt-1"> Immaculate. Impartial. [ESX] </h3>

              <div id="demo" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                  <li data-target="#demo" data-slide-to="0" className="active"></li>
                  <li data-target="#demo" data-slide-to="1"></li>
                  <li data-target="#demo" data-slide-to="2"></li>
                  <li data-target="#demo" data-slide-to="3"></li>
                  <li data-target="#demo" data-slide-to="4"></li>
                  <li data-target="#demo" data-slide-to="5"></li>
                </ul>

                <div className="carousel-inner" role="listbox">

                  <div className="carousel-item active">
                    <img src="/images/img1.jpg" alt="" />
                  </div>

                  <div className="carousel-item">
                    <img src="/images/img2.jpg" alt="" />
                  </div>

                  <div className="carousel-item">
                    <img src="/images/img3.jpg" alt="" />
                  </div>

                  <div className="carousel-item">
                    <img src="/images/img4.jpg" alt="" />
                  </div>

                  <div className="carousel-item">
                    <img src="/images/img5.jpg" alt="" />
                  </div>

                  <div className="carousel-item" >
                    <img src="/images/img6.jpg" alt="" />
                  </div>

                </div>

                <a className="carousel-control-prev" href="#demo" data-slide="prev">
                  <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#demo" data-slide="next">
                  <span className="carousel-control-next-icon"></span>
                </a>
              </div>

          </div>

            <div className="sketch-widget">

              <h3 className="widget-title mt-1">
                <a href="https://support.matterport.com/hc/en-us/articles/360001452428-Matterport-TrueSketch-and-TrueSketch-PLUS-for-Xactimate" target="_blank" rel="noopener noreferrer">
                TrueSketch PLUS [SKX]
                </a>
              </h3>

              <div className="sketch-container">
                <div className="row">

                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src="/images/sketch1.png" alt=""  />
                  </div>

                  <div className="col-lg-6 col-md-12 col-sm-12">
                    <img src="/images/sketch2.png" alt=""  />
                  </div>

                </div>
              </div>

            </div>

        </div>
      </section>

      {/* Example Deliverables Section End */}

      {/* Contact US Section Start */}

      <section id="Contact-US">
        <div className="container">

          <div className="row">
            <div className="col">
              <h1 className="section_title_text"> Contact Us </h1>
            </div>
          </div>

          <div className="form-holder">
            <form>

              <div className="row">

                <div className="col-md-6 col-sm-12 ">

                <div className="form-group nogroup">
                    <input type="text" name="Name" required id="inputField1" className="input-area"/>
                    <label for="inputField1" className="floating_label"> Your Name </label>
                  </div>

                  <div className="form-group nogroup">
                    <input type="text" name="Email" required id="inputField2" className="input-area"/>
                    <label for="inputField2" className="floating_label"> Email </label>
                  </div>

                  <div className="form-group nogroup">
                    <input type="text" name="Cell" required id="inputField3" className="input-area"  />
                    <label for="inputField3" className="floating_label"> Cell </label>
                  </div>

                </div>

                <div className="col-md-6 col-sm-12 ">

                  <div className="form-group nogroup">
                    <textarea name="Message" required id="text_area" className="input-area"  />
                    <label for="text_area" className="floating_label">  Write your message...  </label>
                  </div>

                </div>

              </div>

              <div className="try_now_btn">
                <button type="submit" className="submit_btn"> Submit </button>
              </div>

            </form>
          </div>

        </div>
      </section>

      {/* Contact US Section End */}

    </div>
  );
}

export default Main;
