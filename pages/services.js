import styles from "../styles/Home/Services.module.css";
import classNames from "classnames";

export default function Services() {
  return (
    <section className="padding-lg secondary">
      <img
        src="/img/sprinkles.png"
        height={62}
        className="position-absolute"
        style={{ left: 70, top: 250 }}
      />
      <div className="home container pt-5">
        <div className="row">
          <div className="col-sm-7">
            <h1 className={classNames("align-items-center", styles.h1)}>
              Izaberi svoje usluge
            </h1>

            <button
              className={classNames(
                "btn",
                "btn-lg",
                "mt-5",
                styles.servicesButton
              )}
            >
              {" "}
              Let's work together{" "}
            </button>
            <div className="col-sm-5">
              <img
                className="d-inline-flex align-items-center flex-row"
                src="/img/servicesThumbnail.png"
                style={{ marginTop: 60 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
