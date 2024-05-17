import { Select } from "antd";
import { useContext } from "react";
import Context from "../../context/Context";

const SelectClientOrder = ({ setClient }) => {
  const { infoClient } = useContext(Context);

  const handleChange = (value) => {
    const Client = infoClient.find((client) => client.id === value);
    setClient(Client);
  };

  const client = infoClient
    ? infoClient.map((product) => {
        return {
          value: product.id,
          label: product.names,
        };
      })
    : [];
  return (
    <>
      <Select
        showSearch
        style={{
          width: "100%",
        }}
        placeholder="Search Product"
        optionFilterProp="children"
        filterOption={(input, option) => (option?.label ?? "").includes(input)}
        filterSort={(optionA, optionB) =>
          (optionA?.label ?? "")
            .toLowerCase()
            .localeCompare((optionB?.label ?? "").toLowerCase())
        }
        options={client}
        onChange={handleChange}
      />
    </>
  );
};

export default SelectClientOrder;
