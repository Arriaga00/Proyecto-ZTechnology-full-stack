// RouterPrincipal.js
import { Route, Routes, Navigate } from "react-router-dom";
import Login from "../components/Login";
import RouterUser from "./RouterUser";
import PrivateRoute from "./PrivateRoute";
import { useContext, useEffect } from "react";
import Context from "../context/Context";

const RouterPrincipal = () => {
  const { setInfoUser } = useContext(Context);

  const PersistenceSession = () => {
    const storage = localStorage.getItem("infoUser");
    if (storage) {
      const user = JSON.parse(storage);
      setInfoUser(user);
    }
  };

  useEffect(() => {
    PersistenceSession();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/auth" element={<Login />} />
      <Route element={<PrivateRoute />}>
        <Route path="/user/*" element={<RouterUser />} />
      </Route>
      <Route path="/*" element={<Navigate to={"/auth"} />} />
    </Routes>
  );
};

export default RouterPrincipal;
