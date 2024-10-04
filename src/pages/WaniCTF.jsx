import React from 'react'
import Nav from '../components/Nav';

const WaniCTF = () => {
  return (
    <>
      <Nav />
      <header>
        <h1 style={{ fontFamily: "pixelify sans", color: "lime" }}>
          GoogleCTF 2024 Writeups
        </h1>
      </header>
      <div className="container">
        <main>
          <section id="web-challenges" className="category">
            <h2>Web Exploitation</h2>
            <div className="challenges">
              <div
                className="challenge"
                style={{ background: "rgb(255, 221, 51)" }}
              >
                <h3>Bad_Worker</h3>
                <p>Beginner</p>
                <a href="#">Read</a>
              </div>
            </div>
          </section>

          <section id="web-challenges" className="category">
            <h2>Reversing</h2>
            <div className="challenges">
              <div
                className="challenge"
                style={{ background: "rgb(40, 167, 69)" }}
              >
                <h3>Lambda</h3>
                <p>Easy</p>
                <a href="#">Read</a>
              </div>
            </div>
          </section>

          <section id="crypto-challenges" className="category">
            <h2>Pentesting</h2>
            <div className="challenges">
              <div
                className="challenge"
                style={{ background: "rgb(220, 53, 69)" }}
              >
                <h3>nc</h3>
                <p>Hard</p>
                <a href="#">Read</a>
              </div>
            </div>
          </section>

          <section id="crypto-challenges" className="category">
            <h2>Cryptography</h2>
            <div className="challenges">
              <div
                className="challenge"
                style={{ background: "rgb(255, 221, 51)" }}
              >
                <h3>Begineers_rsa</h3>
                <p>Begineer</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(220, 53, 69)" }}
              >
                <h3>Replacement</h3>
                <p>Hard</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(255, 221, 51)" }}
              >
                <h3>Begineers_aes</h3>
                <p>Beginner</p>
                <a href="#">Read</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default WaniCTF