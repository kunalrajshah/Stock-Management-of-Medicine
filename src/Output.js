import React, { Fragment, useContext,useState } from 'react';
import CartContext from './store/cartContext';

const Output = (props) => {
  const ctxt = useContext(CartContext);
  const[Quantity,setQuantity]=useState(0);
  const valueHandler=(event)=>{
    setQuantity(event.target.value);
  }
  // Button Handler
  const CartBtnHandler=(name)=>{
    // console.log(Quantity);
    const selectedItem=props.data.find((it)=>it.name===name);
    const findInCart=ctxt.item.find((it)=>it.name===name);
    if(findInCart){
     ctxt.updateQuant(name,Quantity)
    }else{
      ctxt.addItem(selectedItem,Quantity)
    }
  }

  return (
    <Fragment>
      <h1 className="text-center mt-1 mb-4 text-xl text-red-600 border-b-2 border-green-500">Stock Of Medicine</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {props.data.map((it) => (
          <div key={it.name} className="bg-white p-4 rounded shadow relative">
            <p className="text-lg font-semibold">{it.name}</p>
            <p className="text-gray-600">{it.desc}</p>
            <p className="text-blue-500 mt-2 mb-2">${it.price}</p>
            <input
            type="number"
            className="mt-1 p-2 w-12 border border-red-300 rounded-md"
            value={Quantity}
            onChange={valueHandler}
          />
            <button className="bg-blue-500 text-white p-1 absolute bottom-3 right-2 rounded-md hover:bg-blue-600"
            onClick={()=>CartBtnHandler(it.name)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </Fragment>
  );
};

export default Output;
