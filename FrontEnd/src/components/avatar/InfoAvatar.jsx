import { Avatar, ConfigProvider, Popover, Spin } from "antd";
import { useContext } from "react";
import Context from "../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";

const InfoAvatar = () => {
  const { infoUser } = useContext(Context);

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

  const user = infoUser && infoUser.user ? infoUser.user : null;
  const text = <span className="Your">Your Information</span>;
  const content = (
    <div className="popover">
      {user ? (
        <>
          <p>
            {" "}
            <span className="infoUser">ID user:</span> {user.id}
          </p>
          <p>
            {" "}
            <span className="infoUser">Document:</span> {user.document}
          </p>
          <p>
            <span className="infoUser">Email:</span> {user.email}
          </p>
          <p>
            <span className="infoUser">Phone:</span> {user.cellphone}
          </p>
          <p>
            <span className="infoUser">Address:</span> {user.address}
          </p>
          <p>
            <span className="infoUser">Age:</span> {user.age}
          </p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );

  return (
    <>
      <ConfigProvider
        button={{
          style: {
            margin: 4,
          },
        }}
      >
        <Popover placement="bottomRight" title={text} content={content}>
          <Avatar
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
            style={{ backgroundColor: "#f56a00" }}
          />
          {user && <p className="rol">@{user.names}</p>}
        </Popover>
      </ConfigProvider>
    </>
  );
};

export default InfoAvatar;
