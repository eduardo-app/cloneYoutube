import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Menu from "./components/menu";
import Home from "./pages/home";
import Libary from "./pages/libary";
import History from "./pages/history";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <div style={{ width: "100%", display: "flex" }}>
          <Menu />
          <div style={{width: "100%", padding: "56px 0 0 0", boxSizing: "border-box", display: "flex", justifyContent: "center"}}>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/libary" element={<Libary/>}/>
              <Route path="/history" element={<History/>}/>
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
