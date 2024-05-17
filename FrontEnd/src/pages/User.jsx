import { Divider, Modal, Spin, Tag, message } from "antd";
import UsersCard from "../components/Users/UsersCard";
import TableUser from "../components/Users/TableUser";
import { useContext, useState } from "react";
import FormUser from "../components/Users/formUser/FormUser";
import Context from "../context/Context";
import { LoadingOutlined } from "@ant-design/icons";

const Users = () => {
  const { infoUserSave, infoUser } = useContext(Context);

  const [userRol, setUserRol] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form, setForm] = useState({
    document: "",
    names: "",
    email: "",
    password: "",
    confirmPassword: "",
    cellphone: "",
    address: "",
    age: "",
    photo: "",
    id_roles: "",
  });

  if (!infoUser) {
    return (
      <Spin
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

  const handleCancel = () => {
    setIsModalOpen(false);
    setUserRol("");
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    setUserRol("");
    fetch("https://ztechnology.up.railway.app/api/usuarios/guardar-usuario", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${infoUser.token}`,
      },
      body: JSON.stringify(form),
    })
      .then((res) => res.json())
      .then((res) => {
        message.success("The user was successfully created");
        console.log(res),
          setTimeout(() => {
            window.location.reload();
          }, 3000);
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <>
      <section className="user-Responsive">
        {infoUser.user.id_roles === 1 ? (
          <div className="createRol">
            <UsersCard
              title={"Admin"}
              description={"Create Admin"}
              img={"https://api.dicebear.com/7.x/miniavs/svg?seed=1"}
              showModal={showModal}
              setUserRol={setUserRol}
              keyRol={1}
            />
            <UsersCard
              title={"Manager"}
              description={"Create Manager"}
              img={"https://api.dicebear.com/7.x/miniavs/svg?seed=8"}
              showModal={showModal}
              setUserRol={setUserRol}
              keyRol={2}
            />
          </div>
        ) : null}

        <Divider orientation="left">
          List users{" "}
          {
            <Tag bordered={false} color="purple">
              {infoUserSave.length}
            </Tag>
          }
        </Divider>
        <div style={{ width: "100%" }}>
          <TableUser infoUserSave={infoUserSave} />
        </div>
      </section>
      <Modal
        title={"Create " + userRol.title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="Create"
      >
        <FormUser userRol={userRol.keyRol} setForm={setForm} form={form} />
      </Modal>
    </>
  );
};

export default Users;
