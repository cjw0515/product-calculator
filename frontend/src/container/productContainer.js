import React, { Component } from 'react';
import Product from '../components/product'

class productContainer extends Component{

    state = {        
        products: [
            {
                id:0,
                productName: '무선키보드 KDB-48',
                productPrice: 28900,
                productQuantity: 0,
                img:"images/keyboard_1.JPG"                
            },
            {
                id:1,
                productName: '초슬림 키보드 KR-6170',
                productPrice: 29000,
                productQuantity: 0,
                img:"images/keyboard_3.JPG"
            },
            {
                id:2,
                productName: '파스텔 유선키보드 KDB-49',
                productPrice: 17000,
                productQuantity: 0,
                img:"images/keyboard_2.JPG"
            },
            {
                id:3,
                productName: '기계식키보드 LK158',
                productPrice: 43000,
                productQuantity: 0,
                img:"images/keyboard_4.JPG"
            },                                    
        ]
    }

    handleChange = (id, e) => {  
        const curValue = e.target.value;
        const newValue = curValue.replace(/[^0-9]/g, '');
        const { products } = this.state;
        const index = products.findIndex( product => product.id === id);
        const selected = products[index];
        const nextProducts = [...products];
        nextProducts[index] = {
            ...selected,
            productQuantity: newValue
        }

        this.setState({
            products: nextProducts
        });
    }

    reset = (id) => {
        const { products } = this.state;
        const index = products.findIndex( product => product.id === id);
        const selected = products[index];
        const nextProducts = [...products];
        nextProducts[index] = {
            ...selected,
            productQuantity: 0
        }

        this.setState({
            products: nextProducts
        });        
    }

    handleQTT = (id, sign) => {
        
        const { products } = this.state;
        const index = products.findIndex( product => product.id === id);
        const selected = products[index];
        const nextProducts = [...products];

        let qtt = nextProducts[index].productQuantity;
        
        let result = sign === "+" ? ++qtt : --qtt;
        result = qtt < 0 ? 0 : result;

        nextProducts[index] = {
            ...selected,
            productQuantity: result
        }
        
        this.setState({
            products: nextProducts
        });
    }   

    render(){

        const { products } = this.state;
        const { handleChange, handleQTT, reset } = this;

        const productList = products.map( (product, index) => (            
            <Product
            key={ index }
            id={ product.id }
            productName={ product.productName } 
            productPrice={ product.productPrice }
            productQuantity={ product.productQuantity }
            img={ product.img }
            onChange={ handleChange }
            onQTTctrl={ handleQTT }
            onCalulate={ this.props.onCalulate }
            onClick={ this.props.onClick }
            reset={ reset }
            />
        ));

        return(
            <div className="container">
                {productList}
            </div>
        )
    }
}

export default productContainer;