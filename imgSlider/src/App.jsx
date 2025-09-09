import { useState } from "react";
import Bg from "./compo/Bg";
import Slider from "./slidecompo/Slider";

function App() {
  return (
    <>
      <div className="centerChild h-screen">
        <Bg />
        <Slider />
      </div>
    </>
  );
}

export default App;
