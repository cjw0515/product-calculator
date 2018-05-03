export function addComma(number){

    if(number === undefined) return 0;
  
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

export function getTotalPrice(totalProducts){
    let totalPrice = 0;    

    totalProducts.forEach((products, i) => {
      totalPrice += products.selected ? products.productTotalPrice : 0
  });

  return totalPrice;
}