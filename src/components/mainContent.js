import React from 'react';
import ReactDOM from 'react-dom';
import Email from '../images/Icon.png'
import Linkedin from '../images/Vector.png';


export default function MainContent(props) {
    return (
        <main className= {props.mode ? "mainContent-dark": ""}>
            <h1 className={props.mode? "h1-dark": ""}>Stellamaris Nwokike</h1>
            <h3 className={props.mode? "h3-dark": ""}>Frontend Developer</h3>
            <p className= {props.mode ? "website-dark":"website"}>Uccodes.website</p>
            <div className='buttons'>
                <button className={props.mode ? "email-dark":"email"}><img src={Email}></img>Email</button>
                <button className={props.mode? "linkedin-dark": "linkedin"}><img src={Linkedin} className='icon'></img>Linkedin</button>
            </div>
            <div className='body'>
                <h4 className={props.mode? "about-dark": "about"}>About</h4>
                <p className={props.mode? "about-body-dark" : "about-body"}>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>

                <h4 className={props.mode? "interest-dark" : "interest"}>Interests</h4>
                <p className={props.mode? "interest-body-dark" : "interest-body"}>Baking. Music lover. Fashion lover. Entrepreneur. Shopping. Video Games. Wine fanatic. Food.</p>
            
            </div>
            
        </main>
    )
}