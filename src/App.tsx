import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './app/components/layout/Layout';
import { Checkout, Home, Login, News, NotFound, Realtime, Register, Search } from './app/pages';


const App: React.FC = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/search' element={<Search />} />
            <Route path='/news' element={<News />} />
            <Route path='/realtime' element={<Realtime />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Layout>
      </Router>
    </div>
  );
};

export default App;
