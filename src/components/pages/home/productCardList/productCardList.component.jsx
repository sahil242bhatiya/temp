import { useEffect, useRef, useState } from "react";

import ProductCard from "../../../core/cards/productCard/productCard.component.jsx";
import "./productCardList.styles.scss";

import {
  addCard,
  generateProducts,
  generateSkeletonProducts,
} from "./productCardList.functions.js";

import autoAnimate from "@formkit/auto-animate";

const productCardList = () => {
  const LENGTH = 10;
  const DELAY = 1000;

  const [products, setProducts] = useState([]);
  const parentRef = useRef(null);

  const initData = () => {
    setProducts(generateSkeletonProducts(LENGTH));
    setTimeout(() => {
      setProducts(generateProducts(LENGTH));
    }, DELAY);
  };

  useEffect(() => {
    if (parentRef.current) {
      autoAnimate(parentRef.current);
    }
  }, [parent]);

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
