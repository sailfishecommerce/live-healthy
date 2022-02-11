import JustInView from "@/components/JustInView";
import HomepageSlider from "./HomepageSlider";
import PopularCategories from "./PopularCategories";

export default function Hero() {
  return (
    <JustInView section="Hero">
      <div className="hero">
        <HomepageSlider />
        <PopularCategories />
      </div>
      <style jsx>
        {`
          @media (min-width: 768px) {
            .hero {
              height: 740px;
            }
          }
        `}
      </style>
    </JustInView>
  );
}
