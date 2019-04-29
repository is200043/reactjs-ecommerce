import React from 'react';
import { Box, Grommet } from 'grommet';
import AppBar from './components/AppBar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Box direction='coloum' fill>
        <AppBar />
      </Box>
    </div>
  );
}

export default App;
