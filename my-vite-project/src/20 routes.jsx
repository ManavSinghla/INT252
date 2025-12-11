import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About';

function MyRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
        </Routes>
    );
}

export default MyRoutes;