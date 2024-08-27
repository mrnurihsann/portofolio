import React from "react";

import "./style/certificates.css";

const certificates = [
  {
    name: "DICODING",
    imgSrc: "assets/pw.png",
    description: "Certificate for Learning Basic Web Programming",
  },
  {
    name: "DICODING",
    imgSrc: "assets/AWS.png",
    description: "Certificate for Learning AWS Cloud Basics",
  },
  {
    name: "DICODING",
    imgSrc: "assets/js.png",
    description: "Certificate for Learning Basic JavaScript Programming",
  },
  {
    name: "MYSKILL",
    imgSrc: "assets/pivot.png",
    description: "Certificate for Mastering Pivot Tables",
  },
  {
    name: "MYSKILL",
    imgSrc: "assets/data.png",
    description: "Certificate in Data Analysis",
  },
  {
    name: "HIMPUNAN MAHASISWA INFORMATIKA",
    imgSrc: "assets/kulum.png",
    description:
      "Certificate for Introduction Web Developer for Career Opportunities",
  },
  {
    name: "HIMPUNAN MAHASISWA INFORMATIKA",
    imgSrc: "assets/talkshow.png",
    description:
      "Sertificate for Utilization of Artificial Intelligence in Society 5.0",
  },
  {
    name: "UNIVERSITAS TEKNOLOGI DIGITAL INDONESIA",
    imgSrc: "assets/kkn.png",
    description: "Certificate for Real Work Study",
  },
  {
    name: "BADAN EKSEKUTIF MAHASISWA",
    imgSrc: "assets/ppm.png",
    description: "Certificate for Persons in Charge of Community Service",
  },
  {
    name: "SANTRI KODING",
    imgSrc: "assets/vue.png",
    description: "FullStact JavaScript Developer With Express and Vue",
  },
  {
    name: "SANTRI KODING",
    imgSrc: "assets/react.png",
    description: "FullStact JavaScript Developer With Express and React",
  },
];

const Certificates = () => {
  return (
    <div>
      <div>
        <h1 style={{ textAlign: "center", margin: "20px 0" }}>
          I have received the certificate
        </h1>
        <div className="grid-container">
          {certificates.map((certificate, index) => (
            <div key={index} className="certificate-container">
              <img
                src={certificate.imgSrc}
                alt={certificate.name}
                className="certificate-image"
              />
              <div className="certificate-name">{certificate.name}</div>
              <div className="certificate-description">
                {certificate.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Certificates;
