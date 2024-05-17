import { Input } from "antd";

const FormProduct = ({ steNewProduct, newProduct }) => {
  const handleChange = (e) => {
    steNewProduct({
      ...newProduct,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <>
      <form className="formProduct">
        <Input
          name={"name"}
          placeholder="Product name"
          id="productName"
          type="text"
          prefix={"📄"}
          onChange={handleChange}
        />
        <Input
          name={"description"}
          placeholder="Product description"
          id="description"
          type="text"
          prefix={"📄"}
          onChange={handleChange}
        />
        <Input
          name={"price"}
          placeholder="Price"
          id="description"
          type="number"
          prefix={"💵"}
          onChange={handleChange}
        />
        <Input
          name={"image"}
          placeholder="Image url"
          id="image"
          type="text"
          prefix={"📷"}
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default FormProduct;
