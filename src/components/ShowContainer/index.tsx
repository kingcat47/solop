import React from "react";
import styles from "./styles.module.scss";

interface ShowContainerProps {
  children?: React.ReactElement;
  className?: string;
}

export default function ShowContainer({
  children,
  className,
}: ShowContainerProps) {
  return (
    <>
      <div className={[styles.container, className].join(" ")}>{children}</div>
    </>
  );
}
