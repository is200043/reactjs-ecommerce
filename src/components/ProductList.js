import React from 'react';
import { Box } from 'grommet';
import request from '../utils/request'

class ProductList extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.fetchData();
    }
    fetchData = async () => {
        const res = await request.get('/products');
        const data = res.data.data;
        this.setState({ data: data });
        console.log(data);
    }
    render() {
        const { data } = this.state;
        return (
            <Box
                direction='column'
                pad='small'
                fill
            >
                <Box pad='small' background='light-3'>
                    Product List
                </Box>
                <Box pad='small' direction='row' fill wrap overflow='auto'>
                    {
                        data.map((product) => (
                            <div>abc</div>
                        ))
                    }
                </Box>
            </Box>
        )
    }
}

export default ProductList