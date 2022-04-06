import React from 'react';
import ReactDOM from 'react-dom';
import Email from '../images/Icon.png'
import Linkedin from '../images/Vector.png';


export default function MainContent() {
    return (
        <div className='mainContent'>
            <h1>Stellamaris Nwokike</h1>
            <h3>Frontend Developer</h3>
            <p className='website'>Uccodes.website</p>
            <div className='buttons'>
                <button className='email'><img src={Email}></img>Email</button>
                <button className='linkedin'><img src={Linkedin} className='icon'></img>Linkedin</button>
            </div>
            <div className='body'>
                <h4 className='about'>About</h4>
                <p className='about-body'>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                <h4 className='interest'>Interests</h4>
                <p className='interest-body'>Baking. Music lover. Fashion lover. Entrepreneur. Shopping. Video Games. Wine fanatic. Food.</p>
            
            </div>
            
        </div>
    )
}