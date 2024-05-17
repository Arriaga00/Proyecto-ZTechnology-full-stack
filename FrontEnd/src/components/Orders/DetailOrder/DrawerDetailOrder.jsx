import { Divider, Drawer, Spin, Tag } from "antd";
import { useContext } from "react";
import Context from "../../../context/Context";

import { LoadingOutlined } from "@ant-design/icons";

const DrawerDetailOrder = () => {
  const {
    openDraweOrderDetail,
    setOpenDraweOrderDetail,
    orderDetailForId,
    orderDetailIdDrawer,
  } = useContext(Context);

  if (!orderDetailForId.detail) {
    return (
      <Spin
        style={{ display: "none" }}
        indicator={
          <LoadingOutlined
            style={{
              fontSize: 24,
            }}
            spin
          />
        }
      />
    );
  }

  const onClose = () => {
    setOpenDraweOrderDetail(false);
  };
  const totalPrice = orderDetailIdDrawer.total;

  const styleStatus =
    orderDetailIdDrawer.status === "cancelled"
      ? "red"
      : orderDetailIdDrawer.status === "completed"
      ? "green"
      : "blue";

  return (
    <>
      <Drawer
        title={`Order Detail`}
        placement="right"
        size="large"
        onClose={onClose}
        open={openDraweOrderDetail}
      >
        <h3>Order: {orderDetailIdDrawer.key}</h3>
        <div className="header-detailOrder">
          <p>Client : {orderDetailIdDrawer.client}</p>
          <p>Business: {orderDetailIdDrawer.user} </p>
          <div>
            <p>
              {" "}
              <Tag
                color={styleStatus}
                style={{ padding: ".2rem 2rem", fontWeight: "bold" }}
              >
                {orderDetailIdDrawer.status}
              </Tag>
            </p>
          </div>
        </div>
        <div className="QouteInvoices">
          {orderDetailForId.detail.map((product) => {
            let products = product.product;
            return (
              <div key={products.id_product}>
                <Divider style={{ margin: ".2rem 0" }} />
                <article className="listQouteProduct">
                  <div className="divImg">
                    <img src={products.image} alt="" />
                    <p>{products.name}</p>
                  </div>
                  <div className="divPrice">
                    <div className="countProduct">
                      <p className="quantity">{product.quantity}</p>
                      <p>|</p>
                    </div>
                    <p className="price">$ {products.price}</p>
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
      </Drawer>
    </>
  );
};

export default DrawerDetailOrder;
