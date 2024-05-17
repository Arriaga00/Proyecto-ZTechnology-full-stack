import { PlusOutlined } from "@ant-design/icons";
import { Divider, Tag } from "antd";
import TableOrders from "../components/Orders/TableOrders";
import GraficOrder from "../components/Orders/GraficOrder";
import { useContext, useState } from "react";
import QuoteOrder from "../components/Orders/QuoteOrder";
import DrawerDetailOrder from "../components/Orders/DetailOrder/DrawerDetailOrder";
import Context from "../context/Context";

const Order = () => {
  const [activeForm, setActiveForm] = useState(true);
  const { orders } = useContext(Context);
  return (
    <>
      <section className="newOrder">
        <div className="order-Card">
          <article
            className="orderCreadte"
            onClick={() => setActiveForm(false)}
          >
            <h1>New Quote</h1>
            <PlusOutlined />
          </article>

          <GraficOrder />
        </div>
        {activeForm ? (
          <>
            <Divider orientation="left">
              List orders{" "}
              {
                <Tag bordered={false} color="magenta">
                  {orders.length}
                </Tag>
              }
            </Divider>
            <TableOrders />
          </>
        ) : (
          <>
            <Divider />
            <QuoteOrder />
          </>
        )}
        <aside>
          <DrawerDetailOrder />
        </aside>
      </section>
    </>
  );
};

export default Order;
