interface StyleObject {
  [key: string]: string;
}

export default function Algorithmism() {
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

  return { compareStyles, styleToObject };
}
