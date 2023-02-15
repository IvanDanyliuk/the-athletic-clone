import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Layout from './app/components/layout/Layout';


const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          Hello World!
        </Layout>
      </Router>
    </div>
  );
}

export default App;
