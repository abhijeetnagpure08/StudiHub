import styles from "./certificate.module.css";
import bannerElement1 from "../media/CerElement.png";
import sign from "../media/sign.png";

const Certificate = () => {

  const cartDataCertificate = localStorage.getItem("certificate")
  const cartDataName = localStorage.getItem("userName")

  return (
    <div id={styles.certificate}>
      <div>
        <h1>CERTIFICATE</h1>
        <h3>OF ACHIEVEMENT</h3>
        <h4>PROUDLY PRESENT TO</h4>
        <input type="text" value={cartDataName}/>
        <h5>{cartDataCertificate}</h5>
        <p>
          For successfully completing the STUDI-HUB's online course, we are
          certifying the candidate with a certificate of Excellence in the
          course.
        </p>
        <div>
          <div>
            <div></div>
            <p>DATE</p>
          </div>
          <img src={bannerElement1} alt="" />
          <div>
            <div>
              <img src={sign} alt="" />
            </div>
            <p>SIGNATURE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
