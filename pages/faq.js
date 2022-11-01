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
          <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Is my data safe?</Accordion.Header>
              <Accordion.Body>
                One of the best designers that turns the client pain points and
                requests into magnificent designs. Aware of all the aspect that
                should be considered to fulfill the requirements in high-quality
                implementation as an expected end result. Has patience while
                receiving and confirming the requirements, conducting the wire
                frames and style guides and also creates great portoflios for
                their projects.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                How does the 30-day free software trial work?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                What makes LessAccounting better than the rest?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                What makes LessAccounting better than the rest?
              </Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </section>
      </div>
    </div>
  );
}
