import React, { useContext } from "react";
import { ProductContext } from "./Products";

const Wheels = ({setBasket}) => {
  const [Items] = useContext(ProductContext);
  function handleClick(e) {
    e.preventDefault();
    if (e.target.innerText==='Add to Basket'){
        e.target.innerText ="Added"
    }
    let result = e.target.getAttribute("name");
    Items.forEach((item) => {
      if (item.name === result) {
        setBasket(item)
      }
    });
  }
  let wheels = Items.filter((item) => item.filter === "wheel");
  return (
    <div className="home">
      <div className="itemDisplay">
        {wheels.map((wheel) => (
          <div key={wheel.key} className="ItemCard">
            <img src={wheel.src} alt={wheel.name} />
            <div>{wheel.name}</div>
            <div>£{wheel.price}</div>
            <div onClick={handleClick} name={wheel.name} className='basketButton'>
              Add to Basket
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Wheels;
