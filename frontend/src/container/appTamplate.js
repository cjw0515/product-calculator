import React, { Component } from "react";
import ProductContainer from "./productContainer";
import Calculator from "../components/calculator";
import PerchaseContainer from "./perchaseContainer";
import Header from "../components/header";
import Snackbar from "material-ui/Snackbar";
import * as utils from "../utils/utils";
import axios from "axios";

class AppTemplate extends Component {
  state = {
    totalProducts: [],
    totalPrice: 0,
    selectAll: false,
    perchaseList: [],
    totalPerchase: 0,
    dataInputStatus: false,
    message:""
  };

  componentDidMount() {
    this.getPerchaseList();
  }

  handleDetails = (id, productName, productPrice, productQuantity) => {
    if (productQuantity === 0 || productQuantity === "") return;
    const { totalProducts, selectAll } = this.state;
    const productTotalPrice = productPrice * productQuantity;

    const addProduct = () => {
      return new Promise((resolve, reject) => {
        this.setState({
          totalProducts: totalProducts.concat({
            id: id,
            productName: productName,
            productQuantity: productQuantity,
            productPrice: productPrice,
            productTotalPrice: productTotalPrice,
            selected: selectAll ? true : false
          })
        });
        resolve("insert complete");
      });
    };

    addProduct().then(() => {
      this.handleTotalPrice();
    });
  };

  handleTotalPrice = () => {
    const totalPrice = utils.getTotalPrice(this.state.totalProducts);
    this.setState({
      totalPrice: totalPrice
    });
  };

  handleSelect = rows => {
    const { totalProducts, selectAll } = this.state;
    const selectedItems = [];
    let totalPrice = 0;

    totalProducts.forEach((products, i) => {
      products.selected =
        rows === "all"
          ? true
          : rows === "none" || (selectAll && rows !== "none")
            ? false
            : rows.indexOf(i) > -1;
      selectedItems.push(products);
    });

    totalPrice = utils.getTotalPrice(totalProducts);

    console.log(rows);
    this.setState({
      totalProducts: selectedItems,
      totalPrice: totalPrice,
      selectAll: rows === "all" ? true : false
    });
  };

  /* 구매내역 리스트 삽입 */
  handleSubmit = () => {
    const { totalPrice, totalProducts } = this.state;
    if (totalPrice === 0) {
      alert("항목을 선택해주세요");
      return;
    }

    const data = totalProducts.filter(products => products.selected !== false);
    // console.log(data);
    return axios.post("/api/perchases/", data).then(response => {
      console.log(response);
      if (response.data.success === true) {
        this.getPerchaseList();
        this.setState({
          totalProducts: [],
          totalPrice: 0,
          dataInputStatus: true,
          message: response.data.message
        });
      }else{
          
      }
    });
  };
  /* 구매내역 리스트 로드 */
  getPerchaseList = (listType, option) => {
    let url = "/api/perchases";

    url =
      typeof listType === "undefined" ? url : `${url}?${listType}=${option}`;

    return axios
      .get(url)
      .then(response => {
        const data = response.data;

        this.setState({
          perchaseList: data,
          totalPerchase: data.reduce(
            (sum, product) => (sum += product.productPrice),
            0
          )
        });
      })
      .catch(error => {
        console.error(error);
      });
  };

  handleRequestClose = () => {
    this.setState({
      dataInputStatus: false
    });
  };

  render() {
    const {
      handleDetails,
      handleSelect,
      handleSubmit,
      getPerchaseList,
      handleTotalPrice
    } = this;
    const {
      totalProducts,
      totalPrice,
      perchaseList,
      totalPerchase
    } = this.state;

    return (
      <div>
        <Header />
        <ProductContainer
          onCalulate={handleDetails}
          onClick={handleTotalPrice}
        />
        <Calculator
          onLoadList={handleTotalPrice}
          totalProducts={totalProducts}
          totalPrice={totalPrice}
          onRowSelect={handleSelect}
          onSubmit={handleSubmit}
        />
        <PerchaseContainer
          perchaseList={perchaseList}
          getPerchaseList={getPerchaseList}
          totalPerchase={totalPerchase}
        />
        <Snackbar
          open={this.state.dataInputStatus}
          message={this.state.message}
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    );
  }
}

export default AppTemplate;
