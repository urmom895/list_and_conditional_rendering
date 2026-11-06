import "../styles/ProductCard.css";
function ProductCard({ name, price, salePrice, stock }) {
  const finalPrice = salePrice ?? price;

  let stockLabel = "";
  let stockColor = "";

  if (stock === 0) {
    stockLabel = "Sold out";
    stockColor = "red";
  } else if (stock <= 5) {
    stockLabel = `Only ${stock} left!`;
    stockColor = "orange";
  } else {
    stockLabel = "In stock";
    stockColor = "green";
  }

  return (
    <div className="product-card">
      <h3>{name}</h3>

      <p style={{ color: stockColor }}>{stockLabel}</p>

      {salePrice !== undefined ? (
        <div>
          <p style={{ textDecoration: "line-through" }}>
            ${price.toFixed(2)}
          </p>

          <p>${salePrice.toFixed(2)}</p>

          <span className="sale">SALE</span>
        </div>
      ) : (
        <p>${price.toFixed(2)}</p>
      )}

      {finalPrice >= 35 && <p>Free shipping</p>}

      <button disabled={stock === 0}>
        {stock === 0 ? "Sold out" : "Add to cart"}
      </button>
    </div>
  );
}

export default ProductCard;