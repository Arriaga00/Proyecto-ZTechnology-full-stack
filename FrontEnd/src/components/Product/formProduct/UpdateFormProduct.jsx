import { Input } from "antd";

const UpdateFormProduct = ({ setUpdateProduct, updateProduct }) => {
  const handleChange = (e) => {
    setUpdateProduct({
      ...updateProduct,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form className="UpdateFormProduct">
        <Input
          name={"name"}
          placeholder="Product name"
          id="productName"
          type="text"
          prefix={"📄"}
          onChange={handleChange}
          value={updateProduct.name}
        />
        <Input
          name={"description"}
          placeholder="Product description"
          id="description"
          type="text"
          prefix={"📄"}
          onChange={handleChange}
          value={updateProduct.description}
        />
        <Input
          name={"price"}
          placeholder="Price"
          id="description"
          type="number"
          prefix={"💵"}
          onChange={handleChange}
          value={updateProduct.price}
        />
        <Input
          name={"image"}
          placeholder="Image url"
          id="image"
          type="text"
          prefix={"📷"}
          onChange={handleChange}
          value={updateProduct.image}
        />
      </form>
    </>
  );
};

export default UpdateFormProduct;
