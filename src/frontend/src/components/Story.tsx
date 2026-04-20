interface Badge {
  icon: string;
  label: string;
}

const BADGES: Badge[] = [
  { icon: "🎨", label: "No Artificial Colors" },
  { icon: "🌾", label: "Gluten Free" },
  { icon: "🐄", label: "No rBST/rBGH" },
  { icon: "🌿", label: "Simple Ingredients" },
  { icon: "🥜", label: "Nut Free" },
  { icon: "✡️", label: "Kosher" },
];

export default function Story() {
  return (
    <section className="story-section" id="story" data-ocid="story.section">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading mb-3" data-ocid="story.heading">
            From Our Family to Yours
          </h2>
          <p className="story-subtitle">
            California's favorite flavors, real-deal ingredients, and a richness
            that keeps you coming back for more. Our ice cream is made with the
            same family recipes we've loved since 1978.
          </p>
        </div>

        <div
          className="row g-3 justify-content-center"
          data-ocid="story.badges"
        >
          {BADGES.map((badge, i) => (
            <div
              className="col-6 col-md-4 col-lg-2"
              key={badge.label}
              data-ocid={`story.badge.${i + 1}`}
            >
              <div className="badge-card">
                <span className="badge-icon">{badge.icon}</span>
                <span className="badge-label">{badge.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
