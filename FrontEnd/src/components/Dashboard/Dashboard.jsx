import { useContext, useEffect, useState } from "react";
import RouterMain from "../../router/RouterMain";
import Main from "./Main";
import MenuDashboarVertical from "./MenuDashboarVertical";
import MenuDashboardDer from "./MenuDashboardDer";
import Context from "../../context/Context";
import { MenuOutlined } from "@ant-design/icons";
import { Drawer } from "antd";

const Dashboard = () => {
  const { updateTitle } = useContext(Context);
  const [isScreenSmall, setIsScreenSmall] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 850px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  }, []);

  const handleMediaQueryChange = (mediaQuery) => {
    setIsScreenSmall(mediaQuery.matches);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Drawer
        title="ZTechnology"
        placement={"left"}
        closable={true}
        onClose={onClose}
        open={open}
        key={"left"}
      >
        <MenuDashboarVertical />
      </Drawer>
      <Main>
        <section className="dashboard">
          <aside className="menu">
            <MenuDashboarVertical />
          </aside>
          <div className="board">
            <div className="MenuDashboar">
              <h1 className="tituloMenuDer">{updateTitle}</h1>
              <div className="MenuDashboarIzq">
                {isScreenSmall && <MenuOutlined onClick={showDrawer} />}
                <MenuDashboardDer />
              </div>
            </div>
            <div className="main">
              <RouterMain />
            </div>
          </div>
        </section>
      </Main>
    </>
  );
};

export default Dashboard;
