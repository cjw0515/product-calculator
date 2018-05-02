import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import * as utils from '../utils/utils';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  
class Calculator extends Component{

    render(){

        const { totalProducts, totalPrice, onRowSelect, onSubmit } = this.props;

        return( 
            <div className="container">                       
                <div className="calculator">
                    <div>
                        <Table
                        height={"300px"}
                        fixedHeader={true}
                        fixedFooter={true}
                        selectable={true}
                        multiSelectable={true}
                        onRowSelection={onRowSelect}                       
                        // allRowsSelected={true}
                        >
                        <TableHeader
                            displaySelectAll={true}
                            adjustForCheckbox={false}
                            enableSelectAll={true}
                        >
                            <TableRow>
                                <TableHeaderColumn colSpan="5" tooltip="계산상세" style={{textAlign: 'center'}}>
                                    계산 상세
                                </TableHeaderColumn>
                            </TableRow>
                            <TableRow                            
                             >
                                <TableHeaderColumn tooltip="제품명">제품명</TableHeaderColumn>
                                <TableHeaderColumn tooltip="수량">수량</TableHeaderColumn>
                                <TableHeaderColumn tooltip="금액">금액</TableHeaderColumn>
                                <TableHeaderColumn tooltip="총금액">총금액</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={true}
                            deselectOnClickaway={false}
                            showRowHover={true}
                            stripedRows={true}
                        >
                            {totalProducts.map( (row, index) => (
                            <TableRow 
                                key={index}        
                                selected={row.selected}  
                            >                                                               
                                <TableRowColumn style={{textAlign: "right"}}>{row.productName}</TableRowColumn>
                                <TableRowColumn style={{textAlign: "center"}}>{row.productQuantity}</TableRowColumn>
                                <TableRowColumn style={{textAlign: "center"}}>{utils.addComma(row.productPrice)}</TableRowColumn>
                                <TableRowColumn style={{textAlign: "center"}}>{utils.addComma(row.productTotalPrice)}</TableRowColumn>
                            </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter
                            adjustForCheckbox={true}
                        >
                            <TableRow>
                            <TableRowColumn>제품명</TableRowColumn>
                            <TableRowColumn>수량</TableRowColumn>
                            <TableRowColumn>금액</TableRowColumn>
                            <TableRowColumn>총금액</TableRowColumn>
                            </TableRow>
                            <TableRow>
                            <TableRowColumn colSpan="4" style={{textAlign: 'right'}}>
                                <p>총 금액 : {utils.addComma(totalPrice)} 원</p>
                                <RaisedButton
                                 label="전송"
                                 onClick={onSubmit}
                                  />
                            </TableRowColumn>
                            </TableRow>
                        </TableFooter>
                        </Table>        
                    </div>
                </div>                
            </div>
        )
    }
}

export default Calculator;