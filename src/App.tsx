import { useState } from "react";
import { Outlet } from "react-router-dom";
import styles from "./styles.module.scss";

function App() {
  return (
    <>
      <div className={styles.container}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
