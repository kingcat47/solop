import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Start from "./page/Start";
import Game from "./page/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "start",
        element: <Start />,
      },
      {
        path: "game",
        element: <Game />,
      },
      {
        path: "test",
        // element: <Test />,
      },
    ],
  },
]);

export default router;
