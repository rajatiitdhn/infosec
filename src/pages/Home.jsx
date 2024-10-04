import React, { useEffect, useRef, useState } from 'react';
import NET from 'vanta/dist/vanta.net.min';
import * as THREE from 'three';
import Nav from '../components/Nav';
import Achievements from '../components/Achievements';
import Writeup from '../components/Writeup';
import Apprentices from '../components/Teammate/Apprentices';
import Knights from '../components/Teammate/Knights';
import Titans from '../components/Teammate/Titans';
import Legends from '../components/Teammate/Legends';
import Gods from '../components/Teammate/Gods';
const Home = () => {
    const [vantaInitialized, setVantaInitialized] = useState(null);
    const vantaRef = useRef(null);
    useEffect(() => {
        if (!vantaInitialized) {
            console.log("Initializing VANTA.NET...");
            setVantaInitialized(NET({
                el: vantaRef.current,
                THREE,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200,
                minWidth: 200,
                scale: 1,
                scaleMobile: 1,
                color: 0x26521, 
                backgroundColor: 0x000000,
                points: 20
            }));
        }
        return () => {
            if (vantaInitialized) vantaInitialized.destroy();
        };
    }, [vantaInitialized]);

    return (
        <div>
            <div id="home" className="fp">
                <div ref={vantaRef} className='fpbackground'>
                    <div className="fptext">We Are</div>
                    <div className="fptext">Infosec Cyberlabs</div>
                    <div className="fptext small">We Code, We Develop and We Hack</div>
                </div>
            </div>
            <Nav />
            <div className="abouts" style={{ fontFamily: 'pixelify sans', fontWeight: 500, fontStyle: 'bold', fontSize: '50px', color: 'whitesmoke', textAlign: 'center', borderBottom: '3px solid lime' }}>About Us</div>
            <Achievements />
            <Writeup />
            <div id="teams" style={{ fontFamily: 'pixelify sans', fontWeight: 500, fontStyle: 'bold', fontSize: '50px', color: 'whitesmoke', textAlign: 'center', borderBottom: '3px solid lime', backgroundColor: 'black' }}>
            Meet Our Team
            </div>
            <div style={{ fontFamily: 'ubuntu', fontWeight: 500, fontSize: '50px', color: 'whitesmoke', textAlign: 'center', backgroundColor: 'black', margin: '30px 0px 15px 0px' }}>
            The Apprentices
            </div>
            <Apprentices />
            <div style={{ fontFamily: 'ubuntu', fontWeight: 500, fontSize: '50px', color: 'whitesmoke', textAlign: 'center', backgroundColor: 'black', margin: '30px 0px 15px 0px' }}>
            The Knights
            </div>
            <Knights />
            <div style={{ fontFamily: 'ubuntu', fontWeight: 500, fontSize: '50px', color: 'whitesmoke', textAlign: 'center', backgroundColor: 'black', margin: '30px 0px 15px 0px' }}>
            The Titans
            </div>
            <Titans />
            <div style={{ fontFamily: 'ubuntu', fontWeight: 500, fontSize: '50px', color: 'whitesmoke', textAlign: 'center', backgroundColor: 'black', margin: '30px 0px 15px 0px' }}>
            The Legends
            </div>
            <Legends />
            <div style={{ fontFamily: 'ubuntu', fontWeight: 500, fontSize: '50px', color: 'whitesmoke', textAlign: 'center', backgroundColor: 'black', margin: '30px 0px 15px 0px' }}>
            The Gods
            </div>
            <Gods />
        </div>
    );
};

export default Home;
