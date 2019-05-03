import React from 'react';
import { Box, Grommet, TextInput } from 'grommet';
import AppBar from './components/AppBar';
import ProductList from './components/ProductList';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: ""
    };
  }
  onSearchChange = (event) => {
    this.setState({ "search": event.target.value });
  }
  render() {
    return (
      <div className="App">
        <Box direction="column" fill>
          <AppBar />
          <Box direction="row" pad="medium" fill >
            <Box width="medium">
              <Box direction="row" basis="medium" pad="small">
                <TextInput
                  placeholder="Search here"
                  value={this.state.search}
                  onChange={this.onSearchChange}
                />
              </Box>
            </Box>
            <Box flex>
              <ProductList search={this.state.search} />
            </Box>
          </Box>
        </Box>
      </div>
    );
  }
}

export default App;
