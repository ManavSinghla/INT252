import './App.css';
import Home from './0 question';
import {Route, Routes, BrowserRouter } from 'react-router-dom';
import User from './pages/user'

function App(){
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/users/:id' element={<User/>} />
  </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;