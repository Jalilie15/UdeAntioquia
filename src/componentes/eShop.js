import { useState } from "react";
import Cart from "./cart";
import ProductList from "./products";

export default function Eshop() {
  const [selectedItems, setSelectItem] = useState([]);
  return (
    <div className="container d-flex">
      <ProductList setSelectItem={setSelectItem}></ProductList>
      <Cart selectedItems={selectedItems}></Cart>
    </div>
  );
}
