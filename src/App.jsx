import axios from "axios";
import { useEffect, useState } from "react";
import style from "./App.module.scss";
import divider from "./assets/pattern-divider-desktop.svg";
import dice from "./assets/icon-dice.svg";

function App() {
  const [advice, setAdvice] = useState("");
  const [advNumber, setAdvNumber] = useState("");

  const fetchAdvice = () => {
    // to fetch the api
    axios.get("https://api.adviceslip.com/advice").then((response) => {
      console.log("response", response.data.slip.id);
      setAdvice(response.data.slip.advice);
      setAdvNumber(response.data.slip.id);
    });
  };

  useEffect(() => fetchAdvice(), []);

  return (
    <>
      <main>
        <div className={style.containerOne}>
          <h1>ADVICE #{advNumber}</h1>
          <p>&quot;{advice}&quot;</p>
          <img className={style.divider} src={divider} alt="pattern Divider" />
          <button onClick={fetchAdvice}>
            <img src={dice} alt="dice icon" />
          </button>

          {/* <button onClick={fetchAdvice}>
            click me to reload
          </button> */}
        </div>
      </main>
    </>
  );
}

export default App;
