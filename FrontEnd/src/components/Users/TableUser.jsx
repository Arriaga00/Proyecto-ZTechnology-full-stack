import { Button, Popconfirm, Space, Table, Tag, message } from "antd";
import { useContext } from "react";
import Context from "../../context/Context";

const TableManagers = ({ infoUserSave }) => {
  const { infoUser } = useContext(Context);

  const confirm = (record) => {
    fetch(
      `https://ztechnology.up.railway.app//api/usuarios/eliminar-usuario/${record.id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${infoUser.token}`,
        },
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        message.success("Successfully removed");
        setTimeout(() => {
          window.location.reload();
        }, 3000);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const cancel = (e) => {
    console.log(e.target);
    message.error("Operation cancelled");
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Document",
      dataIndex: "document",
      key: "document",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Phone",
      dataIndex: "phone",
      key: "phone",
    },
    {
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Role",
      key: "role",
      dataIndex: "role",
      render: (_, { role }) => (
        <>
          {role.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
  ];

  if (infoUser.user.id_roles === 1) {
    columns.push({
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <a>Edit</a>
          <Popconfirm
            title="Delete the User"
            description="Are you sure to delete this User?"
            onConfirm={() => confirm(record)}
            onCancel={cancel}
            okText="Yes"
            cancelText="No"
            recordKey={record.id}
          >
            <Button danger>Delete</Button>
          </Popconfirm>
        </Space>
      ),
    });
  }

  if (infoUser.user.id_roles === 1) {
    columns.splice(4, 0, {
      title: "Password",
      dataIndex: "password",
      key: "password",
    });
  }
  return (
    <>
      <div style={{ overflowX: "auto", backgroundColor: "#ffffff" }}>
        <Table columns={columns} dataSource={infoUserSave} />
      </div>
    </>
  );
};

export default TableManagers;
