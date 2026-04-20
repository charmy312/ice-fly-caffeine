const BANNER_ITEMS = [
  "Real-Deal Ingredients",
  "Rich & Creamy",
  "Cali's Favorite Flavors",
  "Not Too Sweet",
  "Family Recipes",
];

// Repeat 4x so the seamless marquee loop works at any viewport width
const REPEATED = Array(4).fill(BANNER_ITEMS).flat();

export default function ScrollingText() {
  return (
    <div data-ocid="scrolling_text.section">
      {/* Row 1 — dark navy background, cream text, left scroll */}
      <div className="scrolling-banner navy-bg" aria-hidden="true">
        <div className="scrolling-track">
          {REPEATED.map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: decorative repeated items
            <span key={i}>{item} ·</span>
          ))}
        </div>
      </div>

      {/* Row 2 — cream background, navy text, right scroll */}
      <div className="scrolling-banner cream-bg" aria-hidden="true">
        <div className="scrolling-track reverse">
          {REPEATED.map((item, i) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: decorative repeated items
            <span key={i}>{item} ·</span>
          ))}
        </div>
      </div>
    </div>
  );
}
