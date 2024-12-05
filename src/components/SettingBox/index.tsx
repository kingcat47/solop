import styles from "./styles.module.scss";
import settingImg from "../../../public/setting.svg";
export default function SettingBox() {
  return (
    <>
      <div onClick={() => {}} className={styles.container}>
        <img src={settingImg} className={styles.img}></img>
      </div>
    </>
  );
}
