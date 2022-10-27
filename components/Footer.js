import Styles from "../styles/Footer.module.css";
import marketmakers from "../public/img/marketmakers-sponzor.png";
import youtube from "../public/img/youtube-icon.svg";
import twitter from "../public/img/twitter-icon.svg";
import skype from "../public/img/skype-icon.svg";
import facebook from "../public/img/facebook-icon.svg";
import betastudio from "../public/img/betastudio_logo.svg";
import swiss from "../public/img/swiss-sponzor.png";
import footerbackground from "../public/img/footerbg.svg";



/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import classNames from 'classnames';
import styles from '../styles/Footer.module.css';

export default function Footer() {
  return (
    <div className={styles.footer}>
      <footer className="pb-4">
        <div className="container">
          <div className="row">
            {/* Left */}
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-6">
                  <h5 className="pb-5">O nama</h5>

                  <p className="pt-4 text-secondary pb-3">
                    A new way to make the payments easy, reliable and 100%
                    secure. claritatem itamconse quat. Exerci tation
                  </p>

                  <div className={styles.footerIcons}>
                    <img src="/img/youtube-icon.svg" />
                    <img src="/img/twitter-icon.svg" />
                    <img src="/img/facebook-icon.svg" />
                    <img src="/img/skype-icon.svg" />
                  </div>
                </div>

                <div className={classNames('col-md-6', styles.learningList)}>
                  <h5 className="pb-5">Learning</h5>

                  <ul className="text-secondary">
                    <li>Learn Collax</li>
                    <li>Manuals</li>
                    <li>Tutorials</li>
                    <li>Communities</li>
                    <li>Free Class</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Right/Sponsors */}
            <div className="col-md-6 d-flex justify-content-end">
              <div className="row">
                <div className="col-md-12 d-flex justify-content-end pb2">
                  <img
                    className="align-self-end pb-5 betastudio-sponsor"
                    src="/img/betastudio_logo.svg"
                  />
                </div>

                <div className="col-md-6 d-flex justify-content-end">
                  <img
                    className="align-self-end pb-5 swiss-sponsor"
                    src="/img/swiss-sponzor.png"
                  />
                </div>

                <div className="col-md-6 d-flex justify-content-end">
                  <img
                    className="align-self-end pb-5 marketmakers-sponsor"
                    src="/img/marketmakers-sponzor.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Separator */}
        <div className="container pt-5 pb-3">
          <div className={styles.separator} />
        </div>

        {/* Bottom */}
        <div className="container pb-5">
          <div className="row">
            <div className="col-md-7">
              Copyright © 2020 Freelance.ba by betastudio, tershouse &
              MarketMakers. Sva prava zadržana.
            </div>

            <div className="col-md-5">
              <ul className="justify-content-end">
                <div className={classNames('d-flex', styles.footerList)}>
                  <li>Terms and conditions</li>
                  <li>Privacy policy</li>
                  <li>Login/Signup</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

