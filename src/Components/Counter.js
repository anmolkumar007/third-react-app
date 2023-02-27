import { useDispatch, useSelector } from "react-redux";
import { decrementByOne, incrementByOne } from "../Store/Actions/CounterAction";

function Counter(){
    const stateValue = useSelector(state=>state.counterReducer.counter);
    const dispatch = useDispatch();

    return(
        <div>
            <h1>Counter : {stateValue}</h1>
            {/* <button className="btn btn-success" onClick={()=>dispatch({type:'increment'})}>+</button>
            <button className="btn btn-danger" onClick={()=>dispatch({type:'decrement'})}>-</button> */}
            <button className="btn btn-success" onClick={incrementByOne}>+</button>
            <button className="btn btn-danger" onClick={decrementByOne}>-</button>
        </div>
    )

}
export default Counter;