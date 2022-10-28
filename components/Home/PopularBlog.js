import placeholdertwo from "../img/placeholdertwo.png";
import placeholder from "../img/placeholder.png";
import threedays from "../img/threedays.svg";
import threedaysago from "../img/threedaysago.svg";
import line from "../img/line.svg";
import ellipse from "../img/ellipse.svg";


import "../css/components/PopularBlog.css";

export default function BlogPost() {
  return (
    <section>
      <div className="popular-blog">
        <div className="container pt-5">
          <div className="row">
            <div className="col-lg-1"></div>

            <div className="text-center link-secondary pt-5 pb-3"> <img className="pb-1" style={{ marginRight: 5 }} src={ellipse} />
              Blog Post
            </div>

            <h2 className="pb-5 text-center justify-content blog-header">
              Popular {" "}
              <div className="d-inline-flex position-relative">
              <div style={{ zIndex: 2 }}> blog post </div>
              <img
                  width={200}
                  src={line}
                  style={{
                    position: "absolute",
                    bottom: 5,

                    left: 2,
                  }}
                />
              </div>
            </h2>

            <div className="col-lg-7 pt-5 pb-5 placeholder">
              <img
                className="blog-image-large"
                src={placeholder}
                alt="placeholder"
              />

              <div className="row mt-3">
                <div className="col-md-4 pb-2 text-primary development-text">
                  DEVELOPMENT
                </div>
                <div className="col-md-4">
                  <img src={threedays} />
                </div>
              </div>

              <h3 className="pt-3 pb-3 text-content">
                Best web design trend of this...
              </h3>

              <div className="link-secondary blog-post-support">
                At Collax we specialize in designing, building, shipping and
                scaling beautifu. At Collax we specialize in designing,
                building, shipping and scaling beautifu
              </div>
            </div>

            <div className="col-lg-5 pt-5 pb-5">
              <div className="row">
                <div className="col-md-5 mb-3 pb-4">
                  <img
                    className="blog-image-small"
                    src={placeholdertwo}
                  
                  />
                </div>

                <div className="col-md-7 pb-3">
                  <div className="blog-small-wrap">
                    <div className="d-flex">
                      <div className="text-primary pb-3 development-text">
                        DEVELOPMENT
                      </div>
                      <div>
                        <img className="days-icon" src={threedaysago} />
                      </div>
                    </div>
                    <h3 className="support-slider">
                      Godaddy user flow solution for every individual
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3 pb-4">
                  <img className="blog-image-small" src={placeholdertwo} />
                </div>

                <div className="col-md-6 mb-3 right-text">
                  <div className="blog-small-wrap">
                  <div className="d-flex">
                    <div className="text-primary pb-3 development-text">
                      DEVELOPMENT
                    </div>
                    <div>
                      <img className="days-icon" src={threedaysago} />
                    </div>
                  </div>
                  <h3 className="support-slider">
                    Business solution for every individual
                  </h3>
                </div>
              </div>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3 pb-4">
                  <img className="blog-image-small" src={placeholdertwo} />
                </div>

                <div className="col-md-7 mb-3">
                  <div className="blog-small-wrap">
                  <div className="d-flex">
                    <div className="text-primary pb-3 development-text">
                      DEVELOPMENT
                    </div>
                    <div>
                      <img className="days-icon" src={threedaysago} />
                    </div>
                  </div>
                  <h3 className="support-slider">
                    How to gain pro experience ar figma update version
                  </h3>
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
