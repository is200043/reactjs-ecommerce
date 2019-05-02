import React from 'react';
import { Box } from 'grommet';
import ProductItem from './ProductItem'
import request from '../utils/request'

class ProductList extends React.Component {
    state = {
        data: []
    }
    componentDidMount() {
        this.fetchData();
    }
    componentDidUpdate() {
        if (this.props.search === "") {
            this.fetchData();
        } else {
            console.log(this.props.search);
            this.findData();
        }
    }
    fetchData = async () => {
        const res = await request.get('/products');
        const data = res.data.data.map(item => {
            return {
                name: item.name,
                description: item.description,
                image: 'https://via.placeholder.com/300x400.png',
                price: item.meta.display_price.with_tax.formatted
            }
        })
        this.setState({ data: data });
        console.log(data);
    }
    findData = async () => {
        const res = await request.get('/products?filter=eq(name,' + this.props.search + ')');
        const data = res.data.data.map(item => {
            return {
                name: item.name,
                description: item.description,
                image: 'https://via.placeholder.com/300x400.png',
                price: item.meta.display_price.with_tax.formatted
            }
        })
        this.setState({ data: data });
        console.log(data);
    }

    render() {
        const { data } = this.state;
        const { search } = this.props;
        return (
            <Box direction='column' pad='small' fill >
                <Box pad='small' background='light-3'>
                    Product List
                </Box>
                <Box pad='small' direction='row' fill wrap overflow='auto'>
                    {
                        data.map((product) => (
                            <ProductItem {...product} />
                        ))
                    }
                </Box>
            </Box>
        )
    }
}

export default ProductList