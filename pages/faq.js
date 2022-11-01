import styles from "../styles/Services/Services.module.css";
import classNames from "classnames";

export default function faq() {
  return (
    <div>
      <section className="padding-lg secondary">
        
        <div className="home container pt-5">
          <div className="row">
            <div className="col-sm-7">
              <h1 className={classNames("align-items-center", styles.h1)}>
                Ask question
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
            </div>

            <div className="col-sm-5">
              <img
                className="img-fluid"
                src="/img/faq-placeholder.png"
                style={{ marginTop: 60 }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
