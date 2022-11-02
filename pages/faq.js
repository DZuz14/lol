import styles from "../styles/Faq.module.css";
import Accordion from "react-bootstrap/Accordion";

import classNames from "classnames";

export default function faq() {
  return (
    <div>
      <section className="padding-lg secondary">
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-7">
              <h1 className={classNames("align-items-center", styles.h1)}>
                Ask a question
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
      <div>
        <section className="padding-lg">
          <div
            className={classNames("mx-auto", styles.accordion)}
            id="accordionExample"
          >
            <div className={styles.firstCard}>
              <div className="card-header" id="headingOne">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Is my data safe?
                  </button>
                </h2>
              </div>

              <div
                id="collapseOne"
                className="collapse show"
                aria-labelledby="headingOne"
                data-parent="#accordionExample"
              >
                <div className="card-body pb-5 pt-5">
                  One of the best designers that turns the client pain points
                  and requests into magnificent designs. Aware of all the aspect
                  that should be considered to fulfill the requirements in
                  high-quality implementation as an expected end result. Has
                  patience while receiving and confirming the requirements,
                  conducting the wire frames and style guides and also creates
                  great portoflios for their projects.
                </div>
              </div>
            </div>
            <div className={styles.card}>
              <div className="card-header" id="headingTwo">
                <h2 className="mb-0">
                  <button
                    className="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    How does the 30-day free software trial work?
                  </button>
                </h2>
              </div>
              <div
                id="collapseTwo"
                class="collapse"
                aria-labelledby="headingTwo"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  Some placeholder content for the second accordion panel. This
                  panel is hidden by default.
                </div>
              </div>
            </div>
            <div class={styles.card}>
              <div class="card-header" id="headingThree">
                <h2 class="mb-0">
                  <button
                    class="btn btn-block text-left collapsed"
                    type="button"
                    data-toggle="collapse"
                    data-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    What happens after my free trial?
                  </button>
                </h2>
              </div>
              <div
                id="collapseThree"
                class="collapse"
                aria-labelledby="headingThree"
                data-parent="#accordionExample"
              >
                <div class="card-body">
                  And lastly, the placeholder content for the third and final
                  accordion panel. This panel is hidden by default.
                </div>
              </div>
              <div class={styles.card}>
                <div class="card-header" id="headingFour">
                  <h2 class="mb-0">
                    <button
                      class="btn btn-block text-left collapsed"
                      type="button"
                      data-toggle="collapse"
                      data-target="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseFour"
                    >
                      What makes LessAccounting better than the rest?
                    </button>
                  </h2>
                </div>

                <div
                  id="collapseFour"
                  class="collapse"
                  aria-labelledby="headingFour"
                  data-parent="#accordionExample"
                >
                  <div class="card-body">
                    Some placeholder content for the first accordion panel. This
                    panel is shown by default, thanks to the <code>.show</code>{" "}
                    class.
                  </div>
                </div>

                <div class={styles.card}>
                  <div class="card-header" id="headingFive">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseFive"
                        aria-expanded="true"
                        aria-controls="collapseFive"
                      >
                        Is my data safe?
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseFive"
                    class="collapse"
                    aria-labelledby="headingFivw"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Some placeholder content for the first accordion panel.
                      This panel is shown by default, thanks to the{" "}
                      <code>.show</code> class.
                    </div>
                  </div>
                </div>

                <div class={styles.card}>
                  <div class="card-header" id="headingSix">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSix"
                        aria-expanded="true"
                        aria-controls="collapseSix"
                      >
                        How does the 30-day free software trial work?
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseSix"
                    class="collapse"
                    aria-labelledby="headingSix"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Some placeholder content for the first accordion panel.
                      This panel is shown by default, thanks to the{" "}
                      <code>.show</code> class.
                    </div>
                  </div>
                </div>

                <div class={styles.card}>
                  <div class="card-header" id="headingSeven">
                    <h2 class="mb-0">
                      <button
                        class="btn btn-block text-left collapsed"
                        type="button"
                        data-toggle="collapse"
                        data-target="#collapseSeven"
                        aria-expanded="true"
                        aria-controls="collapseSeven"
                      >
                        What happens after my free trial?
                      </button>
                    </h2>
                  </div>

                  <div
                    id="collapseSeven"
                    class="collapse"
                    aria-labelledby="headingSeven"
                    data-parent="#accordionExample"
                  >
                    <div class="card-body">
                      Some placeholder content for the first accordion panel.
                      This panel is shown by default, thanks to the{" "}
                      <code>.show</code> class.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
