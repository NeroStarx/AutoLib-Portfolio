import React from 'react'
import Button from '../button/button'
import insta from '../../assets/insta.svg'
import fb from '../../assets/fb.svg'
import twitter from '../../assets/twitter.svg'
import mail from '../../assets/mail.svg'
import phone from '../../assets/phone.svg'
import './form.css'

export default function form(){
    return(
        <div className="form-card">
            <div className="contact-info">
                <p className="contact-title">Info contacts</p>
                <div className="contact-option">
                    <img src={mail} alt="mail" className="option-icon"/>
                    <a href="mailto:contact@autolib.dz" className="contact-text">contact@autolib.dz</a>
                </div>
                <div className="contact-option">
                    <img src={phone} alt="phone" className="option-icon"/>
                    <a href="tel:026235236" className="contact-text">026235236</a>
                </div>
                <div className="contact-option">
                    <img src={fb} alt="fb" className="option-icon"/>
                    <a href="google.com" target="_blank" className="contact-text">AutoLib DZ</a>
                </div>
                <div className="contact-option">
                    <img src={insta} alt="insta" className="option-icon"/>
                    <a href="google.com" target="_blank" className="contact-text">AutoLib DZ</a>
                </div>
                <div className="contact-option">
                    <img src={twitter} alt="twitter" className="option-icon"/>
                    <a href="google.com" target="_blank" className="contact-text">AutoLib DZ</a>
                </div>
            </div>
            <div className="contact-form">
                <input type="text" name="name_input" 
                    id="name-input" placeholder="Nom" className="form-input"/>
                <br /><br />
                <input type="email" name="email_input" 
                    id="email-input" placeholder="Email" className="form-input"/>
                <br /><br />
                <textarea name="message" id="message-input" 
                    cols="30" rows="5" className="area-input" placeholder="Message">
                </textarea>
                <br /><br />
                <Button text="Envoyer" mode="light_mode"/>
            </div>
        </div>
    )
}