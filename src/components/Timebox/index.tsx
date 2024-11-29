import { useState, useEffect } from "react";
import styles from "./styles.module.scss";

interface TimeBoxProps {
  movelist: number;
  onTimeOut: () => void;
}

export default function TimeBox({ movelist, onTimeOut }: TimeBoxProps) {
  const [ttt, setTtt] = useState(60);
  const [stop, setstop] = useState(false);

  // 레벨 바뀔 때마다 시간 초기화
  useEffect(() => {
    setTtt(60);
    setstop(false);
  }, [movelist]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (stop === false) {
        setTtt((prevTtt) => {
          const newTtt = prevTtt - 0.01;

          if (newTtt <= 0) {
            clearInterval(intervalId);
            console.log("탈락");
            onTimeOut(); // 부모 컴포넌트에 시간 초과 알림
            setstop(true);
            return 0;
          }

          return newTtt;
        });
      }
    }, 10);

    // 컴포넌트 언마운트 시 인터벌 정리
    return () => clearInterval(intervalId);
  }, [movelist, onTimeOut, stop]);

  return <div className={styles.container}>{ttt.toFixed(2)}</div>;
}
