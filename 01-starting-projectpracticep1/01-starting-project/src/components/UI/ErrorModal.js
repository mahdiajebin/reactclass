
import React from 'react'
import styled from './ErrorModal.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const ErrorModal = (props) => {
    return (
        <div>
            <div className={styled.backdrop} onClick={props.onConfirm} /> 
        <Card className ={styled.modal}>
            <header className={styled.header}>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className={styled.content}>
                <p> {props.message}</p>
            </div>
            <footer className={styled.actions}>
                <Button onClick={props.onConfirm}> Okay</Button>
            </footer>


        </Card> 
        </div>
    )
}


export default ErrorModal