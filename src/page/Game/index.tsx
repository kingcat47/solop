import { useState } from "react";
import ShowContainer from "../../components/ShowContainer";
import TextareaBox from "../../components/TextareaBox";
import styles from "./styles.module.scss";

interface StyleObject {
  [key: string]: string;
}

const usercss = `
.mun {
  width: 100px;
  height: 100px;
  background-color: red;
}`;

export default function Game() {
  const [transcss, setTranscss] = useState(usercss);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTranscss(e.target.value);
  };

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <ShowContainer>
          <div className="mun" style={styleToObject(transcss)}></div>
        </ShowContainer>
        <TextareaBox value={transcss} onChange={handleChange} />
      </div>
    </div>
  );
}

function styleToObject(transcss: string): StyleObject {
  const styleObject: StyleObject = {};
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
