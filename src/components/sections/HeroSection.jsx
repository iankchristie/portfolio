export function HeroSection({ content }) {
  return (
    <section className="hero" id="about">
      <div className="hero-content">
        <h1 className="hero-title">{content.name}</h1>
        <p className="hero-subtitle">{content.subtitle}</p>
        <div className="hero-description">
          {content.bio.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </div>
      <div className="hero-image">
        <img src={`${import.meta.env.BASE_URL}pic.jpg`} alt="Ian Christie" />
      </div>
    </section>
  );
}
