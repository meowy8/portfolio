import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="max-w-[1500px]">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
