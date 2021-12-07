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

  const thumbnailImages = product.product_images.filter((image) => image.link);

  const onImgClick = (index: number) => {
    setActiveImage(index);
    setLightBoxOpen(!lightBoxOpen);
  };

  const customStyles = {
    overlay: {
      zIndex: "1000",
    },
    bodyOpen: {
      position: "fixed",
    },
  };

  return (
    <div className="col-lg-7 pe-lg-0 pt-lg-4">
      <div className="product-gallery">
        <div className="product-gallery-preview order-sm-2">
          {product.product_images.map(
            (image: { link: string; alt: string }, index) => (
              <div
                key={image.link}
                className="product-gallery-preview-item active"
                id="first"
              >
                <a key={index} onClick={() => onImgClick(index)}>
                  <Magnifier
                    mgShowOverflow={false}
                    mgWidth={2000}
                    mgHeight={2000}
                    className="img-fluid"
                    src={image.link}
                    zoomFactor={0.11}
                  />
                </a>
                {lightBoxOpen && (
                  <Lightbox
                    mainSrc={product?.product_images[activeImage].link}
                    nextSrc={
                      product?.product_images[
                        (activeImage + 1) % product?.product_images.length
                      ].link
                    }
                    prevSrc={
                      product?.product_images[
                        (activeImage + product?.product_images.length - 1) %
                          product?.product_images.length
                      ].link
                    }
                    onCloseRequest={() => setLightBoxOpen(false)}
                    imageCaption={product?.product_images[activeImage].alt}
                    onMovePrevRequest={() =>
                      setActiveImage(
                        (activeImage + product?.product_images.length - 1) %
                          product?.product_images.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setActiveImage(
                        (activeImage + 1) % product?.product_images.length
                      )
                    }
                    enableZoom={false}
                    reactModalStyle={customStyles}
                  />
                )}
                <div className="image-zoom-pane"></div>
              </div>
            )
          )}
        </div>
        <div className="product-gallery-thumblist order-sm-1">
          {thumbnailImages.map((image: { link: string; alt: string }) => (
            <a
              className="product-gallery-thumblist-item active"
              href="#first"
              key={image.link}
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
