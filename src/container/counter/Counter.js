import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../redux/action/counter.action';

function Counter(props) {

    const dispatch = useDispatch()
    const counterData = useSelector(state => state.count)

    const handleIncrement = () => {
        dispatch(increment())
    }

    const handleDecrement = () => {
        dispatch(decrement())
    }

    return (
        <div>
            <button onClick={() => handleIncrement()}>+</button>
            <p>{counterData.count}</p>
            <button onClick={() => handleDecrement()}>-</button>
        </div>
    );
}

export default Counter;