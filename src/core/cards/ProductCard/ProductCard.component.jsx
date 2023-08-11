import "./ProductCard.styles.scss";
import { DeferredContent } from "primereact/deferredcontent";
import { useState } from "react";

const productCard = (props) => {
  const { title, description, price, image, className } = props;
  const [isLoading, setIsLoading] = useState(true);
  const loaded = (title) => {
    setIsLoading(false);
  };

  return (
    <div className={`product-card ${className}`}>
      <div className={isLoading ? "p-skeleton card__image" : "card__image"}>
        <DeferredContent onLoad={() => loaded(title)}>
          <img className="" loading="lazy" src={image} alt={title} />
        </DeferredContent>
      </div>
      <div className="card__content">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
        <p className="card__price">{price}</p>
      </div>
    </div>
  );
};

export default productCard;
