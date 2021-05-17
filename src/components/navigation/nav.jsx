import React from 'react'
import './nav.css'
import logo from '../../assets/main_logo.svg'

export default function navBar(props){
    return(
        <div className="main-container">
            <div>
                <img src={logo} alt="main-logo" className="index-logo" />
            </div>
            <div className="links" id="myTopnav">
                <ul>
                    <li><a href="#function">Functionalité</a></li>
                    <li><a href="#about">A propos</a></li>
                    <li><a href="#contact">Contacter</a></li>
                </ul>
            </div>
        </div>
    )
}