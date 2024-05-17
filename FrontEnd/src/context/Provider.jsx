import { useEffect, useState } from "react";
import Context from "./Context";

const Provider = ({ children }) => {
  const [updateTitle, setUpdateTitle] = useState("Dashboard");
  // 👇🏻 State para guardar la información de las ordenes
  const [orders, setOrders] = useState([]);
  // 👇🏻 State para mostrar la información de los productos
  const [infoCard, setInfoCard] = useState([]);
  // 👇🏻 State para mostrar la información de los usuarios
  const [infoUser, setInfoUser] = useState([]);
  // 👇🏻 State para guardar la información de los usuarios
  const [infoUserSave, setInfoUserSave] = useState([]);
  // 👇🏻 State para guardar la información de los clientes
  const [infoClient, setInfoClient] = useState([]);
  // 👇🏻 State para agregar productos al carrito de compras
  const [addProductToQuote, setAddProductToQuote] = useState([]);

  const [orderDetailForId, setOrderDetailForId] = useState([]);

  const [openDraweOrderDetail, setOpenDraweOrderDetail] = useState(false);

  const [orderDetailIdDrawer, setOrderDetailIdDrawer] = useState([]);

  const getDataProduct = () => {
    // -> llamando a todos los productos
    fetch("http://localhost:5000/api/product/consultar-productos")
      .then((res) => res.json())
      .then((res) => {
        setInfoCard(res);
      });
  };

  const getDataUsers = () => {
    // ->  llamando a todos los usuarios para luego mostrarlo en una tabla
    fetch("http://localhost:5000/api/usuarios/consultar-usuarios")
      .then((res) => res.json())
      .then((res) => {
        const formattedData = res.users.map((user) => {
          let role = user.id_roles === 1 ? "Admin" : "Manager";
          return {
            key: user.id,
            id: user.id,
            document: user.document,
            name: user.names,
            email: user.email,
            password: user.confirmPassword,
            age: user.age,
            phone: user.cellphone,
            address: user.address,
            role: [role],
          };
        });
        setInfoUserSave(formattedData);
      });
  };

  const getDataClients = () => {
    fetch("http://localhost:5000/api/client/clientAll")
      .then((res) => res.json())
      .then((res) => {
        const formattedData = res.clients.map((client) => {
          return {
            key: client.id_client,
            id: client.id_client,
            names: client.name,
            email: client.email,
            id_user: client.user.names,
            phone: client.phone,
          };
        });
        setInfoClient(formattedData);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const getDataOrder = () => {
    fetch("http://localhost:5000/api/order/ordersAll")
      .then((res) => res.json())
      .then((res) => {
        const formattedData = res.orders.map((order) => {
          return {
            key: order.id_order,
            order: order.id_order,
            client: order.client.name,
            user: order.user.names,
            total: order.total_price,
            status: order.status,
          };
        });
        setOrders(formattedData);
      })
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getDataProduct();
    getDataUsers();
    getDataClients();
    getDataOrder();
  }, []);

  return (
    <>
      <Context.Provider
        value={{
          infoUser,
          setInfoUser,
          setInfoCard,
          infoCard,
          setInfoUserSave,
          infoUserSave,
          setInfoClient,
          infoClient,
          setUpdateTitle,
          updateTitle,
          addProductToQuote,
          setAddProductToQuote,
          orders,
          setOrders,
          orderDetailForId,
          setOrderDetailForId,
          openDraweOrderDetail,
          setOpenDraweOrderDetail,
          orderDetailIdDrawer,
          setOrderDetailIdDrawer,
        }}
      >
        {children}
      </Context.Provider>
    </>
  );
};

export default Provider;
