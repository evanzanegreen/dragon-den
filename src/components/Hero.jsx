import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      {/*Background Video*/}
      <video
        className="hero-video"
        src="/video/home-hero-2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/*Hero Overlay*/}
      <div className="hero-overlay" />

      {/*Content*/}
      <div className="hero-content">
        <h2 className="hero-sm-title">WELCOME TO THE</h2>
        <h1 className="hero-title">DEN.</h1>
        {/*<h3 className="subtitle">
          Authentic Caribbean Flavors. Bold Spices & an Unforgettable
          Atmosphere.
        </h3>*/}
      </div>
    </section>
  );
}

export default Hero;
