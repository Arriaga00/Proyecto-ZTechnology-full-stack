import { Button, Dropdown, Space, Table, Tag, message } from "antd";
import { useContext } from "react";
import Context from "../../context/Context";
import {
  CheckCircleOutlined,
  DeleteOutlined,
  FieldTimeOutlined,
} from "@ant-design/icons";

const TableOrders = () => {
  const {
    orders,
    setOrderDetailForId,
    setOpenDraweOrderDetail,
    infoUser,
    setOrderDetailIdDrawer,
  } = useContext(Context);

  const showDetailOrder = (record) => {
    fetch(
      `http://localhost:5000/api/order_detail/consultDetailsProducts/${record}`
    )
      .then((res) => res.json())
      .then((res) => setOrderDetailForId(res))
      .catch((e) => console.log(e));
  };

  const updateStatus = (status, id_order) => {
    fetch("http://localhost:5000/api/order/updateOrder", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${infoUser.token}`,
      },
      body: JSON.stringify({ id_order, status }),
    })
      .then((res) => res.json())
      .then((res) => {
        message.success("The order has been updated");
        console.log(res),
          setTimeout(() => {
            window.location.reload();
          }, 2500);
      })
      .catch((error) => console.error("Error:", error));

    console.log({ id_order, status });
  };
  const items = (record) => [
    {
      key: "1",
      label: (
        <a onClick={() => updateStatus("completed", record.key)}>completed</a>
      ),
      icon: <CheckCircleOutlined />,
    },
    {
      key: "2",
      label: <a onClick={() => updateStatus("pending", record.key)}>pending</a>,
      icon: <FieldTimeOutlined />,
    },
    {
      key: "3",
      label: (
        <a onClick={() => updateStatus("cancelled", record.key)}>cancelled</a>
      ),
      danger: true,
      icon: <DeleteOutlined />,
    },
  ];
  const columns = [
    {
      title: "Order",
      dataIndex: "order",
      key: "order",
      render: (text) => <a style={{ fontWeight: "bold" }}>{text}</a>,
    },
    {
      title: "Client",
      dataIndex: "client",
      key: "client",
    },
    {
      title: "User",
      dataIndex: "user",
      key: "user",
    },
    {
      title: "Total Price",
      dataIndex: "total",
      key: "total",
      render: (total, record) => {
        const styles = record.status === "cancelled" ? "red" : "#569c30";
        const price = record.status === "cancelled" ? "- " : null;
        return (
          <p style={{ color: `${styles}`, fontWeight: "bold" }}>
            {price}${total}
          </p>
        );
      },
    },
    {
      title: "Status",
      key: "status",
      dataIndex: "status",
      render: (status) => {
        let color;
        if (status === "pending") {
          color = "geekblue";
        } else if (status === "completed") {
          color = "green";
        } else {
          color = "red";
        }

        return (
          <Tag color={color} key={status}>
            {status.toUpperCase()}
          </Tag>
        );
      },
    },

    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a
            onClick={() => {
              showDetailOrder(record.key);
              setOpenDraweOrderDetail(true);
              setOrderDetailIdDrawer(record);
            }}
          >
            Show details
          </a>

          <Dropdown menu={{ items: items(record) }} placement="bottom" arrow>
            <Button type="primary" ghost>
              Change status
            </Button>
          </Dropdown>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        style={{ overflowX: "auto", backgroundColor: "#ffffff" }}
        columns={columns}
        dataSource={orders}
      />
    </>
  );
};
export default TableOrders;
