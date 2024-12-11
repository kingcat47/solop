import { useState, useEffect } from "react";
import ShowContainer from "../../components/ShowContainer";
import styles from "./styles.module.scss";
import EditorBox from "../../components/EditorBos";
import { MunJea } from "../../components/Munjea/index";
import Algorithmism from "../../algorithmism/compareStyles";
import CheckBox from "../../components/CheckBox";
import Retrybox from "../../components/Rbutton";
import SUAdio from "../../assets/audio/goodresult-82807.mp3";
import ClearBox from "../../components/ClearBox";
const usercss = `.mun {
  width: 100px;      
  height: 100px;     
  background-color: magenta;  
}`;

export default function Game() {
  const [movelist, setmovelist] = useState(1);
  const collect = MunJea().Munlist[movelist];
  const [transcss, setTranscss] = useState(usercss);
  const [Ttime, setTtime] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [storyscore, setStroyscore] = useState(0);
  // highlight-end

  const [score, setScore] = useState(0);
  const [highscore, setHighscore] = useState(0);
  const myFancyHobinAudio = new Audio(SUAdio);
  myFancyHobinAudio.volume = 0.5;
  const [lastmodal, setlastmodal] = useState(false);
  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setTranscss(value);
    }
  };

  useEffect(() => {
    if (highscore != 0) {
      localStorage.setItem("key", String(highscore));
    }
  }, [highscore]);

  useEffect(() => {
    const savedScore = localStorage.getItem("key");
    // 값이 없으면 기본값 0으로 설정

    setStroyscore(savedScore ? parseInt(savedScore) : 0);
  }, []);
  useEffect(() => {
    // 타이머가 실행 중이고 시간이 0보다 클 때만 진행
    if (isTimerRunning && Ttime > 0) {
      // 1초마다 타이머 감소
      const timerId = setInterval(() => {
        setTtime((prevTime) => {
          // 시간이 0에 도달하면 타이머 정지
          if (prevTime <= 1) {
            clearInterval(timerId);
            setIsTimerRunning(false);
            return 0;
          }
          // 1초씩 감소
          return prevTime - 1;
        });
      }, 1000);

      // 컴포넌트 언마운트 시 타이머 정리
      return () => clearInterval(timerId);
    }
  }, [movelist, isTimerRunning]); // movelist 변경 시 타이머 재설정

  // 레벨 변경 시 타이머 초기화
  useEffect(() => {
    setTtime(20);
    // 타이머 다시 시작
    setIsTimerRunning(true);
    // highlight-end
  }, [movelist]);

  useEffect(() => {
    const isStyleMatch = Algorithmism().compareStyles(collect, transcss);
    if (isStyleMatch) {
      requestAnimationFrame(() => {
        if (movelist < MunJea().Munlist.length - 1) {
          setmovelist((prev) => prev + 1);
          if (Ttime != 0) {
            setScore(score + 1);
            console.log(score + 1);
            myFancyHobinAudio.play();
          }
        } else {
          if (score > highscore) {
            setHighscore(score + 1);
          }
          console.log("성공!", "점수:", score);
          myFancyHobinAudio.play();
          console.log("게임이 끝났계엄령");
          setlastmodal(true);
          setStroyscore(score);
          setHighscore(score);
        }
      });
    }
  }, [transcss]);
  function alltanos() {
    setmovelist(1);
    setTranscss(usercss);
    setTtime(20);
    setIsTimerRunning(true);
    setScore(0);
  }

  function handdelete() {
    setlastmodal(false);
  }
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.right}>
          <div className={styles.hintbox}>hint</div>
          {isTimerRunning != true && movelist < MunJea().Munlist.length - 1 && (
            <div className={styles.hintshow}>{MunJea().Hint[movelist]}</div>
          )}
        </div>
        <div className={styles.mid}>
          {lastmodal && (
            <ClearBox className={styles.ClearBox} onClick={handdelete} />
          )}
          <ShowContainer className={styles.showcontainer}>
            <div style={Algorithmism().styleToObject(collect)}>text</div>
          </ShowContainer>
          <ShowContainer className={styles.showcontainer}>
            <div className="mun" style={Algorithmism().styleToObject(transcss)}>
              text
            </div>
          </ShowContainer>
          <div className={styles.editor}>
            <EditorBox
              value={transcss}
              onChange={handleEditorChange}
            ></EditorBox>
          </div>
        </div>
        <div className={styles.left}>
          <Retrybox
            onClick={() => {
              alltanos();
            }}
          ></Retrybox>
          <div className={styles.timebox}>{Ttime}초</div>
          <CheckBox text={"최고기록:"} result={storyscore}></CheckBox>
          <CheckBox text={"현재점수:"} result={score}></CheckBox>
        </div>
      </div>
    </div>
  );
}
