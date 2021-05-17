import React from 'react'
import Button from './components/button/button'
import Nav from './components/navigation/nav'


export default class main extends React.Component{

    render(){
        return(
            <div>
                <Nav />
                <Button text="telecharger maintenant" mode="light_mode"/>
                <Button text="Consulter" mode="dark_mode"/>
            </div>
        )
    }
}