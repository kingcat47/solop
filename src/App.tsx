import { Outlet, useNavigate } from "react-router-dom";
import styles from "./styles.module.scss";
import { useEffect } from "react";

function App() {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/start");
  }, []);
  return (
    <>
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
