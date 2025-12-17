import Hero from "../components/Hero.jsx";
import TitleSection from "../components/TitleSection.jsx";
import "./Home.css";
import chefSignature from "../assets/Chef Signature.png";

function Home() {
  return (
    <>
      <div>
        <Hero
          mediaType="video"
          mediaSrc="/video/home-hero-2.mp4"
          overlayOpacity={0.85}
          smTitle="WELCOME TO THE"
          title="DEN."
          alt="Home Hero"
        />
      </div>

      <TitleSection />

      {/*Chef Message*/}
      <section className="section-chef">
        <div className="container-chef">
          <div>
            <h1 className="header-chef">A Message from the Chef</h1>
            <p>
              At Dragon Den, every dish begins with respect — for Caribbean
              tradition, for bold, honest ingredients, and for the people
              gathered around the table. Our flavors are inspired by the warmth
              and energy of the islands, brought to life through slow-cooked
              techniques, vibrant spices, and food meant to be shared. Whether
              you’re discovering something new or returning to a favorite, my
              hope is that every plate feels thoughtful, welcoming, and made
              with care.
            </p>
            <img src={chefSignature} alt="Signature of Chef Cody Fisher" />
          </div>

          {/*Insert Card Below*/}
        </div>
      </section>
    </>
  );
}

export default Home;
