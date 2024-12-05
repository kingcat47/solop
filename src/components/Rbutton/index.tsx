import styles from "./styles.module.scss";
import retryImg from "/retry.svg";
export default function Retrybox({ onClick }: { onClick: () => void }) {
  return (
    <>
      <div onClick={onClick} className={styles.container}>
        <img src={retryImg} className={styles.img}></img>
      </div>
    </>
  );
}
