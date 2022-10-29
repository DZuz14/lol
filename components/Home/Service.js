import styles from "../../styles/Home/Service.module.css";
import classNames from "classnames";

export default function Service() {
  return (
    <div className={styles.homeServices}>
      <div className="container 2">
        <div className="row">
          <div className="col">
            <p className="support-text text-center muted">
              At collax we specialize in designing, building, shipping and
              scaling beautiful, usable products with blazing-fast efficiency
            </p>
          </div>
        </div>

        <div className={classNames("text-center", styles.socialIcons)}>
          <div className="row">
            <div class="d-flex justify-content-center">
              <div className="p-4">
                {" "}
                <img
                  src="/img/partner.png"
                  alt="partner"
                  height={30}
                ></img>{" "}
              </div>
              <div className="p-4">
                {" "}
                <img
                  src="/img/partner.png"
                  alt="partner"
                  height={30}
                ></img>{" "}
              </div>
              <div className="p-4">
                {" "}
                <img
                  src="/img/partner.png"
                  alt="partner"
                  height={30}
                ></img>{" "}
              </div>
              <div className="p-4">
                {" "}
                <img
                  src="/img/partner.png"
                  alt="partner"
                  height={30}
                ></img>{" "}
              </div>
              <div className="p-4">
                {" "}
                <img
                  src="/img/partner.png"
                  alt="partner"
                  height={30}
                ></img>{" "}
              </div>
              <div className="p-4">
                {" "}
                <img
                  src="/img/partner.png"
                  alt="partner"
                  height={30}
                ></img>{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="text-center">
            <div className="pt-5 pb-3 link-secondary">
              {" "}
              <img
                className="pb-1"
                style={{ marginRight: 5 }}
                src="/img/ellipse.svg"
              />{" "}
              Our services{" "}
            </div>
            <h2 className="pt-3 pb-5">
              Managing your business with our{" "}
              <div className="d-inline-flex position-relative">
                <div style={{ zIndex: 2 }}> best service </div>
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
          </div>
        </div>

        <div className={classNames("row", styles.cardSection)}>
          <div className="col-md-3">
            <div>
              <img src="/img/email.svg" />
              <p className="pt-4"> Coworking i office prostor </p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <img src="/img/email.svg" />
              <p className="pt-4">Virtual office i poslovna adresa</p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <img src="/img/email.svg" />
              <p className="pt-4">Matchmaking za poslove</p>
            </div>
          </div>
          <div className="col-md-3">
            <div>
              <img src="/img/email.svg" />
              <p className="pt-4">Bankarske usluge i konsultacije</p>
            </div>
          </div>
        </div>

        <div className={classNames("row", styles.cardSection)}>
          <div className="col-md-3">
            <div>
              <img src="/img/email.svg" />
              <p className="pt-4">Softveri za administraciju</p>
            </div>
          </div>

          <div className="col-md-3">
            <div>
              <img src="/img/email.svg" />
              <p className="pt-4">Racunovodstvene usluge</p>
            </div>
          </div>

          <div className="col-md-3">
            <div>
              <img src="/img/email.svg" />
              <p className="pt-4">Usluge prevodjenja</p>
            </div>
          </div>

          <div className="col-md-3">
            <div className={styles.lastCard}>
              <img src="/img/arrow.svg" />
              <p className="pt-4 ">Vise ponuda</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
