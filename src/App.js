import React from 'react';
import { Box, Grommet } from 'grommet';
import AppBar from './components/AppBar';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box direction='column' fill>
        <AppBar />
        <Box
          direction='row'
          pad='medium'
          fill
        >
          <Box width='medium'>
            search
          </Box>
          <Box flex>
            <ProductList />
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
