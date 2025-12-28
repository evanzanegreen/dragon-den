import Hero from "../components/Hero.jsx";
import TitleSection from "../components/TitleSection.jsx";
import "./About.css";
import Card from "../components/Card.jsx";
import teamData from "../data/teamData.js";

function About() {
  return (
    <>
      <div>
        <Hero
          mediaType="image"
          mediaSrc="/about-hero.jpg"
          mediaAlt="About Hero"
          overlayOpacity={0.65}
          smTitle="BOLD FLAVORS, OUR"
          title="SOUL."
        />
      </div>

      <TitleSection
        line1="Caribbean Soul,"
        line2="Crafted for the Table"
        paragraphs={[
          "Dragon Den was created as a place where bold flavor and community come together. Inspired by Caribbean cooking and the cultures that shape it, our kitchen celebrates time-honored recipes, vibrant spices, and food meant to be shared.",
          "Every dish begins with intention. From slow-simmered staples to signature plates layered with heat and depth, our menu honors tradition while embracing a modern approach to comfort food. Whether you’re gathering with friends or discovering something new, Dragon Den is built around the belief that the best meals are the ones shared around the table.",
        ]}
      />

      <section className="section-team">
        <div className="container-team">
          <h1 className="header-team">The People Behind the Flavor</h1>
          <p>
            Behind every dish is a team dedicated to craft, care, and
            consistency. From the kitchen to the table, our team brings
            experience, creativity, and a shared love for bold Caribbean flavor
            to everything we serve.
          </p>

          <div className="team-list">
            {teamData.map((team) => (
              <Card
                key={team.id}
                id={team.id}
                variant="team"
                mediaSrc={team.mediaSrc}
                mediaAlt={team.mediaAlt}
                title={team.name}
                subtitle={team.role}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
