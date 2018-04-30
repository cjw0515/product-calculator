import React, { Component } from 'react';
import Calculator from '../components/calculator';

class CalculatorContainer extends Component{

    state = {
        
    }

    render(){
        return(
            <div className="container">
                <Calculator/>            
            </div>
        )
    }
}

export default CalculatorContainer;