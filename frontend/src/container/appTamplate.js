import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import ProductContainer from './productContainer';
import Calculator from '../components/calculator';
import PerchaseContainer from './perchaseContainer';
import axios from 'axios';

class AppTemplate extends Component{

    state = {
        totalProducts:[],
        totalPrice:0,
        selectAll: false,
        perchaseList: [],
        totalPerchase: 0        
    }

    componentDidMount(){
        this.getPerchaseList();
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

    handleSubmit = () => {
        const { totalPrice, totalProducts } = this.state;
        if(totalPrice === 0){
            alert('항목을 선택해주세요')
            return;
        }

        const data = totalProducts.filter( products => products.selected !== false );
        // console.log(data);
        return axios.post('/api/perchases/', data)
        .then(response => {
            this.getPerchaseList();
            this.setState({
                totalProducts:[],
                selectAll: false,
                totalPrice: 0
            })
        });
    }

    getPerchaseList = (listType, option) => {

        let url = '/api/perchases';

        url = typeof listType === "undefined" ? url : `${url}?${listType}=${option}`;

        return axios.get(url)
        .then(response => {

            const data = response.data;

            this.setState({
                perchaseList: data,
                totalPerchase: data.reduce((sum, product) => sum+=product.productPrice ,0) 
            })
        }).catch((error) => {
            console.error(error);
        });    
    }

    render(){

        const { 
            handleDetails,
            handleSelect, 
            handleSubmit,
            getPerchaseList
         } = this;
        const { 
            totalProducts,
            totalPrice,
            perchaseList,
            totalPerchase
         } = this.state;
         
        return(
            <div>
                <ProductContainer
                    onCalulate={ handleDetails }
                />
                <Calculator
                    totalProducts={ totalProducts }
                    totalPrice={ totalPrice }
                    onRowSelect={ handleSelect }
                    onSubmit={ handleSubmit }
                />
                <PerchaseContainer
                    perchaseList={ perchaseList }
                    getPerchaseList={ getPerchaseList }
                    totalPerchase={ totalPerchase }
                />
            </div>
        )
    }
}

export default AppTemplate;