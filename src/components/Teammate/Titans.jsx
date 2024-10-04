import React from 'react'

const Titans = () => {
    const imageUrls = [
        "/images/OIP (3).jpeg",
        "/images/OIP (2).jpeg",
        "/images/OIP (1).jpeg",
        "/images/OIP.jpeg",
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


export default Titans