const initialState = {
    medicines: [],
    medicine: null
}

export default function MedicineReducer(state = initialState, action) {

    if (action.type === 'medicine/fetchAll') {
       
        return {
            ...state, medicines: action.payload
        }
    }
    else if(action.type==='medicine/fetchbyid'){
        return{
            ...state,medicine:action.payload
        }
    }
    else if(action.type==='medicine/add'){
        return{
            ...state,medicine:action.payload
        }
    }
    else
        return state;

}

