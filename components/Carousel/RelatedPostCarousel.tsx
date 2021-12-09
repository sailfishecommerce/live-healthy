/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});


export default function RelatedPostCarousel() {
  const settings = {
    items: 2,
    controls: false,
    autoHeight: true,
    responsive: {
      "0": { items: 1 },
      "500": { items: 2, gutter: 20 },
      "900": { items: 3, gutter: 20 },
      "1100": { items: 3, gutter: 30 },
    },
    navPosition: "bottom",
  };
  return (
    <div className="tns-carousel">
      <TinySlider onClick={() => {}} settings={settings}>
        <article>
          <a className="blog-entry-thumb mb-3" href="#">
            <img src="/img/blog/03.jpg" alt="Post" />
          </a>
          <div className="d-flex align-items-center fs-sm mb-2">
            <a className="blog-entry-meta-link" href="#">
              by Rafael Marquez
            </a>
            <span className="blog-entry-meta-divider"></span>
            <a className="blog-entry-meta-link" href="#">
              Sep 16
            </a>
          </div>
          <h3 className="h6 blog-entry-title">
            <a href="#">
              We Launched Regular Drone Delivery in California. Watch Demo Video
            </a>
          </h3>
        </article>
        {/*<!-- article-->*/}
        <article>
          <a className="blog-entry-thumb mb-3" href="#">
            <img src="/img/blog/04.jpg" alt="Post" />
          </a>
          <div className="d-flex align-items-center fs-sm mb-2">
            <a className="blog-entry-meta-link" href="#">
              by Emma Gallaher
            </a>
            <span className="blog-entry-meta-divider"></span>
            <a className="blog-entry-meta-link" href="#">
              Sep 5
            </a>
          </div>
          <h3 className="h6 blog-entry-title">
            <a href="#">
              Payments Made Easy. How New Technology will Affect E-Commerce
              Industry Worldwide?
            </a>
          </h3>
        </article>
        {/*<!-- article-->*/}
        <article>
          <a className="blog-entry-thumb mb-3" href="#">
            <img src="/img/blog/02.jpg" alt="Post" />
          </a>
          <div className="d-flex align-items-center fs-sm mb-2">
            <a className="blog-entry-meta-link" href="#">
              by Emma Gallaher
            </a>
            <span className="blog-entry-meta-divider"></span>
            <a className="blog-entry-meta-link" href="#">
              Aug 28
            </a>
          </div>
          <h3 className="h6 blog-entry-title">
            <a href="#">
              Shopping Tips. Complete Guide of Places Where to Buy Cheap and Get
              Cashback
            </a>
          </h3>
        </article>
        {/*<!-- article-->*/}
        <article>
          <a className="blog-entry-thumb mb-3" href="#">
            <img src="/img/blog/01.jpg" alt="Post" />
          </a>
          <div className="d-flex align-items-center fs-sm mb-2">
            <a className="blog-entry-meta-link" href="#">
              by Emma Gallaher
            </a>
            <span className="blog-entry-meta-divider"></span>
            <a className="blog-entry-meta-link" href="#">
              Aug 28
            </a>
          </div>
          <h3 className="h6 blog-entry-title">
            <a href="#">Top 10 New Trends in Suburban High Fashion</a>
          </h3>
        </article>
      </TinySlider>
    </div>
  );
}
