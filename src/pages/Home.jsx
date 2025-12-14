import Hero from "../components/Hero.jsx";
import NavBar from "../components/NavBar.jsx";

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
    </>
  );
}

export default Home;
