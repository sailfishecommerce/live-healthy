import HomepageSlider from "./HomepageSlider";
import PopularCategories from "./PopularCategories";

export default function Hero() {
  return (
    <>
      <div className="hero">
        <HomepageSlider />
        <PopularCategories />
      </div>
      <style jsx>
        {`
          @media (min-width: 768px) {
            .hero {
              height: 100%;
              max-height: 97vh;
            }
          }
        `}
      </style>
    </>
  );
}
