import { Spin, Tag } from "antd";
import { Notificacion } from "../Notificacion";
import InfoAvatar from "../avatar/InfoAvatar";
import { useContext } from "react";
import Context from "../../context/Context";
import { LoadingOutlined } from "@ant-design/icons";

const MenuDashboardDer = () => {
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
  const admin =
    infoUser && infoUser.user && infoUser.user.id_roles === 1
      ? "admin"
      : "manager";

  const admin1 = admin === "admin" ? "success" : "volcano";
  return (
    <>
      <Tag
        bordered={true}
        color={admin1}
        style={{ padding: ".2rem 4rem" }}
        className="adimDashboarder"
      >
        {admin.toLocaleUpperCase()}
      </Tag>
      <Notificacion />
      <div className="infoavatar">
        <InfoAvatar />
      </div>
    </>
  );
};

export default MenuDashboardDer;
