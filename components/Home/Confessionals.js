import styles from "../../styles/Home/Confessionals.module.css";
import classNames from 'classnames';





export default function Confessionals() {
    return(
<div className={styles.confessionals}>
<div className="container 4 pt-5">
  <div className="row">
  
    <div className={classNames('col-lg-6', 'text-center', styles.confessionalText)}>
      <img src="/img/maric.png" alt="confessional" />
    </div>
  


    <div className={classNames('col-lg-6', 'd-flex', 'flex-column', 'justify-content-center', styles.confessionalText)}>
      <p>
        Wow. What a great experience with this copywriter. collax is a
        very talented digital agnecy. yesterday. I got his first Email
        that was amazing... talent and wonderfull design skills
      </p>

      <div className="d-flex justify-content-between pt-5">
        <div>
          <div className={classNames('font-weight-bold', styles.name)}>Floyd Miles</div>
          <div className={classNames('text-secondary', 'text-uppercase', styles.title)}>
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
