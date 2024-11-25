import styles from "./styles.module.scss";

interface ButtonBoxProps {
  text?: string;
  className?: string;
  onClick?: () => void;
}

export default function ButtonBox({
  text,
  className,
  onClick,
}: ButtonBoxProps) {
  return (
    <>
      <div
        className={[styles.container, className].join(" ")}
        onClick={onClick}
      >
        <div className={styles.text}>{text}</div>
      </div>
    </>
  );
}
