import styles from "./certificate.module.css";
import bannerElement1 from "../media/CerElement.png";
import sign from "../media/sign.png";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";

const Certificate = () => {

  const pdfRef = useRef();

  const downloadPNG = () => {
    const input = pdfRef.current;

    html2canvas(input, {
      scale: 2, // To ensure better quality, adjust the scale as needed
      width: 900, // Width of the canvas
      height: 600, // Height of the canvas
    }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.download = "certificate.png";
      link.href = imgData;
      link.click();
    });
  };

  const cartDataCertificate = localStorage.getItem("certificate")
  const cartDataName = localStorage.getItem("userName")
  let date = new Date().toLocaleDateString('de-DE');

  return (
    <div >
    <div ref={pdfRef} id={styles.certificate}>
      <div >
        <h1>CERTIFICATE</h1>
        <h3>OF ACHIEVEMENT</h3>
        <h4>PROUDLY PRESENT TO</h4>
        <input type="text" value={cartDataName}/>
        <p style={{margin: "1px auto 10px", fontSize: "1.2rem", fontWeight: "bold"}}>{cartDataCertificate}</p>
        <p>
          For successfully completing the STUDI-HUB's online course, we are
          certifying the candidate with a certificate of Excellence in the
          course.
        </p>
        <div>
          <div>
            <div style={{paddingTop: "40px"}}>{date}</div>
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
    <button onClick={downloadPNG} id={styles.btn}>Download Certificate</button>
    </div>
  );
};

export default Certificate;
