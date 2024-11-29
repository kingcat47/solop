import { useState, useEffect } from "react";
import ShowContainer from "../../components/ShowContainer";
import styles from "./styles.module.scss";
import EditorBox from "../../components/EditorBos";
import Munjea from "../../components/Munjea/index";
import Algorithmism from "../../algorithmism/compareStyles";
import TimeBox from "../../components/Timebox";
import CheckBox from "../../components/CheckBox";

const usercss = `.mun {
  width: 100px;
  height: 100px;
  background-color: red;
}`;

export default function Game() {
  const [movelist, setmovelist] = useState(0);
  const collect = Munjea().Munlist[movelist];
  const [transcss, setTranscss] = useState(usercss);
  const [score, setScore] = useState(0);
  const [failCount, setFailCount] = useState(0);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setTranscss(value);
    }
  };

  const handleTimeOut = () => {
    setFailCount((prev) => prev + 1);
  };

  useEffect(() => {
    const isStyleMatch = Algorithmism().compareStyles(collect, transcss);
    if (isStyleMatch) {
      if (movelist < Munjea().Munlist.length - 1) {
        setmovelist(movelist + 1);
      } else {
        // 최종 점수 계산 (맞춘 레벨 수 - 실패 횟수)
        setScore(movelist + 1 - failCount);
        console.log("성공!");
      }
    }
  }, [transcss]);

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.right}>right</div>
        <div className={styles.mid}>
          <ShowContainer className={styles.showcontainer}>
            <div style={Algorithmism().styleToObject(collect)}></div>
          </ShowContainer>
          <ShowContainer className={styles.showcontainer}>
            <div
              className="mun"
              style={Algorithmism().styleToObject(transcss)}
            ></div>
          </ShowContainer>
          <div className={styles.editor}>
            <EditorBox
              value={transcss}
              onChange={handleEditorChange}
            ></EditorBox>
          </div>
        </div>
        <div className={styles.left}>
          left
          <TimeBox movelist={movelist} onTimeOut={handleTimeOut} />
          <CheckBox result={score}></CheckBox>
        </div>
      </div>
    </div>
  );
}
