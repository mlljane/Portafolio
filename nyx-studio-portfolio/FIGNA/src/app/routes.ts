import { createBrowserRouter } from "react-router";
import { Root } from "./pages/Root";
import { Home } from "./pages/Home";
import { Games } from "./pages/Games";
import { Art } from "./pages/Art";
import { Models3D } from "./pages/Models3D";
import { Animations } from "./pages/Animations";
import { About } from "./pages/About";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "games", Component: Games },
      { path: "art", Component: Art },
      { path: "3d-models", Component: Models3D },
      { path: "animations", Component: Animations },
      { path: "about", Component: About },
    ],
  },
]);
