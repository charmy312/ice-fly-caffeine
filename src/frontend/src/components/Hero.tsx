export default function Hero() {
  const heroImage =
    "https://images.unsplash.com/photo-1560008581-09826d1de69e?w=1600&auto=format&fit=crop&q=80";

  return (
    <section
      className="sweety-hero"
      id="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
      data-ocid="hero.section"
    >
      <div className="hero-content text-center">
        <h1 className="hero-title" data-ocid="hero.title">
          Family-Made
          <br />
          Ice Cream
        </h1>
        <p className="hero-subtitle" data-ocid="hero.subtitle">
          A Mom and Pop Shop Since '78
        </p>
        <a href="#flavors" className="btn-accent" data-ocid="hero.shop_button">
          Shop Now
        </a>
      </div>
    </section>
  );
}
