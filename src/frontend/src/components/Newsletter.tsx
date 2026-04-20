import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  }

  return (
    <section
      className="newsletter-section"
      id="newsletter"
      data-ocid="newsletter.section"
    >
      <div className="container">
        <div className="text-center">
          <p className="newsletter-pre mb-0" data-ocid="newsletter.pre_heading">
            Legendarily
          </p>
          <h2 className="newsletter-title" data-ocid="newsletter.heading">
            Delicious
          </h2>
          <p className="newsletter-tagline" data-ocid="newsletter.tagline">
            Asian-Owned, Family-Made, and Universally Loved
          </p>

          {submitted ? (
            <p
              className="text-center"
              style={{
                fontSize: "0.85rem",
                letterSpacing: "0.1em",
                color: "#555",
              }}
              data-ocid="newsletter.success_state"
            >
              Thank you for signing up! 🍦
            </p>
          ) : (
            <form
              className="d-flex flex-column flex-sm-row justify-content-center gap-0"
              style={{ maxWidth: 480, margin: "0 auto" }}
              onSubmit={handleSubmit}
              data-ocid="newsletter.form"
            >
              <input
                type="email"
                className="form-control"
                placeholder="YOUR EMAIL ADDRESS"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                style={{ flex: 1 }}
                data-ocid="newsletter.input"
              />
              <button
                type="submit"
                className="btn-dark-outline"
                data-ocid="newsletter.submit_button"
              >
                Sign Up
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
