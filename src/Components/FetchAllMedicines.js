import { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {fetchAllMedicines} from '../Store/Actions/MedicineAction';
function FetchAllMedicines(){
    const medVal = useSelector(state=>state.medicineReducer.medicines);
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(fetchAllMedicines());
    },[])

     return (
        <div className='container'>
            <h2>Medicine List</h2>
            <div className='table-responsive'>
                <table className='table  table-dark table-hover'>
                    <thead>
                        <tr>
                            <th>medicine id</th>
                            <th>medicine name</th>
                            <th> medicine cost</th>
                            <th></th>
                           
                        </tr>
                    </thead>

                    {
                        medVal.length>0 &&
                        medVal.map(med =>
                            <tbody>
                                <tr key={med.medicineId}>
                                    <td>{med.medicineId}</td>
                                    <td>{med.medicineName}</td>
                                    <td>{med.medicineCost}</td>
                                   <td><Link to={`/medicine/details/${med.medicineId}`}>View</Link></td>
                                     {/* <td><Link to={`/medicine/update/${med.medicineId}`}>Update</Link></td>
                                    <td><Link to={`/medicine/delete/${med.medicineId}`}>Remove</Link></td> */}
                                </tr>
                            </tbody>

                        )
                    }
                </table>
            </div>
        </div>
    )
}

export default FetchAllMedicines;