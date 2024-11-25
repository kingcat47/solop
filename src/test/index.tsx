import { useState } from "react";
import ShowContainer from "../components/ShowContainer";
import styles from "./styles.module.scss";
import Editor from "@monaco-editor/react";
import CodeMirror from "@uiw/react-codemirror";
import { css } from "@codemirror/lang-css";
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

export default function Test() {
  const [transcss, setTranscss] = useState(usercss);

  const handleEditorChange = (value: string | undefined) => {
    if (value !== undefined) {
      setTranscss(value);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ShowContainer>
          <div className="dap" style={styleToObject(collect)}></div>
        </ShowContainer>
        <ShowContainer>
          <div className="mun" style={styleToObject(transcss)}></div>
        </ShowContainer>
        <div style={{ height: "300px", border: "1px solid blue" }}>
          <Editor
            height="100%"
            defaultLanguage="css"
            theme="vs-dark"
            value={transcss}
            onChange={handleEditorChange}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              lineNumbers: "on",
              roundedSelection: false,
              scrollBeyondLastLine: false,
              automaticLayout: true,
            }}
          />
          {/* <CodeMirror
            value={transcss}
            height="300px"
            extensions={[css()]}
            onChange={(value) => setTranscss(value)}
            theme="dark" // 또는 "light"
          /> */}
        </div>
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
