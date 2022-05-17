import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counter" element={<Counter />} />
    </Routes>
  );
}

export default App;
