import React from 'react'

const Gods = () => {
    const imageUrls = [
        "/images/v1per.png",
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
export default Gods