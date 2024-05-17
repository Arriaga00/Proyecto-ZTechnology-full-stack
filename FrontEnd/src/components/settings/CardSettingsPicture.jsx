import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

const CardSettingsPicture = () => {
  return (
    <>
      <article className="CardSettingsPicture">
        <div className="ProfileSettings">
          <h3>Image Profile</h3>
          <p>accepted files: JPG,PNG,TIFF</p>
        </div>
        <img src="https://i.ibb.co/zFYKcSC/adios.png" alt="img" />
        <Upload>
          <Button icon={<UploadOutlined />}>Click to Upload</Button>
        </Upload>
        <Button danger style={{ padding: "0 3rem" }}>
          Delete
        </Button>
      </article>
    </>
  );
};

export default CardSettingsPicture;
