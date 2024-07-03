import { useState } from "react";
import {
  Anchor,
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
          <h2>Front End Software Engineer</h2>
          <p>
            5 years of professional experience creating digital experiences
            architected using Javascript.
          </p>
          <Navigation visibleSection={visibleSection} />
          <Social />
        </header>
        <div className="content">
          <main>
            <Biography setInView={setInView} visibleSection={visibleSection} />
            <Experience setInView={setInView} visibleSection={visibleSection} />
            <Projects setInView={setInView} visibleSection={visibleSection} />
          </main>
          <footer>
            <p>
              Programmed in{" "}
              <Anchor href="https://code.visualstudio.com/" isExternal>
                Visual Studio Code
              </Anchor>{" "}
              under the sunny sides of Cincinnati. Crafted with{" "}
              <Anchor href="https://vitejs.dev/ isExternal">Vite</Anchor> using{" "}
              <Anchor href="https://react.dev/">React</Anchor> and deployed with{" "}
              <Anchor href="https://www.netlify.com/" isExternal>
                Netlify
              </Anchor>
              . Typography set in the Circular typeface. Embrace the journey.
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default App;
