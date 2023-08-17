import './App.scss';
import Home from './pages/home/Home';
import Searching from "./pages/searching/Searching";
import { Routes,Route } from 'react-router-dom';
import Sorting from './pages/sorting/Sorting';

function App() {
  return (
    <div className='main-container'>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/searching" Component={Searching}/>  
        <Route path="/sorting" Component={Sorting}/>  
        <Route path="/board" Component={Sorting}/> 
        </Routes>
    </div>
  );
}

export default App;
