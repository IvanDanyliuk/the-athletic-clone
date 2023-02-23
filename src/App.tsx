import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './app/components/layout/Layout';
import NotFound from './app/pages/NotFound';


const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <NotFound />
        </Layout>
      </Router>
    </div>
  );
}

export default App;
