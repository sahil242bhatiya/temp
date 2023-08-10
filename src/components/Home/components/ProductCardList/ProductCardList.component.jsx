import { useEffect, useRef, useState } from "react";

import ProductCard from "../../../../core/cards/ProductCard/ProductCard.component.jsx";
import "./ProductCardList.styles.scss";

import { addCard, generateProducts } from "./ProductCardList.functions.js";

import autoAnimate from "@formkit/auto-animate";

const productCardList = () => {
  const LENGTH = 10;

  const [products, setProducts] = useState([]);
  const parentRef = useRef(null);

  const initData = () => {
    setProducts(generateProducts(LENGTH));
  };

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parentRef]);

  useEffect(() => {
    initData();
  }, []);

  return (
    <>
      <button
        className="btn btn-primary"
        onClick={() => {
          addCard(setProducts);
        }}
      >
        Add
      </button>
      <button
        className="btn btn-primary reset"
        onClick={() => {
          setProducts(generateProducts(LENGTH));
        }}
      >
        Reset
      </button>
      <div className="product-card-list" ref={parentRef}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default productCardList;
