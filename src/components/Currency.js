import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import './Select.css';

const Currency = () => {

    const {dispatch, currency} = useContext(AppContext);

    const eventHandler= (e)=>{
        dispatch({
            type:'CHG_CURRENCY',
            payload: e.target.value
        });
    };

    function getCurrencyName(currency){
        switch(currency){
            case '$':
                return "Dollar"
            case '£':
                return "Pound"
            case '€':
                return "Euro"
            case '₹':
                return "Ruppee"
            
            default:
                return null;


        }
    }

    const currencyType = getCurrencyName(currency)

    return(
        <select className="select-box" name="Currency" id="Currency" onChange={eventHandler} value="default">
            <option selected hidden value="defualt">Currency ({currency} {currencyType})</option>
            <option value="$">$ Dollar</option>
            <option value="£">£ Pound</option>
            <option value="€">€ Euro</option>
            <option value="₹">₹ Ruppee</option>
        </select>
    );
};

export default Currency;