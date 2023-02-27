let initialState = {
    counter:0
}

export default function CounterReducer(state=initialState,action){
    if(action.type==='increment'){
        return{
            ...state, counter: state.counter+1
        };
    }
    else if(action.type==='decrement'){
        return{
            ...state,counter: state.counter-1
        };
    }
    return state;
}
