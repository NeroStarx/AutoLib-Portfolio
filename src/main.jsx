import React from 'react'
import Nav from './components/navigation/nav'
import Header from './components/header/header'
import logo from './assets/autolib_logo.png'
import './main.css'


export default class main extends React.Component{

    render(){
        return(
            <div>
                <Nav />
                {/* the functionality section */}
                <section id="functionality">
                    <Header />
                </section>

                {/* the about app autolibDZ section */}
                <section id="about">
                    <div id="about-title">
                        <p>A propos de nous</p>
                    </div>
                    <div id="about-content">
                        <div>
                            <img src={logo} alt="autolib-logo" className="autolib-about-logo"/>
                        </div>
                        <div>
                            <p className="main-title">C'est qui AutoLib DZ</p>
                            <p className="main-text">
                                An About Us page can be one of the most important 
                                pages on your website but it is one of the most overlooked 
                                elements on your website normally. About Us pages can highlight 
                                why you created your business, your commitment to sustainability
                                , or you can tell the story of how your business came to be. As an 
                                important part of your website your About Us page can set you apart 
                                from your competitors in a way that can build your brand in a positive way.
                            </p>
                            <p className="main-title">Notre mission?</p>
                            <p className="main-text">
                                An About Us Page is a page on your website that tells your readers 
                                all about you. It includes a detailed description covering all aspects 
                                of your business and you as entrepreneurs. This can include the products 
                                or services you are offering, how you came into being as a business, 
                                your mission and vision, your aim, and maybe something about your future 
                                goals too. Your About Us page is your perfect opportunity to tell a compelling 
                                story about your business.
                            </p>
                        </div>
                    </div>
                </section>

                {/* the contact section */}
                <section id="contact">

                </section>
            </div>
        )
    }
}