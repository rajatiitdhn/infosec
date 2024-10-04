import React from "react";
const Apprentices = () => {
  const imageUrls = [
    "/images/OIP (17).jpeg",
    "/images/OIP (4).jpeg",
    "/images/OIP (5).jpeg",
    "/images/OIP (6).jpeg",
    "/images/OIP (7).jpeg",
    "/images/OIP (8).jpeg",
    "/images/OIP (9).jpeg",
    "/images/OIP (10).jpeg",
  ];

  return (
    <div className="teammates">
      {imageUrls.map((url, index) => { return  (
        <div key={index} className="image-box" style={{ marginTop: "40px" }}>
          <img src={url} />
          <div className="hover-content">
            <a href="#">
              <img src="/images/instagram icon.png" alt="Instagram" />
            </a>
            <a href="#">
              <img src="/images/github icon.png" alt="Github" />
            </a>
            <a href="#">
              <img src="/images/linkedin icon.png" alt="LinkedIn" />
            </a>
          </div>
        </div>
      )})}
    </div>
  );
};

export default Apprentices;
