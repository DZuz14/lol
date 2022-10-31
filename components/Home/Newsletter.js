import styles from "../../styles/Home/Newsletter.module.css";
import classNames from "classnames";

export default function Newsletter() {
  return (
    <div className={styles.newsletter}>
      <div className="container">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-6 pt-5">
            <div className="pt-5 pb-3 link-secondary text-white">
              {" "}
              <img
                className="pb-1"
                style={{ marginRight: 5 }}
                src="/img/ellipse.svg"
              />
              Get every update
            </div>

            <h2 className="pt-3 pb-5 text-white">
              Subsribe na newsletter i prvi dobij nove vijesti bla bla
            </h2>

            <div
              className={classNames(
                "d-flex",
                "justify-content-between",
                styles.subscribe
              )}
            >
              <input
                className="form-control"
                type="email"
                placeholder="Enter your email"
              />
              <button className="subscribe-button">Subcribe</button>
            </div>
          </div>

          <div className="col-lg-4 pt-5 pb-5 newsletter text-center img">
            <img
              className={styles.newsletterImg}
              src="/img/newsletter.png"
              alt="shape"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
