import logo from './logo.svg';
import './App.css';
import Counter from './Components/Counter';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import FetchAllMedicines from './Components/FetchAllMedicines';
import FetchById from './Components/FetchById';
import AddMed from './Components/AddMedicine';

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/medicine/all' element={<FetchAllMedicines/>}/>
      <Route path='/medicine/details/:medid' element={<FetchById/>}/>
      <Route path='/medicine/add' element={<AddMed/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
