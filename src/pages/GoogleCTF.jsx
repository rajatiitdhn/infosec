import React from "react";
import Nav from "../components/Nav";
import "./challs.css";
import Solution from "../ctfsolutions/Solution";
import { NavLink } from "react-router-dom";
const GoogleCTF = () => {
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
                <h3>Empty LS</h3>
                <p>Beginner</p>
               <NavLink to="/solution/EmptyLS">Read</NavLink>
              </div>
            </div>
          </section>

          <section id="web-challenges" className="category">
            <h2>Reversing</h2>
            <div className="challenges">
              <div
                className="challenge"
                style={{ background: "rgb(0, 123, 255)" }}
              >
                <h3>Polymorph</h3>
                <p>Intermediate</p>
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
                <h3>cpp</h3>
                <p>Beginner</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(40, 167, 69)" }}
              >
                <h3>AdSpam</h3>
                <p>Easy</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(220, 53, 69)" }}
              >
                <h3>Hexagon</h3>
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
                <h3>Compression</h3>
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
                <h3>FileStore</h3>
                <p>Beginner</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(220, 53, 69)" }}
              >
                <h3>Graiders Of Corruption</h3>
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
                <h3>Pythia</h3>
                <p>Easy</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(0, 123, 255)" }}
              >
                <h3>Story</h3>
                <p>Intermediate</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(220, 53, 69)" }}
              >
                <h3>H1</h3>
                <p>Hard</p>
                <a href="#">Read</a>
              </div>
              <div
                className="challenge"
                style={{ background: "rgb(255, 221, 51)" }}
              >
                <h3>Tiramisu</h3>
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

export default GoogleCTF;
