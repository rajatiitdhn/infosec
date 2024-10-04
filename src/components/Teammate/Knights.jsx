import React from 'react'

const Knights = () => {
    const imageUrls = [
        "/images/OIP (21).jpeg",
        "/images/OIP (25).jpeg",
        "/images/OIP (20).jpeg",
        "/images/OIP (23).jpeg",
        "/images/OIP (24).jpeg",
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

export default Knights