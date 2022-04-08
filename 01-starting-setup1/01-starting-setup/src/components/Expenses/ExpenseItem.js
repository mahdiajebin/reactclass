
import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from '../UI/Card';


function ExpenseItem(props) {

    // const [title, setTitle] = useState(props.title);
    // console.log("Expense item evaluated by react  ");
    // const clickHandler = () => {
    //     //state updating funtion
    //     setTitle('Updated');
    //     console.log(title);
    // };
    //           <button onClick={clickHandler}>Change Title</button>

    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date={props.date} />
            <div className="expense-item__description"><h2>{props.title} </h2>
                <div className="expense-item__price ">  ${props.amount}</div>  </div>
        </Card>
        </li>
    );
}
export default ExpenseItem;  