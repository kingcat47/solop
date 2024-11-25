import React from "react";
import styles from "./styles.module.scss";

interface ShowContainerProps {
  children?: React.ReactElement;
}

export default function ShowContainer({ children }: ShowContainerProps) {
  return (
    <>
      <div className={styles.container}>{children}</div>
    </>
  );
}
