import { BsInstagram } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
import { RiTiktokFill } from "react-icons/ri";
import { FaFacebookSquare } from "react-icons/fa";
import ddLogo from "../assets/Dragon Den Logo White.png";
import { useState, useEffect } from "react";
import "./Footer.css";

function Footer() {
  const [isReservationOpen, setIsReservationOpen] = useState(false);

  useEffect(() => {
    console.log("Reservation open:", isReservationOpen);
  }, [isReservationOpen]);

  const handleReservationClick = () => {
    setIsReservationOpen((prev) => !prev);
  };

  return (
    <>
      <section className="section-footer">
        <div className="container-footer">
          <footer className="footer">
            <div className="footer-inner">
              <img src={ddLogo} alt="Dragon Den Logo" className="footer-logo" />
              <div className="footer-columns">
                <div className="content-footer">
                  <p className="cliff-notes">
                    Caribbean inspired dishes crafted with bold spices, strong
                    traditions, and a love for gathering around the table.
                  </p>

                  <p className="legal">
                    © 2025 Dragon Den. All rights reserved.
                  </p>

                  <h4 className="talk">Talk to Us</h4>
                  <p className="phone">(201) 289-1023</p>
                  <p className="email">hello@dragonden.com</p>

                  <div className="socials">
                    <FaFacebookSquare />
                    <BsInstagram />
                    <FaXTwitter />
                    <RiTiktokFill />
                  </div>
                </div>

                <div className="footer-right">
                  <h4 className="visit">Visit Us</h4>
                  <p className="footer-address">
                    7421 Greenridge Terrace,
                    <br />
                    College Park, MD 20740
                  </p>

                  <div className="hours">
                    <h4>Store Hours</h4>
                    <p>Mon-Thu: 11 am - 9 pm</p>
                    <p>Fri-Sat: 11 am - 11 pm</p>
                    <p>Sun: 12 pm - 8 pm</p>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </section>
    </>
  );
}

export default Footer;
