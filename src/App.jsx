import { Route, Routes } from "react-router-dom";
import "./App.scss";
import About from "@/sections/About";
import Projects from "@/sections/Projects";
import Contact from "@/sections/Contact";
import Resume from "./components/Resume";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <main>
            <About />
            <Projects />
            <Contact />
          </main>
        }
      />

      <Route path="/resume" element={<Resume />} />
    </Routes>
  );
}

export default App;
