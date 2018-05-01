import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ProductContainer from './productContainer';
import Calculator from '../components/calculator';

class AppTemplate extends Component{

    state = {
        totalProducts:[],
        totalPrice:0,
        selectAll: false
    }

    handleDetails = (id, productName, productPrice, productQuantity) => {
        if(productQuantity===0)return;
        const { totalProducts } = this.state;
        const productTotalPrice = productPrice * productQuantity;        

        this.setState({
            totalProducts: totalProducts.concat({
                id: id,
                productName: productName,                
                productQuantity: productQuantity,
                productPrice: productPrice,
                productTotalPrice: productTotalPrice,
                selected: false
            })            
        });
    }

    handleSelect = (rows) => {        
        const { totalProducts, selectAll } = this.state;
        const selectedItems = [];
        let totalPrice = 0;
        
        totalProducts.forEach((products, i) => {            
            products.selected = rows === "all" ? true : (rows === "none" || (selectAll && rows !== "none")) ? false : rows.indexOf(i) > -1;            
            selectedItems.push(products);
        });

        totalProducts.forEach((products, i) => {
            totalPrice += products.selected ? products.productTotalPrice : 0
        });

        console.log(rows);
        this.setState({
            totalProducts: selectedItems,
            totalPrice: totalPrice,
            selectAll: rows === "all" ? true : false
        })  
    }

    render(){

        const { handleDetails, handleSelect } = this;
        const { totalProducts, totalPrice  } = this.state;

        return(
            <div>
                <ProductContainer
                    onCalulate={ handleDetails }
                />
                <Calculator
                    totalProducts={ totalProducts }
                    totalPrice={ totalPrice }
                    onRowSelect={ handleSelect }
                />
            </div>
        )
    }
}

export default AppTemplate;