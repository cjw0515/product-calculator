import React from 'react';
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
  

export const Perchase = (props) => {

    let { perchaseList, totalPerchase } = props;
    totalPerchase = utils.addComma(totalPerchase);

    return(
        <Table
        height={'300px'}
        fixedHeader={true}
        fixedFooter={false}
        selectable={false}
        multiSelectable={false}
        >
        <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
        >
            <TableRow>
            <TableHeaderColumn colSpan="5" tooltip="구매내역" style={{textAlign: 'right'}}>
                <p>총 구매금액 : {totalPerchase}원</p>
            </TableHeaderColumn>
            </TableRow>
            <TableRow>
            <TableHeaderColumn tooltip="제품명">제품명</TableHeaderColumn>
            <TableHeaderColumn tooltip="수량">수량</TableHeaderColumn>
            <TableHeaderColumn tooltip="제품금액">제품금액</TableHeaderColumn>
            <TableHeaderColumn tooltip="총금액">총금액</TableHeaderColumn>
            <TableHeaderColumn tooltip="구매일자">구매일자</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
            stripedRows={true}
        >
            {perchaseList.map( (row, index) => (
            <TableRow key={index}>
                <TableRowColumn>{row.productName}</TableRowColumn>
                <TableRowColumn>{row.productQuantity}</TableRowColumn>
                <TableRowColumn>{utils.addComma(row.productPrice)}</TableRowColumn>
                <TableRowColumn>{utils.addComma(row.productQuantity * row.productPrice)}</TableRowColumn>
                <TableRowColumn>{row.date}</TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
        <TableFooter
            adjustForCheckbox={false}
        >
            <TableRow>
            <TableRowColumn>제품명</TableRowColumn>
            <TableRowColumn>수량</TableRowColumn>
            <TableRowColumn>제품금액</TableRowColumn>
            <TableRowColumn>총금액</TableRowColumn>
            <TableRowColumn>구매일자</TableRowColumn>
            </TableRow>
            <TableRow>
            <TableRowColumn colSpan="5" style={{textAlign: 'right'}}>
                <p>총 구매금액 : {totalPerchase}원</p>
            </TableRowColumn>
            </TableRow>
        </TableFooter>
        </Table>
    );
}

export const PerchaseByProduct = (props) => {
    
    let { perchaseList, totalPerchase } = props;
    totalPerchase = utils.addComma(totalPerchase);

    return(
        <Table
        height={'300px'}
        fixedHeader={true}
        fixedFooter={false}
        selectable={false}
        multiSelectable={false}
        >
        <TableHeader
            displaySelectAll={false}
            adjustForCheckbox={false}
            enableSelectAll={false}
        >
            <TableRow>
            <TableHeaderColumn colSpan="4" tooltip="구매내역" style={{textAlign: 'right'}}>
                <p>총 구매금액 : {totalPerchase}원</p>
            </TableHeaderColumn>
            </TableRow>
            <TableRow>
            <TableHeaderColumn tooltip="제품명">제품명</TableHeaderColumn>
            <TableHeaderColumn tooltip="수량">수량</TableHeaderColumn>
            <TableHeaderColumn tooltip="제품금액">제품금액</TableHeaderColumn>
            <TableHeaderColumn tooltip="총금액">총금액</TableHeaderColumn>
            </TableRow>
        </TableHeader>
        <TableBody
            displayRowCheckbox={false}
            showRowHover={true}
            stripedRows={true}
        >
            {perchaseList.map( (row, index) => (
            <TableRow key={index}>
                <TableRowColumn>{row._id}</TableRowColumn>
                <TableRowColumn>{row.productQuantity}</TableRowColumn>
                <TableRowColumn>{utils.addComma(row.productPrice)}</TableRowColumn>
                <TableRowColumn>{utils.addComma(row.productQuantity * row.productPrice)}</TableRowColumn>
            </TableRow>
            ))}
        </TableBody>
        <TableFooter
            adjustForCheckbox={false}
        >
            <TableRow>
            <TableRowColumn>제품명</TableRowColumn>
            <TableRowColumn>수량</TableRowColumn>
            <TableRowColumn>제품금액</TableRowColumn>
            <TableRowColumn>총금액</TableRowColumn>
            </TableRow>
            <TableRow>
            <TableRowColumn colSpan="4" style={{textAlign: 'right'}}>
                <p>총 구매금액 : {totalPerchase}원</p>
            </TableRowColumn>
            </TableRow>
        </TableFooter>
        </Table>
    );
}

// export default Perchase;
