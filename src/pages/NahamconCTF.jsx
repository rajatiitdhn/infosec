import React from 'react'
import Nav from '../components/Nav';
import { NavLink } from 'react-router-dom';

const NahamconCTF = () => {
  return (
    <>
      <Nav />
      <header>
        <h1 style={{ fontFamily: "pixelify sans", color: "lime" }}>
          NahamconCTF 2024 Writeups
        </h1>
      </header>
      <div className="container">
        <main>
          <section id="web-challenges" className="category">
            <h2>Web Exploitation</h2>
            <div className="challenges">
              <div
                className="challenge"
                style={{ background: "rgb(0, 123, 255)" }}
              >
                <h3>Stickers</h3>
                <p>Intermediate</p>
                <NavLink to="/solution/EmptyLS">Read</NavLink>
              </div>
            </div>
          </section>
          
          <section id="web-challenges" className="category">
            <h2>Reversing</h2>
            <div className="challenges">
              <div
                className="challenge"
                style={{ background: "rgb(255, 221, 51)" }}
              >
                <h3>MayHem</h3>
                <p>Beginner</p>
                <a href="#">Read</a>
              </div>
            </div>
          </section>

          <section id="crypto-challenges" className="category">
            <h2>Forensics</h2>
            <div className="challenges">
              <div
                className="challenge"
                style={{ background: "rgb(255, 221, 51)" }}
              >
                <h3>Perfectly Disinfected</h3>
                <p>beginner</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(40, 167, 69)" }}
              >
                <h3>Raided</h3>
                <p>Easy</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(220, 53, 69)" }}
              >
                <h3>fetch</h3>
                <p>Hard</p>
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
                <h3>No Big Deal</h3>
                <p>Hard</p>
                <a href="#">Read</a>
              </div>
            </div>
          </section>

          <section id="crypto-challenges" className="category">
            <h2>Osint</h2>
            <div className="challenges">
              <div
                className="challenge"
                style={{ background: "rgb(255, 221, 51)" }}
              >
                <h3>Geosint</h3>
                <p>Beginner</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(220, 53, 69)" }}
              >
                <h3>Zoombie</h3>
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
                style={{ background: "rgb(40, 167, 69)" }}
              >
                <h3>RSA Intro</h3>
                <p>Easy</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(0, 123, 255)" }}
              >
                <h3>Signed Jeopardy</h3>
                <p>Intermediate</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(255, 221, 51)" }}
              >
                <h3>ForgeMe 1</h3>
                <p>Beginner</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(220, 53, 69)" }}
              >
                <h3>ForgeMe 2</h3>
                <p>Hard</p>
                <a href="#">Read</a>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default NahamconCTF