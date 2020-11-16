import React, { useContext } from "react";
import { ProductContext } from "./Products";

const Frames = ({ setBasket }) => {
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
  let framesets = Items.filter((item) => item.filter === "frame");
  return (
    <div className="home">
      <div className="itemDisplay">
        {framesets.map((frameset) => (
          <div key={frameset.key} className="ItemCard">
            <img src={frameset.src} alt={frameset.name} />
            <div>{frameset.name}</div>
            <div>£{frameset.price}</div>
            <div onClick={handleClick} name={frameset.name} className='basketButton'>
              Add to Basket
            </div>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Frames;
