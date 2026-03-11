import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";

const SellActionWindow = ({ uid }) => {
  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);
  const { closeSellWindow } = useContext(GeneralContext);

  const handleSell = () => {
    console.log("Sell:", uid, qty, price);
    closeSellWindow();
  };

  return (
    <div className="container sell-window">
      <h3>Sell {uid}</h3>

      <input
        type="number"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />

      <input
        type="number"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />

      <button onClick={handleSell}>Sell</button>
      <button onClick={closeSellWindow}>Cancel</button>
    </div>
  );
};

export default SellActionWindow;
