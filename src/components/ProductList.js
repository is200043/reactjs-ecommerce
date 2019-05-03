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
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.search !== this.props.search) {
            this.fetchData();
        }
    }
    fetchData = async (search) => {
        const res = await request.get('/products?include=main_image' + (this.props.search !== "" ? '&filter=eq(name,' + this.props.search + ')': ''));
        const data = res.data.data.map(item => {
            let image = 'https://via.placeholder.com/300x400.png';
            try {
                console.log(item.relationships.main_image.data.id);
                console.log(res.data.included.main_images);
                let img = res.data.included.main_images.find((images) => item.relationships.main_image.data.id === images.link.id)
                console.log(img.link.href);
            } catch (error) {
                console.log(error);
                image = 'https://via.placeholder.com/300x400.png';
            }
            console.log(image);
            return {
                name: item.name,
                description: item.description,
                image: image,
                price: item.meta.display_price.with_tax.formatted
            }
        })
        this.setState({ data: data });
        // console.log(data);
    }
    render() {
        const { data } = this.state;
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