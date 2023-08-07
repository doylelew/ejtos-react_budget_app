import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Select.css';

const Currency = () => {

    const {dispatch, currency} = useContext(AppContext);

    const eventHandler= (e)=>{
        console.log(e.target.value)
    };

    return(
        <select name="Currency" id="Currency" onChange={eventHandler} value="default">
            <option selected hidden value="defualt">Currency ({currency} Dollar)</option>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    );
};

export default Currency;