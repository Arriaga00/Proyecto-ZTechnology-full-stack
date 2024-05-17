import {
  FallOutlined,
  Loading3QuartersOutlined,
  RiseOutlined,
} from "@ant-design/icons";
import { useContext } from "react";
import Context from "../../context/Context";

const GraficOrder = () => {
  const { orders } = useContext(Context);

  let pending = 0;
  let completed = 0;
  let cancelled = 0;

  orders.forEach((order) => {
    switch (order.status) {
      case "pending":
        pending++;
        break;
      case "completed":
        completed++;
        break;
      case "cancelled":
        cancelled++;
        break;
      default:
        break;
    }
  });

  return (
    <>
      <article className="orderPending">
        Pending {pending}
        <Loading3QuartersOutlined style={{ fontSize: "3rem" }} />
      </article>
      <article className="ordeCompleted">
        Completed {completed}
        <RiseOutlined style={{ fontSize: "3rem" }} />
      </article>
      <article className="orderDenied">
        cancelled {cancelled}
        <FallOutlined style={{ fontSize: "3rem" }} />
      </article>
    </>
  );
};

export default GraficOrder;
