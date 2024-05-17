import { BellOutlined } from "@ant-design/icons";
import { Badge, ConfigProvider, Popconfirm } from "antd";

export const Notificacion = () => {
  return (
    <>
      <div>
        <Badge count={1}>
          <BellOutlined
            style={{
              fontSize: "1.5rem",
              color: "#929597",
              cursor: "pointer",
              transition: "color 0.3s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = "#568af7")}
            onMouseOut={(e) => (e.currentTarget.style.color = "#929597")}
          />
        </Badge>
      </div>
    </>
  );
};

export const ConfirmBtn = ({
  text,
  description,
  children,
  onConfirm,
  onCancel,
  position,
}) => {
  return (
    <>
      <ConfigProvider
        button={{
          style: {
            margin: 4,
          },
        }}
      >
        <Popconfirm
          placement={position}
          title={text}
          description={description}
          onConfirm={onConfirm}
          onCancel={onCancel}
          okText="Yes"
          cancelText="No"
        >
          {children}
        </Popconfirm>
      </ConfigProvider>
    </>
  );
};
