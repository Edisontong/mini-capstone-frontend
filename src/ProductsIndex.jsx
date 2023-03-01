export function ProductsIndex(props) {
  return (
    <div>
      <h1>All Products</h1>
      {props.products.map((product) => (
        <div key={product.id}>
          <h2>{product.name}</h2>
          <img src={product.url} />
          <p>Description: {product.description}</p>
          <p>Price: {product.price}</p>
        </div>
      ))}
    </div>
  );
}
