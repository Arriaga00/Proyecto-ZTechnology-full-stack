import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { Card, Button, Popconfirm, message, Modal } from "antd";
import { useContext, useState } from "react";
import FormProduct from "../formProduct/FormProduct";
import Context from "../../../context/Context";
import UpdateFormProduct from "../formProduct/UpdateFormProduct";
const { Meta } = Card;

const CardProduct = ({ steNewProduct, newProduct }) => {
  const { infoUser, infoCard } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editProductModal, setEditProductModal] = useState(false);
  const [updateProduct, setUpdateProduct] = useState({
    id_product: 0,
    name: "",
    description: "",
    price: "",
    image: "",
  });

  const handleOk = () => {
    fetch("https://ztechnology.up.railway.app/api/product/guardar-producto", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${infoUser.token}`,
      },
      body: JSON.stringify(newProduct),
    })
      .then((res) => res.json())
      .then((res) => {
        message.success("The product was successfully created");
        console.log(res),
          setTimeout(() => {
            window.location.reload();
          }, 2500);
      })
      .catch((error) => console.error("Error:", error));
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const cancel = (e) => {
    console.log(e);
    message.error("Process cancelled");
    setEditProductModal(false);
  };

  const showModalEditProduct = (product) => {
    const productEdit = {
      id_product: product.id_product,
      name: product.name,
      description: product.description,
      price: product.price,
      image: product.image,
    };
    setEditProductModal(true);
    setUpdateProduct(productEdit);
  };

  const handleUpdate = (product) => {
    fetch("http://localhost:5000/api/product/actualizar-producto", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${infoUser.token}`,
      },
      body: JSON.stringify(product),
    })
      .then((res) => res.json())
      .then((res) => {
        message.success("The product has been updated");
        console.log(res),
          setTimeout(() => {
            window.location.reload();
          }, 2500);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <div className="newProduct">
        <article onClick={showModal}>
          <h1>New Product</h1>
          <PlusOutlined />
        </article>
      </div>
      {infoCard &&
        infoCard.product &&
        infoCard.product.map((el) => {
          const confirm = (e) => {
            fetch(
              `https://ztechnology.up.railway.app//api/product/eleminar-producto/${el.id_product}`,
              {
                method: "DELETE",
                headers: {
                  Authorization: `Bearer ${infoUser.token}`,
                },
              }
            )
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
                message.success("The product was successfully removed");
                setTimeout(() => {
                  window.location.reload();
                }, 2000);
              })
              .catch((error) => {
                console.error("Error:", error);
              });
            console.log(e);
          };

          return (
            <Card
              key={el.id_product}
              style={{
                width: 250,
                margin: "1rem",
              }}
              cover={
                <img
                  alt={el.name}
                  src={el.image}
                  style={{
                    width: "100%",
                    height: "11rem",
                    objectPosition: "center",
                  }}
                />
              }
              actions={[
                <Popconfirm
                  key={el.id_product}
                  title="Delete the product"
                  description={`Are you sure to delete this ${el.name}`}
                  onConfirm={confirm}
                  onCancel={cancel}
                  okText="Yes"
                  cancelText="No"
                >
                  <Button danger>Delete</Button>
                </Popconfirm>,
                <EditOutlined
                  key="edit"
                  onClick={() => showModalEditProduct(el)}
                />,
              ]}
            >
              <Meta title={el.name} description={el.description} />
              <p className="price">$ {el.price}</p>
            </Card>
          );
        })}

      <Modal
        title="Create Product"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Create"
      >
        <FormProduct steNewProduct={steNewProduct} newProduct={newProduct} />
      </Modal>

      <Modal
        title="Update Product"
        open={editProductModal}
        okText="Update"
        onCancel={cancel}
        onOk={() => handleUpdate(updateProduct)}
      >
        <UpdateFormProduct
          setUpdateProduct={setUpdateProduct}
          updateProduct={updateProduct}
        />
      </Modal>
    </>
  );
};

export default CardProduct;
