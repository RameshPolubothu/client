import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import Data from './Data';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/data' element={<Data />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
