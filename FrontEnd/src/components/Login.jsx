import { Button, Form, Input, message } from "antd";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import Logo2 from "../assets/logo2.png";
import { useContext } from "react";
import Context from "../context/Context";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { setInfoUser } = useContext(Context);

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onFinish = (values) => {
    fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(async (res) => {
        const data = await res.json();

        if (!res.ok) {
          message.error(data.msg);
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        return data;
      })
      .then((res) => {
        setInfoUser(res);
        window.localStorage.setItem("infoUser", JSON.stringify(res));
        window.localStorage.setItem("loguinUser", true);
        res.user.id_roles === 1
          ? message.success("Welcome Administrator")
          : message.success("Welcome Manager");
        setTimeout(() => {
          navigate("/user/dashboard/home");
        }, 2000);
      })
      .catch((err) => onFinishFailed(err));
  };

  return (
    <>
      <section className="loguin">
        <div className="form">
          <div className="logo">
            <img src={Logo2} alt="logo" />
          </div>
          <Form
            name="basic"
            labelCol={{
              span: 24,
            }}
            wrapperCol={{
              span: 24,
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              width: "25rem",
            }}
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
          >
            <Form.Item name="email" style={{ width: "100%" }}>
              <Input
                style={{ height: "2.5rem" }}
                type="email"
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              />
            </Form.Item>

            <Form.Item name="password" style={{ width: "100%" }}>
              <Input.Password
                style={{ height: "2.5rem", width: "100%" }}
                prefix={<LockOutlined className="site-form-item-icon" />}
                placeholder="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              />
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                style={{ fontWeight: "bold", paddingInline: "3rem" }}
              >
                Loguin
              </Button>
            </Form.Item>
          </Form>
        </div>
      </section>
    </>
  );
};

export default Login;
