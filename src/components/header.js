import React from 'react';
import ReactDOM from 'react-dom';
import Profile from '../images/about1.png'


export default function Header(props) {
    return (
        <div className='profile'>
            
            <div 
                className="toggler" 
            >
                <p className= {props.mode ? "toggler--light-dark":"toggler--light"}>Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleMode}
                >
                    <div className={props.mode ? "toggler-slider--circle-dark" : "toggler--slider--circle"}></div>
                </div>
                <p className={props.mode ? "toggler--dark-light" : "toggler--dark"}>Dark</p>
            </div>
            
        </div>
    )
}

