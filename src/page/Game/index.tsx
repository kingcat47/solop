import { useState, useEffect } from "react";
import ShowContainer from "../../components/ShowContainer";
import styles from "./styles.module.scss";
import EditorBox from "../../components/EditorBos";
import Munjea from "../../components/Munjea/index";
import Algorithmism from "../../algorithmism/compareStyles";
interface StyleObject {
  [key: string]: string;
}

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

  // Function to normalize and compare styles
  const compareStyles = (css1: string, css2: string): boolean => {
    const extractStyles = (css: string) => {
      const styleObject: StyleObject = {};
      const cssRules = css.match(/{([^}]*)}/);

      if (cssRules && cssRules[1]) {
        const rules = cssRules[1].split(";").filter((rule) => rule.trim());

        rules.forEach((rule) => {
          const [property, value] = rule.split(":").map((str) => str.trim());
          if (property && value) {
            const normalizedProperty = property
              .toLowerCase()
              .replace(/\s/g, "");
            const normalizedValue = value.toLowerCase().replace(/\s/g, "");
            styleObject[normalizedProperty] = normalizedValue;
          }
        });
      }

      return styleObject;
    };

    const styles1 = extractStyles(css1);
    const styles2 = extractStyles(css2);

    // Compare all properties
    const keys1 = Object.keys(styles1);
    const keys2 = Object.keys(styles2);

    if (keys1.length !== keys2.length) return false;

    return keys1.every((key) => {
      const normalizedKey = key.toLowerCase().replace(/\s/g, "");
      const matchingKey = keys2.find(
        (k) => k.toLowerCase().replace(/\s/g, "") === normalizedKey
      );

      return matchingKey ? styles1[key] === styles2[matchingKey] : false;
    });
  };

  useEffect(() => {
    const isStyleMatch = compareStyles(collect, transcss);
    if (isStyleMatch) {
      console.log(1);
      // You could also add additional logic here, like updating game state
    }
  }, [transcss]);

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

  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <div className={styles.right}>right</div>
        <div className={styles.mid}>
          <ShowContainer className={styles.showcontainer}>
            <div style={styleToObject(collect)}></div>
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
