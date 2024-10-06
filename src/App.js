import logo from "./logo.svg";
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [text, setText] = useState("");

  const check = async () => {
    try {
      const response = await axios.get("http://localhost:3001/name");
      if (response.status === 200) {
        const name = response.data;
        setText(name);
      } else {
        setText("failed");
      }
    } catch (error) {
      setText("error");
      console.log("check error", error);
    }
  };

  useEffect(() => {
    check();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a>{text}</a>
      </header>
    </div>
  );
}

export default App;
