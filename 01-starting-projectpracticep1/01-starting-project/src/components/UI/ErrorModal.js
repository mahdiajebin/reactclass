
import React from 'react'
import styled from './ErrorModal.module.css';
import Card from '../UI/Card';
import Button from '../UI/Button';

const ErrorModal = (props) => {
    return (
        <div>
            <div className={styled.backdrop}> </div>
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
                <Button> Okay</Button>
            </footer>


        </Card> 
        </div>
    )
}


export default ErrorModal