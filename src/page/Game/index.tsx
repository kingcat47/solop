import { useState, useEffect } from "react";
import ShowContainer from "../../components/ShowContainer";
import styles from "./styles.module.scss";
import EditorBox from "../../components/EditorBos";
import Munjea from "../../components/Munjea/index";
import Algorithmism from "../../algorithmism/compareStyles";

const usercss = `.mun {
  width: 100px;
  height: 100px;
  background-color: red;
}`;

const collect = Munjea().Munlist[2];

export default function Game() {
  const [transcss, setTranscss] = useState(usercss);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setTranscss(value);
    }
  };

  useEffect(() => {
    const isStyleMatch = Algorithmism().compareStyles(collect, transcss);
    if (isStyleMatch) {
      console.log(1);
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
        <div className={styles.left}>left</div>
      </div>
    </div>
  );
}
