import './App.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import {useState} from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";

function App() {
  const [managePlayerStatus, setManagePlayerStatus] = useState();
  return (
    <div className="App">
      <div className="container">
          <BrowserRouter>
            <Nav managePlayerStatus={managePlayerStatus} setManagePlayerStatus={setManagePlayerStatus} />
            <Routes>
                <Route path="/team/list" element={<Home/>} />
            </Routes>
          </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
