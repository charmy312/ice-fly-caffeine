interface Flavor {
  name: string;
  img: string;
}

const FLAVORS: Flavor[] = [
  {
    name: "Alphonso Mango",
    img: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Azuki Red Bean",
    img: "https://images.unsplash.com/photo-1557142046-c704a3adf364?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Ube",
    img: "https://images.unsplash.com/photo-1633933358116-a27b902fad35?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Strawberry",
    img: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Matcha Green Tea",
    img: "https://images.unsplash.com/photo-1637516775949-44f6f69c0e0e?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Madagascar Vanilla",
    img: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Chocolate",
    img: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&auto=format&fit=crop&q=80",
  },
  {
    name: "Vietnamese Coffee",
    img: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=600&auto=format&fit=crop&q=80",
  },
];

export default function Flavors() {
  return (
    <section
      className="flavors-section"
      id="flavors"
      data-ocid="flavors.section"
    >
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-heading" data-ocid="flavors.heading">
            Our Flavors
          </h2>
        </div>
        <div className="row g-4" data-ocid="flavors.list">
          {FLAVORS.map((flavor, i) => (
            <div
              className="col-lg-3 col-md-6 col-6"
              key={flavor.name}
              data-ocid={`flavors.item.${i + 1}`}
            >
              <div className="flavor-card">
                <div className="flavor-img-wrap">
                  <img src={flavor.img} alt={flavor.name} loading="lazy" />
                </div>
                <p className="flavor-name">{flavor.name}</p>
                <a href="#flavors" className="flavor-link">
                  Learn More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
