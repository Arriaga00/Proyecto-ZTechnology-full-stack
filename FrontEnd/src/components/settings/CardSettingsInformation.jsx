import { Button, Input, Spin } from "antd";
import Context from "../../context/Context";
import { useContext, useEffect, useState } from "react"; // Asegúrate de importar useEffect
import { LoadingOutlined } from "@ant-design/icons";

const CardSettingsInformation = () => {
  const { infoUser } = useContext(Context);
  const [disable, setDisable] = useState(true);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    if (infoUser && infoUser.user) {
      setUserInfo(infoUser.user);
    }
  }, [infoUser]);

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

  const sendInfo = () => {
    console.log("Send");
  };

  const handleChange = (e) => {
    setUserInfo({
      ...userInfo,
      [e.target.name]: e.target.value,
      id: userInfo.id,
    });
  };

  return (
    <>
      <section className="CardSettingsPictureinput">
        <div className="ProfileSettings">
          <h3>Personal Information</h3>
          <p>Not show on public profile</p>

          <div className="btnSaveOnCancel">
            {disable ? (
              <Button onClick={() => setDisable(false)}>
                Edit Informatcion
              </Button>
            ) : (
              <>
                <Button danger onClick={() => setDisable(true)}>
                  Cancel
                </Button>
                <Button onClick={sendInfo}>Save</Button>
              </>
            )}
          </div>
        </div>
        <form action="" className="formSettingPersonalInfo">
          <Input name="id" value={userInfo.id} disabled />
          <Input
            name="document"
            value={userInfo.document}
            disabled={disable}
            onChange={handleChange}
          />
          <Input
            name="email"
            value={userInfo.email}
            disabled={disable}
            onChange={handleChange}
          />
          <Input
            name="cellphone"
            value={userInfo.cellphone}
            disabled={disable}
            onChange={handleChange}
          />
          <Input
            name="address"
            value={userInfo.address}
            disabled={disable}
            onChange={handleChange}
          />
          <Input
            name="age"
            value={userInfo.age}
            disabled={disable}
            onChange={handleChange}
          />
        </form>
      </section>
    </>
  );
};

export default CardSettingsInformation;
