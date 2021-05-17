import React from 'react'
import './button.css'

export default function button(props){
    return(
        <button class={props.mode + " button"} onClick={props.onClick}>
            {props.text}
        </button>
    )
}