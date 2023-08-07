import React, { useState } from 'react';
// import { AppContext } from '../context/AppContext';
import './Select.css';

const Currency = () => {
    const [open, setOpen] = useState(false)

    // const { expenses } = useContext(AppContext);

    if (open){
        return(
            <div className = "dropdown">
                <button className="select-button btn btn-lrg rounded-2" onClick={()=>setOpen(!open)} ><h5>Currency ($ Dollar) ▾</h5></button>
                <table className="drop-options">
                    <tr><option className="subbutton">$ Dollar</option></tr>
                    <tr><option className="subbutton">£ Pound</option></tr>
                    <tr><option className="subbutton">€ Euro</option></tr>
                    <tr><option className="subbutton">₹ Ruppee</option></tr>
                </table>
            </div>
        );

    } else {
        return(
            <div className = "dropdown">
                <button className="select-button btn btn-lrg rounded-2" onClick={()=>setOpen(!open)} ><h5>Currency ($ Dollar) ▾</h5></button>
            </div>
        );
    }
};

export default Currency;