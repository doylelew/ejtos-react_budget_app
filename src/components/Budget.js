import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { dispatch, budget } = useContext(AppContext);

    return (
        <div className='alert alert-secondary'>
            <span>Budget: £ 
                <input
                    required='required'
                    type='number'
                    id='cost'
                    value={budget}
                    onChange={(event) => dispatch({type:'SET_BUDGET', payload: event.target.value})}
                    onBlur= {() => dispatch({type:'VALIDATE_BUDGET'})}
                    >
                </input>
            </span>
        </div>
    );
};
export default Budget;
