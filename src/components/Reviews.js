import React, { useEffect } from "react";

const Reviews = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <section id="reviews" className="reviews-section">
      <div className="elfsight-app-2e653c66-4e6a-45ab-a815-44f545a5e968" data-elfsight-app-lazy></div>
    </section>
  );
};

export default Reviews;
