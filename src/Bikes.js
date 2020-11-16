import React, { useContext } from "react";
import { ProductContext } from "./Products";

const Bikes = ({ setBasket }) => {
  const [Items] = useContext(ProductContext);

  function handleClick(e) {
    e.preventDefault();
    if (e.target.innerText === "Add to Basket") {
      e.target.innerText = "Added";
    }
    let result = e.target.getAttribute("name");
    Items.forEach((item) => {
      if (item.name === result) {
        setBasket(item);
      }
    });
  }
  let bikes = Items.filter((item) => item.filter === "bike");
  return (
    <div className="home">
      <div className="itemDisplay">
        {bikes.map((bike) => (
          <div key={bike.key} className="ItemCard">
            <img src={bike.src} alt={bike.name} />
            <div>{bike.name}</div>
            <div>£{bike.price}</div>
            <div onClick={handleClick} className='basketButton' key={bike.key} name={bike.name}>
              Add to Basket
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Bikes;
