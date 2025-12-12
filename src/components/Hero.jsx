import "./Hero.css";

function Hero({
  mediaType = "video",
  mediaSrc,
  overlayOpacity = 0.5,
  altText = "Hero Image",
  smTitle = "WELCOME TO THE",
  title = "DEN.",
}) {
  return (
    <section className="hero">
      {/*Background Media*/}
      {mediaType === "video" ? (
        <video
          className="hero-bg"
          src={mediaSrc}
          autoPlay
          loop
          muted
          playsInline
        />
      ) : (
        <img className="hero-bg" src={mediaSrc} alt={altText} />
      )}
      <video
        className="hero-bg"
        src="/video/home-hero-2.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/*Hero Overlay*/}
      <div
        className="hero-overlay"
        style={{ backgroundColor: `rgba(0,0,0,${overlayOpacity})` }}
      />

      {/*Content*/}
      <div className="hero-content">
        <h2 className="hero-sm-title">{smTitle}</h2>
        <h1 className="hero-title">{title}</h1>
        {/*<h3 className="subtitle">
          Authentic Caribbean Flavors. Bold Spices & an Unforgettable
          Atmosphere.
        </h3>*/}
      </div>
    </section>
  );
}

export default Hero;
