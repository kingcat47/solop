import styles from "./styles.module.scss";

export default function ClearBox({
  className,
  onClick,
}: {
  className: string;
  onClick: () => void;
}) {
  return (
    <>
      <div className={[styles.container, className].join(" ")}>
        <p className={styles.text}>끝.축하합니다.</p>
        <div className={styles.bbiggabbunjjuk}></div>
        <div className={styles.close} onClick={onClick}>
          닫기
        </div>
      </div>
    </>
  );
}
