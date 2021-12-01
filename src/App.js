import React from "react";
import "./App.css";
import Fuzzer from "./components/Fuzzer";
import Main from "./components/Main";

function App() {
  let author = false;

  return author ? <Fuzzer /> : <Main />;
}

export default App;
