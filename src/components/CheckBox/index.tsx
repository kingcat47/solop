import styles from "./styles.module.scss";

interface CheckBoxProps {
  result?: number;
}

export default function CheckBox({ result }: CheckBoxProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.list}>1.{result}</div>
        <div className={styles.list}>2.{result}</div>
        <div className={styles.list}>3.{result}</div>
        <div className={styles.list}>4.{result}</div>
        <div className={styles.list}>5.{result}</div>
      </div>
    </>
  );
}
