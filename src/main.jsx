import React from 'react'
import Nav from './components/navigation/nav'
import Header from './components/header/header'


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

                </section>

                {/* the contact section */}
                <section id="contact">

                </section>
            </div>
        )
    }
}