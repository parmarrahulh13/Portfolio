import { useState } from "react";
import { AnimatePresence } from "motion/react";
import Navbar from "./Navbar";
import Intro from "./Intro";
import Home from "./Home";
import Skills from "./Skills";
import "./App.css";

function App() {

  const [showIntro, setShowIntro] = useState(true);

  return (
    <AnimatePresence mode="wait">

      {showIntro ? (

        <Intro
          key="intro"
          onComplete={() => setShowIntro(false)}
        />

      ) : (

        <main key="website">
          
          <Navbar/>
          <Home/>
          <Skills/>

        </main>

      )}

    </AnimatePresence>
  );
}

export default App;