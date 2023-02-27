import axios from 'axios';
import {useParams} from 'react-router-dom';


export function fetchAllMedicines(){
    
 
    return (dispatch)=>{
        
        return axios.get('http://localhost:8080/medicine/allMedicines')
        .then(resp=> 
            dispatch({
                type: 'medicine/fetchAll',
                payload: resp.data
            }))
    }
}

export function FetchMedicineById(medicineId){
    return(dispatch)=>{
        return axios.get('http://localhost:8080/medicine/getmedicinebyid/'+medicineId)
        .then(resp=>
            dispatch({
                type: 'medicine/fetchbyid',
                payload : resp.data
            }))
    }
}

export function addMedicine(medicine){
    return(dispatch)=>{
        return axios.post('http://localhost:8080/medicine/addMedicine',medicine)
        .then(resp=>alert('Medicine Added'))
        .catch(error=>alert('Unable to add medicine'))
    }
}