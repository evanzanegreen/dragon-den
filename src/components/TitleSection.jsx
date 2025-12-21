import "./TitleSection.css";

function TitleSection({ line1, line2, paragraphs = [] }) {
  return (
    <>
      <section className="section">
        <div className="container">
          <h1 className="header line1">{line1}</h1>
          <h1 className="header line2">{line2}</h1>
          {paragraphs.map((text, index) => (
            <p key={index}>{text}</p>
          ))}
        </div>
      </section>
    </>
  );
}

export default TitleSection;
