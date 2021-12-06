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
          {product.images.map(
            (image: { id: string; file: { url: string } }, index) => (
              <div
                key={image.id}
                className="product-gallery-preview-item active"
                id="first"
              >
                <a key={index} onClick={() => onImgClick(index)}>
                  <Magnifier
                    mgShowOverflow={false}
                    mgWidth={2000}
                    mgHeight={2000}
                    className="img-fluid"
                    src={image.file.url}
                    zoomFactor={0.11}
                  />
                </a>
                {lightBoxOpen && (
                  <Lightbox
                    mainSrc={product?.images[activeImage].file.url}
                    nextSrc={
                      product?.images[
                        (activeImage + 1) % product?.images.length
                      ].file.url
                    }
                    prevSrc={
                      product?.images[
                        (activeImage + product?.images.length - 1) %
                          product?.images.length
                      ].file.url
                    }
                    onCloseRequest={() => setLightBoxOpen(false)}
                    imageCaption={product?.name}
                    onMovePrevRequest={() =>
                      setActiveImage(
                        (activeImage + product?.images.length - 1) %
                          product?.images.length
                      )
                    }
                    onMoveNextRequest={() =>
                      setActiveImage((activeImage + 1) % product?.images.length)
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
          {product.images.map(
            (image: { id: string; file: { url: string } }) => (
              <a
                className="product-gallery-thumblist-item active"
                href="#first"
                key={image.id}
              >
                <img src={image.file.url} alt={product.name} />
              </a>
            )
          )}
        </div>
      </div>
      {!quickView && <PaymentNote />}
    </div>
  );
}
