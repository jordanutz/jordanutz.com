import { useState } from "react";
import {
  Biography,
  Experience,
  Navigation,
  Projects,
  Social,
} from "./components";
import { VisibleSection } from "./types";
import "./styles/cover.css";

function App() {
  const [visibleSection, setVisibleSection] =
    useState<VisibleSection>("biography");

  const setInView = (inView: boolean, entry: any) => {
    if (inView) {
      setVisibleSection(entry.target.getAttribute("id"));
    }
  };

  return (
    <div className="App cover">
      <div>
        <header>
          <h1>Jordan Utz</h1>
          <h2>Senior Front-End Engineer</h2>
          <p>
            5 years of professional experience creating digital experiences
            architected using Javascript.
          </p>
          <Navigation visibleSection={visibleSection} />
          <Social />
        </header>
        <main>
          <Biography setInView={setInView} visibleSection={visibleSection} />
          <Experience setInView={setInView} visibleSection={visibleSection} />
          <Projects setInView={setInView} visibleSection={visibleSection} />
        </main>
        <footer>Test</footer>
      </div>
    </div>
  );
}

export default App;
