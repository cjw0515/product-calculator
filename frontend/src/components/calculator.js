import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {
    Table,
    TableBody,
    TableFooter,
    TableHeader,
    TableHeaderColumn,
    TableRow,
    TableRowColumn,
  } from 'material-ui/Table';
  import TextField from 'material-ui/TextField';
  import Toggle from 'material-ui/Toggle';
  
class Calculator extends Component{

    render(){

        const { totalProducts } = this.props;

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
                        >
                        <TableHeader
                            displaySelectAll={true}
                            adjustForCheckbox={true}
                            enableSelectAll={true}
                        >
                            <TableRow>
                            <TableHeaderColumn colSpan="3" tooltip="Super Header" style={{textAlign: 'center'}}>
                                계산 상세
                            </TableHeaderColumn>
                            </TableRow>
                            <TableRow>
                            <TableHeaderColumn tooltip="제품명">제품명</TableHeaderColumn>
                            <TableHeaderColumn tooltip="수량">수량</TableHeaderColumn>
                            <TableHeaderColumn tooltip="금액">금액</TableHeaderColumn>
                            </TableRow>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={true}
                            deselectOnClickaway={true}
                            showRowHover={true}
                            stripedRows={true}
                        >
                            {totalProducts.map( (row, index) => (
                            <TableRow key={index}>
                                <TableRowColumn>{row.productName}</TableRowColumn>
                                <TableRowColumn>{row.productQuantity}</TableRowColumn>
                                <TableRowColumn>{row.productTotalPrice}</TableRowColumn>
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
                            </TableRow>
                            <TableRow>
                            <TableRowColumn colSpan="3" style={{textAlign: 'right'}}>
                                <p>총 금액 : 1154384 원</p>
                                <RaisedButton label="전송" />
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