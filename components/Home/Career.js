import email from "../public/img/email.svg";
import shape from "../public/img/shape.png"
import line from "../public/img/line.svg";
import ellipse from "../public/img/ellipse.svg";

import "../styles/Home/Career.module.css";


export default function Career() {
    return(
<div className="freelance">
<div className="container pt-5 pb-5">
  <div className="row">
    <div className="col-lg-6 text-center shape">
      <img src={shape}></img>
    </div>

    <div className="col-lg-4">
      <div className="pt-5 pb-3 link-secondary"> <img className="pb-1" style={{ marginRight: 5 }} src={ellipse} /> O nama </div>
      <h2 className="pt-3 pb-5">
        Zašto da započnete freelance {" "} 
        <div className="d-inline-flex position-relative">
        <div style={{ zIndex: 2 }}> karijeru uz nas? </div>
        <img
                  width={200}
                  src={line}
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
              <img src={email} />
            </div>
            <div className="text-content">
              <h5 className="pb-3">Fast working process</h5>
              <p className="muted">
                At collax we specialize in designing, building, shipping
                and scaling beautifu.
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div>
              <img src={email} />
            </div>

            <div className="text-content">
              <h5 className="pb-3">Dedicated team</h5>

              <p className="muted">
                At collax we specialize in designing, building, shipping
                and scaling beautifu.
              </p>
            </div>
          </div>

          <div className="d-flex">
            <div>
              <img src={email} />
            </div>

            <div className="text-content">
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