import { Button, Card, Select } from "antd";
import { useContext, useState } from "react";
import Context from "../../context/Context";

const FormCreateOrder = () => {
  const { infoCard, addProductToQuote, setAddProductToQuote } =
    useContext(Context);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const infoProduct =
    infoCard && infoCard.product
      ? infoCard.product.map((product) => {
          return {
            value: product.id_product,
            label: product.name,
          };
        })
      : [];

  const handleChange = (value) => {
    const product = infoCard.product.find(
      (product) => product.id_product === value
    );
    setSelectedProduct(product);
  };

  const sendProduct = () => {
    const exitsProduct = addProductToQuote.some(
      (product) => product.id_product === selectedProduct.id_product
    );

    if (!exitsProduct) {
      const productToAdd = {
        quantity: 1,
        id_product: selectedProduct.id_product,
        image: selectedProduct.image,
        name: selectedProduct.name,
        price: Number(selectedProduct.price),
      };
      setAddProductToQuote([...addProductToQuote, productToAdd]);
    } else {
      const products = addProductToQuote.map((product) => {
        if (product.id_product === selectedProduct.id_product) {
          product.quantity += 1;
          return product;
        } else {
          return product;
        }
      });
      setAddProductToQuote(products);
    }
  };

  return (
    <>
      <Select
        showSearch
        style={{
          width: "100%",
          marginBottom: "1rem",
        }}
        placeholder="Search Product"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={infoProduct}
        onChange={handleChange}
      />

      {selectedProduct && (
        <div className="orderQouteFormCard">
          <Card
            title={selectedProduct.name}
            bordered={false}
            style={{
              width: 400,
            }}
          >
            <img
              src={selectedProduct.image}
              alt="img"
              style={{ width: "100%", height: "15rem" }}
            />
            <p>{selectedProduct.description}</p>
            <div className="divCardPriceAndBtnOrder">
              <p className="price">${selectedProduct.price}</p>
              <Button type="primary" ghost onClick={sendProduct}>
                Add
              </Button>
            </div>
          </Card>
        </div>
      )}
    </>
  );
};

export default FormCreateOrder;
