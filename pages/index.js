/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import Newsletter from "../components/home/Newsletter";
import Confessionals from "../components/home/Confessionals";
import Career from "../components/home/Career";
import Services from "../components/Service";
import BlogPost from "../components/PopularBlog";
import Footer from "../components/Footer.js";


import facebook from "../public/img/facebook.png";
import twitter from "../public/img/twitter.png";
import youtube from "../public/img/youtube.png";
import arrow from "../public/img/arrow.svg";
import list from "../public/img/list.svg";
import shape from "../public/img/home-shape.png";
import line from "../public/img/line.svg";
import sprinkles from "../public/img/sprinkles.png";
import swirl from "../public/img/swirl-arrow.png"

import "../css/home.css";

export default function Home() {
  return (
    <section>
    <img
      src={sprinkles}
      height={62}
      className="position-absolute"
      style={{ left: 50, top: 250 }}
    />

    <div className="home container pt-5">
      <div className="row">
    

        <div className="col-6">
          <h1>
            Neki catchy title{' '}
            <div className="d-inline-flex position-relative">
              <div>za ljude</div>
              <img
                src={line}
                style={{
                  position: 'absolute',
                  bottom: 15,
                  zIndex: -99,
                  left: 2,
                }}
              />
            </div>
            koji hoce da freelancejau
          </h1>

          <p className="pt-2 pb-4 muted"> Lorem ipsum nesto se pise </p>
          <button className="btn btn-primary btn-lg pb"> Pridruzi se </button>

          <div class="d-flex flex-row social-icons position-relative">
            <img
              className="position-absolute"
              src={swirl}
              height={40}
              style={{ left: -170, top: 120 }}
            />

            <div class="p-2">
              <img src={facebook} alt="Facebook" height={15} />{' '}
            </div>
            <div class="p-2">
              <img src={twitter} alt="Twitter" height={15} />{' '}
            </div>
            <div class="p-2">
              <img src={youtube} alt="Youtube" height={15} />{' '}
            </div>
          </div>
        </div>
        <div className="col-1"></div>

        <div className="col-5">
          <img
            className="img-fluid"
            src={shape}
            style={{ marginTop: 60 }}
          />
        </div>
      </div>
    </div>



      <Services />
      <Career />
      <Confessionals />
      <Newsletter />
      <BlogPost />
      <Footer />
    </section>
  )
 };
