/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */

import Service from "../components/Home/Service";
import Career from "../components/Home/Career";

import classNames from "classnames";
import styles from "../styles/Home/home.module.css";
import Confessionals from "../components/Home/Confessionals";
import Newsletter from "../components/Home/Newsletter";
import PopularBlog from "../components/Home/PopularBlog";

export default function Home() {
  return (
    <div>
      <section className={styles.Home}>
        <img
          src="/img/sprinkles.png"
          height={62}
          className="position-absolute"
          style={{ left: 50, top: 250 }}
        />

        <div className="home container pt-5">
          <div className="row">
            <div className="col-8">
              <h1 className={styles.h1}>
                Neki catchy title{" "}
                <div className="d-inline-flex position-relative">
                  <div>za ljude</div>
                  <img
                    src="/img/line.svg"
                    style={{
                      position: "absolute",
                      bottom: 15,
                      zIndex: -99,
                      left: 2,
                    }}
                  />
                </div>
                {" "} koji hoce da freelancejau
              </h1>

              <p className="pt-2 pb-4 muted">
                {" "}
                At collax we specialize in designing, building, shipping and
                scaling beautiful, usable products with blazing-fast efficiency{" "}
              </p>
              <button className="btn btn-primary btn-lg pb">Pridruzi se</button>

              <div
                className={classNames(
                  "d-flex",
                  "flex-row",
                  "position-relative",
                  styles.socialIcons
                )}
              >
                <img
                  className="position-absolute"
                  src="/img/swirl-arrow.png"
                  height={40}
                  style={{ left: -170, top: 120 }}
                />

                <div class="p-2">
                  <img src="/img/facebook.png" alt="Facebook" height={15} />
                </div>

                <div class="p-2">
                  <img src="/img/twitter.png" alt="Twitter" height={15} />
                </div>

                <div class="p-2">
                  <img src="/img/youtube.png" alt="Youtube" height={15} />
                </div>
              </div>
            </div>

            <div className="col-4">
              <img
                className="img"
                src="/img/home-shape.png"
                style={{ marginTop: 60 }}
              />
            </div>
          </div>
        </div>
      </section>
      <Service />
      <Career />
      <Confessionals />
      <Newsletter />
      <PopularBlog />
    </div>
  );
}
