import './App.css';
import MyRoutes from './20 routes.jsx';
import { BrowserRouter } from 'react-router-dom';

function App(){
  return (
  <>
  <BrowserRouter>
  <MyRoutes/>
  </BrowserRouter>
  </>
  );
}

export default App;