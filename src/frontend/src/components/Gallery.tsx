interface GalleryPhoto {
  src: string;
  alt: string;
}

const PHOTOS: GalleryPhoto[] = [
  {
    src: "https://images.unsplash.com/photo-1516559228522-686a55c29cb6?w=800&auto=format&fit=crop&q=80",
    alt: "Ice cream scoops in a cone",
  },
  {
    src: "https://images.unsplash.com/photo-1567206563114-c179706b3b1f?w=800&auto=format&fit=crop&q=80",
    alt: "Colorful ice cream dessert",
  },
  {
    src: "https://images.unsplash.com/photo-1488900128323-21503983a07e?w=800&auto=format&fit=crop&q=80",
    alt: "Sundae with toppings",
  },
  {
    src: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=800&auto=format&fit=crop&q=80",
    alt: "Vanilla ice cream scoop",
  },
  {
    src: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=800&auto=format&fit=crop&q=80",
    alt: "Chocolate ice cream",
  },
  {
    src: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?w=800&auto=format&fit=crop&q=80",
    alt: "Strawberry ice cream",
  },
];

export default function Gallery() {
  return (
    <section
      className="gallery-section"
      id="gallery"
      data-ocid="gallery.section"
    >
      <div className="container-fluid px-0">
        <div className="row g-2" data-ocid="gallery.list">
          {PHOTOS.map((photo, i) => (
            <div
              className="col-6 col-md-4"
              key={photo.alt}
              data-ocid={`gallery.item.${i + 1}`}
            >
              <div className="gallery-img-wrap">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
