import styles from "../../styles/Home/PopularBlog.module.css";
import classNames from "classnames";


export default function BlogPost() {
  return (
    <section>
      <div className={styles.popularBlog}>
        <div className="container pt-5">
         
            <div className="col-lg-1"></div>

            <div className="text-center link-secondary pt-5 pb-4"> <img className={'pb-1'} style={{ marginRight: 5 }} src="/img/ellipse.svg" />
              Blog Post
            </div>

            <h2 className={classNames('pb-5', 'text-center', 'justify-content', styles.blogHeader)}>
              Popular {" "}
              <div className="d-inline-flex position-relative text-center">
              <div style={{ zIndex: 2 }}> blog post </div>
              <img
                  width={200}
                  src="/img/line.svg"
                  style={{
                    position: "absolute",
                    bottom: 5,

                    left: 2,
                  }}
                />
              </div>
            </h2>
            <div className="row">
            <div className="col-lg-7 pt-5 pb-5 placeholder">
              <img
                className={styles.blogImageLarge}
                src="/img/placeholder.png"
                alt="placeholder"
              />

              <div className="row mt-3">
                <div className={classNames('col-md-4', 'pb-2', 'text-primary', styles.developmentText)}>
                  DEVELOPMENT
                </div>
                <div className="col-md-4">
                  <img src="/img/threedaysago.svg" />
                </div>
              </div>

              <h3 className={classNames('pt-3', 'pb-3', styles.textContent)}>
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
                    className={styles.blogImageSmall}
                    src="/img/placeholdertwo.png"
                  
                  />
                </div>

                <div className="col-md-7 pb-3">
                  <div className="blog-small-wrap">
                    <div className="d-flex">
                      <div className={classNames('text-primary', 'pb-3', styles.developmentText)}>
                        DEVELOPMENT
                      </div>
                      <div>
                        <img className={styles.daysIcon} src="/img/threedaysago.svg" />
                      </div>
                    </div>
                    <h3 className={styles.supportSlider}>
                      Godaddy user flow solution for every individual
                    </h3>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3 pb-4">
                  <img className={styles.blogImageSmall} src="/img/placeholdertwo.png" />
                </div>

                <div className="col-md-6 mb-3 right-text">
                  <div className={styles.blogSmallWrap}>
                  <div className="d-flex">
                    <div className={classNames('text-primary', 'pb-3', styles.developmentText)}>
                      DEVELOPMENT
                    </div>
                    <div>
                      <img className={styles.daysIcon} src="/img/threedaysago.svg" />
                    </div>
                  </div>
                  <h3 className={styles.supportSlider}>
                    Business solution for every individual
                  </h3>
                </div>
              </div>
              </div>

              <div className="row">
                <div className="col-md-5 mb-3 pb-4">
                  <img className={styles.blogImageSmall} src="/img/placeholdertwo.png" />
                </div>

                <div className="col-md-7 mb-3">
                  <div className={styles.blogSmallWrap}>
                  <div className="d-flex">
                    <div className={classNames('text-primary', 'pb-3', styles.developmentText)}>
                      DEVELOPMENT
                    </div>
                    <div>
                      <img className={styles.daysIcon} src="/img/threedaysago.svg" />
                    </div>
                  </div>
                  <h3 className={styles.supportSlider}>
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
