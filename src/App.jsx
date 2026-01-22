import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Menu from "./pages/Menu.jsx";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer.jsx";
import NotFound from "./components/NotFound.jsx";
import ReservationModal from "./components/ReservationModal.jsx";
import Snackbar from "./components/SnackBar.jsx";

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

  //==============================
  //SNACKBAR
  //==============================
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const snackbarTimeRef = useRef(null);

  const showSnackbar = (message) => {
    setSnackbarMessage(message);
    setSnackbarOpen(true);

    //Reset timer if user clicks Order again
    if (snackbarTimeRef.current) clearTimeout(snackbarTimeRef.current);

    snackbarTimeRef.current = setTimeout(() => {
      setSnackbarOpen(false);
      snackbarTimeRef.current = null;
    }, 3000);
  };

  useEffect(() => {
    return () => {
      if (snackbarTimeRef.current) {
        clearTimeout(snackbarTimeRef.current);
        snackbarTimeRef.current = null;
      }
    };
  }, []);

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

      <Snackbar open={snackbarOpen} message={snackbarMessage} />

      {/*Pages*/}
      <main className="app-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/menu" element={<Menu showSnackbar={showSnackbar} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/*Footer*/}
      <Footer />
    </>
  );
}

export default App;
