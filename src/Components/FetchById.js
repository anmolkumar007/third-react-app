import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import { FetchMedicineById } from "../Store/Actions/MedicineAction";

export default function FetchById(){
    const medicine = useSelector(state=>state.medicineReducer.medicine);
    const dispatch= useDispatch();
    const {medid} = useParams();

    useEffect(()=>{
    dispatch(FetchMedicineById(medid));
},[medid])

return (
    <div>
        {
            medicine != null &&
            <div>
                <h3>Medicine Detail</h3>
                <p>MedicineID: {medicine.medicineId}</p>
                <p>MedicineName: {medicine.medicineName}</p>
                <p>MedicineCost: {medicine.medicineCost}</p>
                <p>CompanyName: {medicine.companyName}</p>
                <p>ManufactureDate: {medicine.manufactureDate}</p>
                <p>ExpiryDate: {medicine.expiryDate}</p>
                
                <div>
                   <button className='btn btn-primary'> <Link to='/medicine/all' style={{color:'white'}}>Go back</Link> </button>
                </div>
            </div>
        }
    </div>

)

}