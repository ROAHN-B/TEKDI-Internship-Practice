import { useState } from 'react';
import { decrement, increment, incrementByAmount } from './counterSlice';
import { useSelector,useDispatch} from 'react-redux';
function Counter(){
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();
    return (
        <div>
            <button className="button" arial-label="Increment value"
            onClick={() => dispatch(incrementByAmount(5))}
            >Increment</button>


            <span className="value">{count}</span>

            
            <button className="button" arial-label="Decrement value"
            onClick={() => dispatch(decrement())}
            >Decrement</button>
        </div>      
    )
}

export default Counter;