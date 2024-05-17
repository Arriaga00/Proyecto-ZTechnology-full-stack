import { Input } from "antd";
import {
  CameraOutlined,
  HomeOutlined,
  LockOutlined,
  PhoneOutlined,
  UserOutlined,
} from "@ant-design/icons";

const FormUser = ({ userRol, setForm, form }) => {
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
      id_roles: userRol,
    });
  };

  return (
    <>
      <form className="formCreateUser">
        <Input
          name="document"
          placeholder="Document"
          type="number"
          prefix={"📄"}
          onChange={handleChange}
          required
        />
        <Input
          name="names"
          placeholder="Name and LastName"
          prefix={<UserOutlined />}
          onChange={handleChange}
          required
        />
        <Input
          name="email"
          placeholder="Email"
          type="email"
          prefix={"@"}
          onChange={handleChange}
          required
        />
        <Input
          name="password"
          placeholder="password"
          type="password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          onChange={handleChange}
          required
        />
        <Input
          name="confirmPassword"
          placeholder="Confirm password"
          type="password"
          prefix={<LockOutlined className="site-form-item-icon" />}
          onChange={handleChange}
          required
        />
        <Input
          name="cellphone"
          placeholder="cellphone"
          type="text"
          prefix={<PhoneOutlined />}
          onChange={handleChange}
          required
        />
        <Input
          name="address"
          placeholder="address"
          type="text"
          prefix={<HomeOutlined />}
          onChange={handleChange}
          required
        />
        <Input
          name="age"
          placeholder="age"
          type="number"
          prefix={<UserOutlined />}
          onChange={handleChange}
          required
        />
        <Input
          name="photo"
          placeholder="photo url"
          type="text"
          prefix={<CameraOutlined />}
          onChange={handleChange}
          required
        />
        <Input
          name="rol"
          placeholder="Rol"
          type="text"
          value={userRol}
          disabled
        />
      </form>
    </>
  );
};

export default FormUser;
