import React from "react";


const Basket = ({BasketArr, clearBasket}) => {
let totalPrice = 0;
  BasketArr.forEach(item => {
    totalPrice += item.price
  })
  console.log(totalPrice)

  const handleClick = () => {
    alert('You cant afford this...try halfords?')
  }
  const clearBskt = () => {
    clearBasket();
  }
  return (
    <div className="home">
      <div className="basket">


      <div className='basketLines'>
        <div></div>
      <h5>Name</h5>
      <h5>quantity</h5>
      <h5>Price</h5>
      </div>
      {BasketArr.map(item => 
          <div className='basketLines' key={item.key}>
      <img className='thumbnail' src={item.src} alt={item.name}/>
      <div>{item.name}</div>
      <div>1</div>
        <div>£{item.price}</div>
      </div>
      )
}
<div className='basketLines'>
  <div></div>
      <h5 >Total</h5>
  <h5>{BasketArr.length}</h5>
<h5>£{totalPrice}</h5>
    </div>
    <div className='checkout' onClick={handleClick}>CHECKOUT</div>
    <div className='clearBasket' onClick={clearBskt}>CLEAR BASKET</div>
    </div>
    
    </div>
  );
};
export default Basket;
