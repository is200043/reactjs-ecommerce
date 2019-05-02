import React from 'react';
import { Box, Grommet, TextInput } from 'grommet';
import AppBar from './components/AppBar';
import ProductList from './components/ProductList';
import './App.css';

function App() {
  const [value, setValue] = React.useState('');
  const onBlur = () => {
    console.log(value);
  }
  return (
    <div className="App">
      <Box direction="column" fill>
        <AppBar />
        <Box direction="row" pad="medium" fill >
          <Box width="medium">
            <Box direction="row" basis="medium" pad="small">
              <TextInput
                placeholder="Search here"
                value={value}
                onChange={event => setValue(event.target.value)}
                onBlur={onBlur}
              />
            </Box>
          </Box>
          <Box flex>
            <ProductList search={value}/>
          </Box>
        </Box>
      </Box>
    </div>
  );
}

export default App;
