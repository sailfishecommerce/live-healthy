/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import Lightbox from "react-image-lightbox";
import Magnifier from "react-magnifier";
import "react-image-lightbox/style.css";

import { productType } from "@/types";
import { PaymentNote } from "./ProductView";

interface Props {
  product: productType;
  quickView?: boolean;
}

export default function ProductGallery({ product, quickView }: Props) {
  const [lightBoxOpen, setLightBoxOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const activethumbnailImg = (index: number) =>
    activeImage === index ? "active" : "";

  console.log("ProductGallery product", product);

  function updateActiveImage(index: number) {
    setActiveImage(index);
  }

  const images = product?.product_images?.filter((image) => image.link);

  const onImgClick = () => {
    setLightBoxOpen(!lightBoxOpen);
  };

  const customStyles = {
    overlay: {
      zIndex: "5000",
    },
    bodyOpen: {
      position: "fixed",
    },
  };

  return (
    <div className="col-lg-7 pe-lg-0 pt-lg-4">
      <div className="product-gallery">
        <div className="product-gallery-preview order-sm-2">
          <div
            onClick={onImgClick}
            className="product-gallery-preview-item active"
          >
            <Magnifier
              mgShowOverflow={false}
              mgWidth={2000}
              mgHeight={2000}
              className="img-fluid"
              src={images[activeImage]?.link}
              zoomFactor={0.11}
            />
            <div className="image-zoom-pane"></div>
          </div>
          {lightBoxOpen && (
            <Lightbox
              mainSrc={images[activeImage].link}
              nextSrc={images[(activeImage + 1) % images.length].link}
              prevSrc={
                images[(activeImage + images.length - 1) % images.length].link
              }
              onCloseRequest={() => setLightBoxOpen(false)}
              imageCaption={images[activeImage].alt}
              onMovePrevRequest={() =>
                setActiveImage(
                  (activeImage + images.length - 1) % images.length
                )
              }
              onMoveNextRequest={() =>
                setActiveImage((activeImage + 1) % images.length)
              }
              enableZoom={false}
              reactModalStyle={customStyles}
            />
          )}
        </div>
        <div className="product-gallery-thumblist order-sm-1">
          {images?.map((image: { link: string; alt: string }, index) => (
            <a
              className={`product-gallery-thumblist-item ${activethumbnailImg(
                index
              )}`}
              onClick={() => updateActiveImage(index)}
              key={index}
            >
              <img src={image.link} alt={image.alt} />
            </a>
          ))}
        </div>
      </div>
      {!quickView && <PaymentNote />}
    </div>
  );
}
