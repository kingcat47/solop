export function MunJea() {
  const Munlist: string[] = [
    "",
    ".dap{ width: 100px; height: 100px; background-color: red;} ",
    ".dap{ width: 100px; height: 100px; background-color: blue;}",
    ".dap{ width: 100px; height: 100px; background-color: yellow;}",
    ".dap{ width: 100px; height: 100px; background-color: green;}",
    ".dap{ width: 100px; height: 100px; border: 5px solid orange;}",
    ".dap{ width: 200px; height: 100px; background-color: orange;}",
    ".dap{ width: 100px; height: 100px; border-radius: 50%; background-color: orange;}",
    ".dap{ width: 100px; height: 100px; transform: rotate(45deg); background-color: orange;}",
    ".dap{ width: 100px; height: 100px; background-image: linear-gradient(to right, red, yellow);}",
    ".dap{ width: 100px; height: 100px; box-shadow: 5px 5px 10px gray; background-color: aqua;}",
    ".dap{ width: 100px; height: 100px; opacity: 0.5; background-color: pink;}",
    ".dap{ width: 100px; height: 100px; background-color: navy;}",
    ".dap{ width: 100px; height: 100px; border: 3px dashed red;}",
    ".dap{ width: 100px; height: 100px; background-color: brown; display: flex; justify-content: center; align-items: center; color: white; font-size: 20px;}",
  ];

  const Hint: string[] = [
    "",
    "color: red",
    "color: blue",
    "color: yellow",
    "color: green",
    "border: 5px solid orange; 순서 맞아야함;;",
    "background-color: purple",
    "border-radius: 50%",
    "rotate: 45 degrees",
    "gradient: red to yellow",
    "box-shadow: gray shadow",
    "opacity: 50%",
    "margin: centered",
    "border: dashed red",
    "display: flex with centered text",
  ];

  return { Munlist, Hint };
}
