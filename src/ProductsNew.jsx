export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProduct(params, () => event.tarrget.reset());
  };

  return (
    <div>
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name <input name="name" type="text" />
        </div>
        <div>
          Url: <input name="Url" type="text" />
        </div>
        <div>
          Price <input name="price" type="text" />
        </div>
        <div>
          Description <input name="price" type="text" />
        </div>
        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}
