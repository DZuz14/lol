import jasminMaric from "../public/img/maric.png";
import "../styles/Home/Confessionals.module.css";


export default function Confessionals() {
    return(
<div className="confessionals">
<div className="container 4 pt-5">
  <div className="row">
    <div className="col-lg-6 text-center conf">
      <img src={jasminMaric} alt="confessional" />
    </div>

    <div className="col-lg-6 conf d-flex flex-column justify-content-center">
      <p>
        Wow. What a great experience with this copywriter. collax is a
        very talented digital agnecy. yesterday. I got his first Email
        that was amazing... talent and wonderfull design skills
      </p>

      <div className="d-flex justify-content-between pt-5">
        <div>
          <div className="font-weight-bold name">Floyd Miles</div>
          <div className="text-secondary text-uppercase title">
            Product designer (Amazon){" "}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  </div>
</div>
</div>
    )
};
