import logo from './logo.svg';
import './App.css';
import Login from './component/Login';
import NotePad from './component/NotePad';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
   <>
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/notePad' element={<NotePad/>}/>
   </Routes>
   </BrowserRouter>
   </>
  );
}

export default App;
