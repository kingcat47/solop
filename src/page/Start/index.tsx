import { useNavigate } from "react-router-dom";
import ButtonBox from "../../components/ButtonBox";
import styles from "./styles.module.scss";

export default function Start() {
  const navigation = useNavigate();
  function getstart() {
    navigation("/game");
  }
  return (
    <>
      <div className={styles.container}>
        <div className={styles.main}>
          <ButtonBox
            className={styles.start}
            text={"Strat"}
            onClick={getstart}
          ></ButtonBox>
        </div>
      </div>
    </>
  );
}
