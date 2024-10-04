import React from 'react';

const Achievements = () => {
  return (
    <div className="aboutpage" id="about">
      <div className="image-icon">
        <div className="imgbox" style={{ 
          width: '350px', 
          height: '350px', 
          right: '0%', 
          top: '50%', 
          padding: '50px',
          paddingRight: '80px',
          paddingTop: '50px'
        }}>
          <img className='abouticon' src="/images/cyberlabs icon.png" alt="Cyberlabs Icon" />
        </div>
      </div>
      <div className="achieve" style={{ 
        fontSize: '35px', 
        fontFamily: 'ubuntu', 
        fontWeight: 600, 
        textAlign: 'left', 
        color: 'rgb(94, 100, 105)', 
        paddingTop: '20px', 
        overflow: 'hidden' 
      }}>
        Our Achievements
        <div className="link" style={{ display: 'flex', padding: '20px' }}>
          <img src="/Icons/link icon.png" style={{ width: '30px', transform: 'translateY(-4px)' }} alt="Link Icon" />
          <span style={{ display: 'inline-block', color: 'rgb(153, 158, 158)', fontSize: '20px' }}>Link to CTF Time</span>
        </div>
        <div className="link" style={{ display: 'flex', paddingLeft: '20px' }}>
          <img src="/Icons/link icon.png" style={{ width: '30px', transform: 'translateY(-4px)' }} alt="Link Icon" />
          <span style={{ display: 'inline-block', color: 'rgb(153, 158, 158)', fontSize: '20px', padding: '0%' }}>Link to Github</span>
        </div>
        <ul className="achievementlist">
          <div style={{ marginLeft: '70px', fontWeight: 400 }}>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>3rd place Deep CTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>4th place Castors CTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>8th place HSCTF 7 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>3rd place CyberHack CTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>3rd place NoobCTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>14th place NahamCon CTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>3rd place Zh3r0 CTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>7th place RGBSec CTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>6th place CSICTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>18th place Hacktivity CTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>15th place InCTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>7th place Arab Security Cyber Wargames CTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>14th place Hackers Playground 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>64th place Google CTF 2020</span></li>
            <li><img src='/Icons/skull icon.png' style={{ width: '20px', marginTop: '10px', marginRight: '5px' }} alt="Skull Icon" /><span style={{ display: 'inline-block', paddingBottom: '3px', transform: 'translateY(-3px)' }}>8th place FwordCTF 2020</span></li>
          </div>    
        </ul>
      </div>
    </div>
  );
};

export default Achievements;
