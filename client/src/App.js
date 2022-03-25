import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Display from './components/Display';


function App() {
  return (
    <div className="App">
 <BrowserRouter>
 <Routes>
   <Route path='/' element={ <Display/>} />
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
