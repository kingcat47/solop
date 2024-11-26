import { useState } from "react";
import ShowContainer from "../../components/ShowContainer";
import styles from "./styles.module.scss";
import EditorBox from "../../components/EditorBos";

interface StyleObject {
  [key: string]: string;
}

const usercss = `
.mun {
  width: 100px;
  height: 100px;
  background-color: red;
}`;

const collect = `.dap{
width: 100px;
  height: 100px;
  background-color: blue;
}`;

export default function Game() {
  const [transcss, setTranscss] = useState(usercss);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setTranscss(value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.right}>right</div>
        <div className={styles.mid}>
          <ShowContainer className={styles.showcontainer}>
            <div className="dap" style={styleToObject(collect)}></div>
          </ShowContainer>
          <ShowContainer className={styles.showcontainer}>
            <div className="mun" style={styleToObject(transcss)}></div>
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

function styleToObject(transcss: string): StyleObject {
  const styleObject: StyleObject = {};
  // CSS 규칙만 추출
  const cssRules = transcss.match(/{([^}]*)}/);

  if (cssRules && cssRules[1]) {
    const rules = cssRules[1].split(";").filter((rule) => rule.trim());

    rules.forEach((rule) => {
      const [property, value] = rule.split(":").map((str) => str.trim());
      if (property && value) {
        const camelProperty = property.replace(/-([a-z])/g, (g) =>
          g[1].toUpperCase()
        );
        styleObject[camelProperty] = value;
      }
    });
  }

  return styleObject;
}

//보여주는칸 css입력칸 타이머 점수 남은까방권갯수 힌트
{
  /* <CodeMirror
            value={transcss}
            height="300px"
            extensions={[css()]}
            onChange={(value) => setTranscss(value)}
            theme="dark" // 또는 "light"
          /> */
}
