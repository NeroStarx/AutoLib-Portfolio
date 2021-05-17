import React from 'react'
import Button from './components/button/button'


export default class main extends React.Component{

    render(){
        return(
            <div>
                <Button text="telecharger maintenant" mode="light_mode"/>
                <Button text="Consulter" mode="dark_mode"/>
            </div>
        )
    }
}