import { Button, Divider } from "antd";
import CardSettingsPicture from "../components/settings/CardSettingsPicture";
import CardSettingsInformation from "../components/settings/CardSettingsInformation";

const Settings = () => {
  return (
    <>
      <section className="settingContainer">
        <CardSettingsPicture />
        <Divider />
        <CardSettingsInformation />
        <Divider />
        <div style={{ margin: "1rem", textAlign: "end" }}>
          <Button danger>Delete Account</Button>
        </div>
      </section>
    </>
  );
};

export default Settings;
