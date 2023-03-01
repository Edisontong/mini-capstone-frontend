export function ProductsShow(props) {
  return (
    <div>
      <h1>Product information</h1>
      <p>Name: {props.product.name}</p>
      <p>Url: {props.product.url}</p>
      <p>Description: {props.product.description}</p>
      <p>Price: {props.product.price}</p>
    </div>
  );
}
