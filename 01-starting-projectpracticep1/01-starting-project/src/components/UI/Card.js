import React from 'react'
import styled from './Card.module.css'
const Card = (props) => {
    return (
        <div className={`${styled.card} ${props.className}`}>{props.children}</div> //props.children will give us content whatever is passed inside 
    )
};

//classname card and any incoming 
export default Card