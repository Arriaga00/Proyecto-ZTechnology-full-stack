import { Button, Divider, message } from "antd";
import FormCreateOrder from "./FormCreateOrder";
import { DeleteOutlined } from "@ant-design/icons";
import { ConfirmBtn } from "../Notificacion";
import { useContext, useState } from "react";
import Context from "../../context/Context";
import SelectClientOrder from "./SelectClientOrder";

const QuoteOrder = () => {
  const { addProductToQuote, setAddProductToQuote, infoUser, orders } =
    useContext(Context);
  const [client, setClient] = useState(null);

  const totalPrice = addProductToQuote.reduce((sum, item) => {
    return sum + item.price * item.quantity;
  }, 0);

  const orderSum = Array.isArray(orders) ? orders.length + 1 : 1;

  const arryProducts = addProductToQuote.map((el) => {
    return {
      id_product: el.id_product,
      quantity: el.quantity,
    };
  });

  const sendPlaceOrder = {
    id_order: orderSum,
    id_client: client ? client.id : null,
    products: arryProducts,
    total_price: totalPrice,
    id_user: infoUser.user.id,
  };

  console.log(sendPlaceOrder);

  const confirm = (productToDelete) => {
    const updatedProducts = addProductToQuote.filter(
      (product) => product.id_product !== productToDelete.id_product
    );
    setAddProductToQuote(updatedProducts);
  };

  const cancel = () => {
    console.log("cancel");
  };

  const sendOrder = () => {
    fetch("http://localhost:5000/api/order/savOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${infoUser.token}`,
      },
      body: JSON.stringify(sendPlaceOrder),
    })
      .then((res) => res.json())
      .then((res) => {
        message.success("The order was shipped successfully");
        console.log(res),
          setTimeout(() => {
            window.location.reload();
          }, 2500);
      })
      .catch((error) => message.error("Error:", error));
  };

  return (
    <>
      <section className="CreateOrderForm">
        <div className="ProductOrder">
          <h3>Select Product:</h3>
          <FormCreateOrder
            setAddProductToQuote={setAddProductToQuote}
            addProductToQuote={addProductToQuote}
          />
        </div>
        <div className="QuoteFormOrder">
          <div className="quoteClientOrder">
            <h3 className="titleOrderQuote">Quote 📄</h3>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                width: "20rem",
                gap: "1rem",
              }}
            >
              <p style={{ fontWeight: "bold" }}>Client: </p>
              <SelectClientOrder setClient={setClient} />
            </div>
          </div>

          <div className="QouteInvoices">
            {addProductToQuote.map((product) => {
              return (
                <div key={product.id_product}>
                  <Divider style={{ margin: ".2rem 0" }} />
                  <article className="listQouteProduct">
                    <div className="divImg">
                      <img src={product.image} alt="" />
                      <p>{product.name}</p>
                    </div>
                    <div className="divPrice">
                      <div className="countProduct">
                        <ConfirmBtn
                          text={"Do you want to remove this product?"}
                          description={"Delete Product"}
                          onConfirm={() => confirm(product)}
                          onCancel={cancel}
                          position={"left"}
                        >
                          <Button icon={<DeleteOutlined />} danger></Button>
                        </ConfirmBtn>
                        <p className="quantity">{product.quantity}</p>
                        <p>|</p>
                      </div>
                      <p className="price">$ {product.price}</p>
                    </div>
                  </article>
                </div>
              );
            })}
          </div>
          <Divider />
          <div className="totalPrice">
            <p>Total :</p>
            <p className="price">$ {totalPrice}</p>
          </div>
          <div className="PlaceOrder">
            <ConfirmBtn
              text={"Do you want to place your order?"}
              description={"Send order"}
              position={"topRight"}
              onCancel={cancel}
              onConfirm={sendOrder}
            >
              <Button
                type="primary"
                style={{
                  padding: "0 4rem",
                  fontWeight: "bold",
                }}
              >
                Place Order
              </Button>
            </ConfirmBtn>
          </div>
        </div>
      </section>
    </>
  );
};

export default QuoteOrder;
