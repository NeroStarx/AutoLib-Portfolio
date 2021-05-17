import React from 'react'
import './header.css'
import Button from '../button/button'
import promo from '../../assets/promo.png'

export default function header(){
    return(
        <div className="main-header-container">
            <div className="description">
                <p className="sub-title">Louer une voiture</p>
                <p className="title">librement et rapidement</p>
                <p className="text">Nous vous offrons les meileurs services</p>
                <p className="text">Inscrivez vous, c’est gratuit !</p>
                <Button text="Télécharger ICI" mode="dark_mode"/>
            </div>
            <div >
                <img src={promo} alt="promo" className="promo-image"/>
            </div>
        </div>
    )
}