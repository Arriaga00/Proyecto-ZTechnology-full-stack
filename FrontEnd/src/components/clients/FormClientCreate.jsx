import { Input } from "antd";
import { useContext } from "react";
import Context from "../../context/Context";

const FormClientCreate = ({ setNewClient, newClient }) => {
  const { infoUser } = useContext(Context);
  const handleChange = (e) => {
    setNewClient({
      ...newClient,
      [e.target.name]: e.target.value,
      id_user: infoUser.user.id,
    });
  };

  return (
    <>
      <form action="" className="formProduct">
        <Input
          name="name"
          id="names"
          type="text"
          prefix={"📄"}
          placeholder="Names"
          onChange={handleChange}
        />
        <Input
          name="email"
          id=""
          type="email"
          prefix={"@"}
          placeholder="Email"
          onChange={handleChange}
        />
        <Input
          name="id_user"
          id="id_user"
          type="text"
          prefix={"👤"}
          placeholder="Register for"
          value={infoUser.user.id}
          disabled
        />
        <Input
          name="phone"
          id="phone"
          type="number"
          prefix={"📱"}
          placeholder="Phone"
          onChange={handleChange}
        />
      </form>
    </>
  );
};

export default FormClientCreate;
