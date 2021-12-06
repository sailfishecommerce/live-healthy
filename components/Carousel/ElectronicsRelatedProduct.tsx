/* eslint-disable @next/next/no-img-element */
import dynamic from "next/dynamic";

const TinySlider: any = dynamic(() => import("tiny-slider-react"), {
  ssr: false,
});

export default function ElectronicsRelatedProduct() {
  const settings = {
    items: 2,
    controls: false,
    autoHeight: true,
    responsive: {
      "0": { items: 1 },
      "500": { items: 2, gutter: 18 },
      "768": { items: 3, gutter: 20 },
      "1100": { items: 4, gutter: 30 },
    },
  };
  return (
    <div className="tns-carousel">
      <TinySlider onClick={() => {}} settings={settings}>
        {/*<!-- Product-->*/}
        <div>
          <div className="card product-card card-static">
            <span className="badge badge-danger badge-shadow">Sale</span>
            <a className="card-img-top d-block overflow-hidden" href="#">
              <img src="/img/home/mono-product/products/01.jpg" alt="Product" />
            </a>
            <div className="card-body text-center py-2">
              <h3 className="product-title fs-sm">
                <a href="#">Wireless Bluetooth Headphones</a>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $298.<small>50</small>
                </span>
                <del className="fs-sm text-muted">
                  $349.<small>99</small>
                </del>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Product-->*/}
        <div>
          <div className="card product-card card-static">
            <a className="card-img-top d-block overflow-hidden" href="#">
              <img src="/img/home/mono-product/products/02.jpg" alt="Product" />
            </a>
            <div className="card-body text-center py-2">
              <h3 className="product-title fs-sm">
                <a href="#">Wireless Bluetooth Headphones</a>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $129.<small>99</small>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Product-->*/}
        <div>
          <div className="card product-card card-static">
            <a className="card-img-top d-block overflow-hidden" href="#">
              <img src="/img/home/mono-product/products/03.jpg" alt="Product" />
            </a>
            <div className="card-body text-center py-2">
              <h3 className="product-title fs-sm">
                <a href="#">Wireless Bluetooth Earbuds</a>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $95.<small>00</small>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Product-->*/}
        <div>
          <div className="card product-card card-static">
            <a className="card-img-top d-block overflow-hidden" href="#">
              <img src="/img/home/mono-product/products/04.jpg" alt="Product" />
            </a>
            <div className="card-body text-center py-2">
              <h3 className="product-title fs-sm">
                <a href="#">Wireless Bluetooth Headphones</a>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $214.<small>99</small>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Product-->*/}
        <div>
          <div className="card product-card card-static">
            <a className="card-img-top d-block overflow-hidden" href="#">
              <img src="/img/home/mono-product/products/05.jpg" alt="Product" />
            </a>
            <div className="card-body text-center py-2">
              <h3 className="product-title fs-sm">
                <a href="#">Wireless Bluetooth Headphones</a>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $179.<small>99</small>
                </span>
              </div>
            </div>
          </div>
        </div>
        {/*<!-- Product-->*/}
        <div>
          <div className="card product-card card-static">
            <a className="card-img-top d-block overflow-hidden" href="#">
              <img src="/img/home/mono-product/products/06.jpg" alt="Product" />
            </a>
            <div className="card-body text-center py-2">
              <h3 className="product-title fs-sm">
                <a href="#">Wireless Bluetooth Headphones</a>
              </h3>
              <div className="product-price">
                <span className="text-accent">
                  $219.<small>99</small>
                </span>
              </div>
            </div>
          </div>
        </div>
      </TinySlider>
    </div>
  );
}
