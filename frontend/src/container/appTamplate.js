import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ProductContainer from './productContainer';
import Calculator from '../components/calculator';

class AppTemplate extends Component{

    state = {
        totalProducts:[]
    }

    handleDetails = (id, productName, productPrice, productQuantity) => {
        if(productQuantity===0)return;
        const { totalProducts } = this.state;

        for(let i = 0 ; i < totalProducts.length ; i++){
            if(totalProducts.id === id){
                totalProducts.productQuantity += productQuantity;
                totalProducts.productPrice += productPrice;
                this.setState({
                    totalProducts: totalProducts
                });
                return;
            }
        }

        this.setState({
            totalProducts: totalProducts.concat({
                id: id,
                productName: productName,
                productQuantity: productQuantity,
                productTotalPrice: productPrice * productQuantity
            })
        });
    }

    render(){

        const { handleDetails } = this;
        const { totalProducts } = this.state;

        return(
            <div>
                <ProductContainer
                    onCalulate={ handleDetails }
                />
                <Calculator
                    totalProducts={ totalProducts }
                />
            </div>
        )
    }
}

export default AppTemplate;