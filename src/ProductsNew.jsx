export function ProductsNew() {
  return (
    <div>
      <h1>New Product</h1>
      <form>
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
