import { useEffect, useRef, useState } from "react";

import ProductCard from "../../../../core/cards/ProductCard/ProductCard.component.jsx";
import "./ProductCardList.styles.scss";

import { addCard, generateProducts } from "./ProductCardList.functions.js";

import autoAnimate from "@formkit/auto-animate";
import { Carousel } from "primereact/carousel";

const productCardList = () => {
  const LENGTH = 50;

  const [products, setProducts] = useState([]);
  const parentRef = useRef(null);

  const initData = () => {
    setProducts(generateProducts(LENGTH));
  };

  const responsiveOptions = [
    {
      breakpoint: "1199px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "991px",
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: "767px",
      numVisible: 1,
      numScroll: 1,
    },
  ];

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

      <div>
        <Carousel
          value={products}
          numScroll={1}
          numVisible={5}
          responsiveOptions={responsiveOptions}
          itemTemplate={ProductCard}
          showIndicators={false}
          contentClassName="p-d-flex p-jc-center"
          className="my-4"
          indicatorsContentClassName="d-none"
        />
      </div>

      {/*<div className="row gap-4 mt-4 justify-content-around" ref={parentRef}>*/}
      {/*  {products.map((product) => (*/}
      {/*    <ProductCard key={product.id} product={product} />*/}
      {/*  ))}*/}
      {/*</div>*/}
    </>
  );
};

export default productCardList;
