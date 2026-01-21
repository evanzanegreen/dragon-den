import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useRef } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/NotFound.jsx";
import ReservationModal from "./components/ReservationModal.jsx";

function App() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  const lastTriggerRef = useRef(null);
  const reserveBtnRef = useRef(null);

  const openReservationModal = (e) => {
    lastTriggerRef.current = e.currentTarget;
    setIsReservationOpen(true);
  };

  const closeReservationModal = () => {
    setIsReservationOpen(false);

    setTimeout(() => {
      lastTriggerRef.current?.focus();
    }, 0);
  };

  return (
    <>
      {/*NavBar*/}
      <NavBar
        onReserveClick={openReservationModal}
        reserveBtnRef={reserveBtnRef}
      />

      <ReservationModal
        isOpen={isReservationOpen}
        onClose={closeReservationModal}
      />

      {/*Pages*/}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/*Footer*/}
      <Footer />
    </>
  );
}

export default App;
