import styles from "./styles.module.scss";

interface CheckBoxProps {
  result?: number;
  text?: string;
}

export default function CheckBox({ result, text }: CheckBoxProps) {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.list}>
          {text}
          {result}
        </div>
      </div>
    </>
  );
}
