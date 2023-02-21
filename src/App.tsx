import { Box } from '@mui/material';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import styled from 'styled-components';
import Layout from './app/components/layout/Layout';

const Element = styled(Box)`
  width: 100%;
  height: 20vh;
`;

const App = () => {
  return (
    <div>
      <Router>
        <Layout>
          <Element>
            Hello World!
          </Element>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
