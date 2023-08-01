import './App.scss';
import Home from './Components/Home';
import Algorithms from "./Components/Algorithms"
import { Routes,Route } from 'react-router-dom';
import Playground from './Components/Playground';

function App() {
  return (
    <div className='main-container'>
        <Routes>
        <Route path="/" Component={Home} />
        <Route path="/algorithms" Component={Algorithms}/>  
        <Route path="/playground" Component={Playground}/>  
        </Routes>
    </div>
  );
}

export default App;
