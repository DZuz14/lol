import styles from "../styles/Services/Services.module.css";
import classNames from "classnames";

export default function Services() {
  return (
    <div>
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
            </div>

            <div className="col-sm-5">
              <img
                className="img-fluid"
                src="/img/servicesThumbnail.png"
                style={{ marginTop: 60 }}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="padding-lg">
        <div className="container">
          <div className={styles.tabsArea}>
            <button className={styles.tabButton}>
              Coworking & office prostori
            </button>
            <button className={styles.tabButtonOpaque}>
              Virtual office & poslovna adresa
            </button>
          </div>
        </div>
        <div className="container">
          <div className={classNames("row", styles.testimonial)}>
            <div className="col-md-9">
              <div className={styles.companyIcon}>
                <img src="/img/amazon-icon.svg" alt="company-icon" />
              </div>

              <p>
                One of the best designers that turns the client pain points and
                requests into magnificent designs. Aware of all the aspect that
                should be considered to fulfill the requirements in high-quality
                implementation as an expected end result. Has patience while
                receiving and confirming the requirements, conducting{" "}
              </p>
              <div className={classNames("d-flex", styles.reviewerIcon)}>
                <img src="/img/review-icon.svg" alt="reviewer-icon" />
                <div>
                  <div
                    className={classNames(
                      "font-weight-bold",
                      "pl-3",
                      styles.name
                    )}
                  >
                    Jane Cooper
                  </div>
                  <div
                    className={classNames(
                      "text-secondary",
                      "text-uppercase",
                      "pl-3",
                      styles.title
                    )}
                  >
                    Product designer (Amazon){" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <button className={styles.perkButton}>Apliciraj za perk</button>
            </div>
          </div>

          <div className={classNames("row", styles.testimonial)}>
            <div className="col-md-9">
              <div className={styles.companyIcon}>
                <img src="/img/amazon-icon.svg" alt="company-icon" />
              </div>

              <p>
                One of the best designers that turns the client pain points and
                requests into magnificent designs. Aware of all the aspect that
                should be considered to fulfill the requirements in high-quality
                implementation as an expected end result. Has patience while
                receiving and confirming the requirements, conducting{" "}
              </p>
              <div className={classNames("d-flex", styles.reviewerIcon)}>
                <img src="/img/review-icon.svg" alt="reviewer-icon" />
                <div>
                  <div
                    className={classNames(
                      "font-weight-bold",
                      "pl-3",
                      styles.name
                    )}
                  >
                    Jane Cooper
                  </div>
                  <div
                    className={classNames(
                      "text-secondary",
                      "text-uppercase",
                      "pl-3",
                      styles.title
                    )}
                  >
                    Product designer (Amazon){" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <button className={styles.perkButton}>Apliciraj za perk</button>
            </div>
          </div>
          <div className={classNames("row", styles.testimonial)}>
            <div className="col-md-9">
              <div className={styles.companyIcon}>
                <img src="/img/amazon-icon.svg" alt="company-icon" />
              </div>

              <p>
                One of the best designers that turns the client pain points and
                requests into magnificent designs. Aware of all the aspect that
                should be considered to fulfill the requirements in high-quality
                implementation as an expected end result. Has patience while
                receiving and confirming the requirements, conducting{" "}
              </p>
              <div className={classNames("d-flex", styles.reviewerIcon)}>
                <img src="/img/review-icon.svg" alt="reviewer-icon" />
                <div>
                  <div
                    className={classNames(
                      "font-weight-bold",
                      "pl-3",
                      styles.name
                    )}
                  >
                    Jane Cooper
                  </div>
                  <div
                    className={classNames(
                      "text-secondary",
                      "text-uppercase",
                      "pl-3",
                      styles.title
                    )}
                  >
                    Product designer (Amazon){" "}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 d-flex align-items-center justify-content-center">
              <button className={styles.perkButton}>Apliciraj za perk</button>
            </div>
          </div>
        </div>
      </section>

      <section className={classNames("padding-lg", styles.bottomPage)}>
        <div className="text-center">
          <div className="container">
            <div
              className={classNames("text-center", "pb-5", styles.bottomText)}
            >
              <h1>Sugeriši partnera za freelance alijansu!</h1>

              <div>
                <p className="text-center pt-5">
                  We had the pleasure of being a partner for companies from
                  markets like Fintech, Health, Government, Security, Big Data
                  and many more.
                </p>
              </div>
            </div>
          </div>

          <button
            className={classNames(
              "justify-content-center",
              "text-center",
              styles.perkButton
            )}
          >
            Estimate-Project
          </button>
        </div>
      </section>
    </div>
  );
}
