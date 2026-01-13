import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <div className="app">
        {/*NavBar*/}
        <NavBar />

        {/*Pages*/}
        <main className="app-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
          </Routes>
        </main>

        {/*Footer*/}
        <Footer />
      </div>
    </>
  );
}

export default App;
