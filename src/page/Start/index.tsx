import ButtonBox from "../../components/ButtonBox";
import styles from "./styles.module.scss";

export default function Start() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <ButtonBox className={styles.start} text={"Strat"}></ButtonBox>
        </div>
      </div>
    </>
  );
}
