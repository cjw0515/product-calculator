import React from 'react';
import * as utils from '../utils/utils';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

const Product = ({ 
    productName, 
    productPrice, 
    productQuantity, 
    img,
    key,
    id,
    onChange,
    onQTTctrl,
    onCalulate,
    reset,
}) => (
    <div className="product" key={key}>        
        <div className="imgcontainer">
            <img src={img} alt={productName}/>        
        </div>                
        <p>제품명 : {productName}</p>
        <p>가격 : {utils.addComma(productPrice)}</p>        
        <div className="qtt">
            <p>수량 : <TextField
            id="text-field-default"
            value={productQuantity}
            style={{width:"30px"}}
            onChange={(e)=>{onChange(id, e)}}
            /></p> 
        </div>
        <div className="qttbtn">
            <FlatButton
                label="+" 
                secondary={true} 
                style={{width: "1px"}}
                onClick={()=>{onQTTctrl(id, "+")}}
            />
        </div>
        <div className="qttbtn">
            <FlatButton 
                label="-" 
                secondary={true} 
                style={{width: "1px"}}
                onClick={()=>{onQTTctrl(id, "-")}}
            />
        </div>        
        <div>
            <RaisedButton label="calculate" 
                onClick={() => {
                    onCalulate(id, productName, productPrice, productQuantity)
                    reset(id);
                }}
                fullWidth={true} />
        </div>
    </div>
);

export default Product;