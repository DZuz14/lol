
import styles from "../../styles/Home/Career.module.css";
import classNames from 'classnames';






export default function Career() {
    return(
<div className="freelance">
<div className="container pt-5 pb-5">
  <div className="row">
    <div className={classNames('col-lg-6', 'text-center', styles.shape)}>
      <img src="/img/shape.png" />
    </div>

    <div className="col-lg-4">
      <div className="pt-5 pb-3 link-secondary"> <img className="pb-1" style={{ marginRight: 5 }} src="/img/ellipse.svg" /> O nama </div>
      <h2 className="pt-3 pb-5">
        Zašto da započnete freelance {" "} 
        <div className="d-inline-flex position-relative">
        <div style={{ zIndex: 2 }}> karijeru uz nas? </div>
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
      <div>
        <div className="career">
          <div className="d-flex">
            <div>
              <img src="/img/email.svg" />
            </div>
            <div className={styles.iconContent}>
              <h5 className="pb-3">Fast working process</h5>
              <p className="muted">
                At collax we specialize in designing, building, shipping
                and scaling beautifu.
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div>
              <img src="/img/email.svg" />
            </div>

            <div className={styles.iconContent}>
              <h5 className="pb-3">Dedicated team</h5>

              <p className="muted">
                At collax we specialize in designing, building, shipping
                and scaling beautifu.
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div>
              <img src="/img/email.svg" />
            </div>

            <div className={styles.iconContent}>
              <h5 className="pb-3">24/7 hours support</h5>

              <p className="muted pb-5">
                At collax we specialize in designing, building, shipping
                and scaling beautifu.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    </div>
</div>
    )
};