import { Divider, Modal, Table, message } from "antd";
import { useContext, useState } from "react";
import Context from "../context/Context";
import { PlusOutlined } from "@ant-design/icons";
import FormClientCreate from "../components/clients/FormClientCreate";
const { Column } = Table;

const Clients = () => {
  const { infoClient, infoUser } = useContext(Context);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [newClient, setNewClient] = useState({
    name: "",
    email: "",
    id_user: "",
    phone: "",
  });

  const handleOk = () => {
    setIsModalOpen(false);
    fetch("https://ztechnology.up.railway.app/api/client/createClient", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${infoUser.token}`,
      },
      body: JSON.stringify(newClient),
    })
      .then((res) => res.json())
      .then((res) => {
        message.success("The client was successfully created");
        console.log(res);
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((e) => {
        message.error("! Error: Your client could not be created");
        console.log(e);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <article className="newClient" onClick={() => setIsModalOpen(true)}>
        <h1>New Client</h1>
        <PlusOutlined />
      </article>
      <Divider />
      <Table
        dataSource={infoClient}
        style={{ overflowX: "auto", backgroundColor: "#ffffff" }}
      >
        <Column title="ID" dataIndex="id" key="id" />
        <Column title="Names" dataIndex="names" key="names" />
        <Column title="Phone" dataIndex="phone" key="phone" />
        <Column title="Email" dataIndex="email" key="email" />
        <Column
          title="Registrado por"
          dataIndex="id_user"
          key="id_user"
          className="registerFor"
        />
      </Table>

      <Modal
        title={"Create new Client"}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Create Client"
      >
        <FormClientCreate newClient={newClient} setNewClient={setNewClient} />
      </Modal>
    </>
  );
};

export default Clients;
