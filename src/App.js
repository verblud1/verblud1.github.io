import React from 'react';
import { Routes, Route, Link} from 'react-router-dom';
import Header from './components/header';
import MainCon from './components/maincontent';
import Wiki from './components/Page/info';
import NotFound from './components/Page/NotFoundPage';

function App() {
  return (
   <>

   <Header />
   
    <Routes>
      <Route path='/' element={<MainCon />} />
      <Route path='/wiki' element={<Wiki />} />
      <Route path="*" element={<NotFound />} />

    </Routes>

    </>
  );
}

export default App;
