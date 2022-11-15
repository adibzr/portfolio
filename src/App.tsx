import { useState } from "react";
import Intro from "./components/Intro";
import Portfolio from "./components/portfolio";

function App() {
  const [spanish, setSpanish] = useState(false);

  return (
    <div>
      <Intro spanish={spanish} setSpanish={setSpanish} />
      <Portfolio spanish={spanish} />
    </div>
  );
}

export default App;
