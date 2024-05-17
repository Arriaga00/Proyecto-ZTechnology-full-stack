import { Button, Divider, Menu, message } from "antd";
import Logo from "../../assets/logo.png";
import {
  HomeOutlined,
  LogoutOutlined,
  PieChartOutlined,
  ProductOutlined,
  SettingOutlined,
  ShoppingCartOutlined,
  UserSwitchOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import Context from "../../context/Context";

const MenuDashboarVertical = () => {
  const { setUpdateTitle } = useContext(Context);

  const [keySelect, setKeySelect] = useState(
    localStorage.getItem("keySelect") || "1"
  );

  useEffect(() => {
    localStorage.setItem("keySelect", keySelect);
  }, [keySelect]);

  const getItem = (label, key, icon, children, type) => {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  };

  const handleClik = () => {
    message.success("Closed Section");
    setTimeout(() => {
      localStorage.clear();
      window.location.href = "https://ztecnholopgy.vercel.app/auth";
    }, 2000);
  };

  const items = [
    getItem("Dashboard", "sub1", <HomeOutlined />, [
      getItem(
        <NavLink
          to={"/user/dashboard/home"}
          onClick={() => setUpdateTitle("dashboard")}
        >
          home
        </NavLink>,
        "1",
        <PieChartOutlined />
      ),
      getItem(
        <NavLink
          to={"/user/dashboard/products"}
          onClick={() => setUpdateTitle("products")}
        >
          products
        </NavLink>,
        "2",
        <ProductOutlined />
      ),
      getItem(
        <NavLink
          to={"/user/dashboard/order"}
          onClick={() => setUpdateTitle("order")}
        >
          order
        </NavLink>,
        "3",
        <ShoppingCartOutlined />
      ),
      getItem(
        <NavLink
          to={"/user/dashboard/clients"}
          onClick={() => setUpdateTitle("clients")}
        >
          clients
        </NavLink>,
        "4",
        <UserSwitchOutlined />
      ),
      getItem(
        <NavLink
          to={"/user/dashboard/users"}
          onClick={() => setUpdateTitle("Users")}
        >
          Users
        </NavLink>,
        "5",
        <UserOutlined />
      ),
      getItem(
        <NavLink
          to={"/user/dashboard/settings"}
          onClick={() => setUpdateTitle("settings")}
        >
          settings
        </NavLink>,
        "6",
        <SettingOutlined />
      ),
    ]),
  ];

  const selectItem = (e) => {
    setKeySelect(e.key.toString());
  };

  return (
    <>
      <div className="menuVertical">
        <div className="logoMenu">
          <img src={Logo} alt="logo" />
        </div>
        <Divider />
        <Menu
          style={{
            width: "100%",
          }}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[keySelect]}
          mode="inline"
          items={items}
          onSelect={selectItem}
        />
      </div>
      <div className="divLogout">
        <Button
          type="primary"
          className="btnLogout"
          danger
          ghost
          onClick={handleClik}
          icon={<LogoutOutlined />}
        >
          Logout{" "}
        </Button>
      </div>
    </>
  );
};

export default MenuDashboarVertical;
