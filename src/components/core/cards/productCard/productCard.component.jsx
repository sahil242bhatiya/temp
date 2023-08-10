import "./productCard.styles.scss";

const productCard = ({ product }) => {
  const { title, description, price, image, className } = product;
  return (
    <div className={`product-card ${className}`}>
      <div className="card__image">
        <img loading="lazy" src={image} alt={title} />
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
