import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.less";
import Root from "./Pages/Main/Root";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";
import Experiences from "./Pages/Experiences/Experiences";
import Projects from "./Pages/Projects/Projects";
import Contact from "./Pages/Contact/Contact";

const router = createBrowserRouter([
  {
    path: "/anh-portfolio",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      { path: "about", element: <About></About> },
      { path: "experiences", element: <Experiences></Experiences> },
      { path: "projects", element: <Projects></Projects> },
      { path: "contact", element: <Contact></Contact> },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
