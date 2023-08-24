import React, { useRef, useState, useContext } from "react";
import CartContext from "./store/cartContext";
import Output from "./Output";
import CartModal from "./Cart/CartModal";

const InputForm = () => {
  const ctxt = useContext(CartContext);
  const [userInput, setInput] = useState([]);
  const[displayCart,setDisplay]=useState(false);
  const medicineNameRef = useRef();
  const descriptionRef = useRef();
  const priceRef = useRef();

  const handleAddProduct = (event) => {
    event.preventDefault();
    const medicineName = medicineNameRef.current.value;
    const description = descriptionRef.current.value;
    const price = priceRef.current.value;

    const MedDetails = {
      name: medicineName,
      desc: description,
      price: price,
    };
    setInput([...userInput,MedDetails]);

    // Clear the form fields
    medicineNameRef.current.value = '';
    descriptionRef.current.value = '';
    priceRef.current.value = '';
  };

  const CartHandler=()=>{
    setDisplay(true);
  }

  // useEffect(() => {
  //   console.log(userInput);
  // }, [userInput]);

  return (
    <div className="p-4 ">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold mb-4 text-center underline">
          Add Medicine Product
        </h2>
        <button className="text-xl border-2 border-blue-600 p-2 rounded" onClick={CartHandler}>
          Cart <span className="text-red-500">{ctxt.item.length}</span>
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Medicine Name
          </label>
          <input
            type="text"
            className="mt-1 p-2 w-full border rounded-md"
            ref={medicineNameRef}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            className="mt-1 p-2 w-full border rounded-md"
            ref={descriptionRef}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            className="mt-1 p-2 w-full border rounded-md"
            ref={priceRef}
          />
        </div>
        <button
          className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          type="Submit"
          onClick={handleAddProduct}
        >
          Add Product
        </button>
      </div>
      <Output data={userInput}/>
      {displayCart && <CartModal onclk={setDisplay} />}
    </div>
  );
};

export default InputForm;
