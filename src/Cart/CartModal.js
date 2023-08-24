import React, { useContext, useState } from "react";
import Modal from "../Modal/modal";
import CartContext from "../store/cartContext";

const CartModal = (props) => {
  const Ctxt = useContext(CartContext);
  let TotalPrice = 0;
  Ctxt.item.forEach((it) => {
    TotalPrice += it.Quantity * it.price;
  });

  const [isOrder, setOrder] = useState(false);
  const orderHandler = () => {
    Ctxt.clearCart();
    setOrder(true);
    setTimeout(() => {
      setOrder(false);
    }, 1000);
  };

  return (
    <Modal>
      <div className="p-4 overflow-scroll" style={{ maxHeight: "300px" }}>
        <h2 className="text-xl font-semibold mb-4 text-center">Your Cart</h2>
        {Ctxt.item.map((it) => (
          <div
            key={it.name}
            className="bg-white p-4 rounded shadow mb-4 md:mb-2"
          >
            <p className="text-lg font-semibold">{it.name}</p>
            <p className="text-gray-600">{it.desc}</p>
            <p className="text-blue-500 mt-2">Price: ${it.price}</p>
            <p className="text-blue-500 mt-2">Quantity: {it.Quantity}</p>
          </div>
        ))}
        <div className="text-center">
          <p className="text-xl font-semibold">Total Amount: ${TotalPrice}</p>
          {isOrder && (
            <p className="text-center text-green-600 text-xl">
              Order Successful !!
            </p>
          )}
          <button
            className="bg-blue-500 text-white px-4 py-2 mt-4 mr-2 rounded-md hover:bg-blue-600"
            onClick={orderHandler}
          >
            Order Now
          </button>
          <button
            className="bg-red-300 text-white px-4 py-2 mt-4 rounded-md hover:bg-red-600"
            onClick={() => props.onclk(false)}
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default CartModal;
