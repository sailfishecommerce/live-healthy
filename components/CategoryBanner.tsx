/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface CategoryBannerProps {
  categoryImg?: string;
  categoryTitle: string;
  categoryCaption: string;
  bannerBgColor: string;
  controls: {
    navigationNextRef: any;
    navigationPrevRef: any;
  };
  local?: boolean;
}

export default function CategoryBanner({
  categoryImg,
  categoryTitle,
  categoryCaption,
  bannerBgColor,
  controls,
  local,
}: CategoryBannerProps) {
  const { navigationNextRef, navigationPrevRef } = controls;

  return (
    <div className="col-md-5">
      <div className="categoryBannerColor d-flex flex-column h-100 overflow-hidden rounded-3">
        <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
          <div>
            <h3 className="mb-1 title">{categoryTitle}</h3>
            <Link href="/shop" passHref>
              <a className="fs-md text-white fw-bold">
                {categoryCaption}
                <i className="ci-arrow-right fs-xs align-middle ms-1"></i>
              </a>
            </Link>
          </div>
          <div className="d-flex">
            <button
              aria-label="Prev"
              className="control"
              ref={navigationPrevRef}
              type="button"
            >
              <i className="ci-arrow-left"></i>
            </button>
            <button
              aria-label="Next"
              className="control"
              ref={navigationNextRef}
              type="button"
            >
              <i className="ci-arrow-right"></i>
            </button>
          </div>
        </div>
        <Link href="/shop" passHref>
          {local ? (
            <a className="d-none d-md-block mt-auto">
              <div className="d-block w-100">
                <img
                  className="categoryBanner"
                  src={categoryImg}
                  alt="category banner"
                />
              </div>
            </a>
          ) : (
            <a className="d-none d-md-block mt-auto">
              <div className="d-block w-100">{categoryImg}</div>
            </a>
          )}
        </Link>
      </div>
      <style jsx>
        {`
          .categoryBannerColor {
            background-color: ${bannerBgColor};
          }
          .categoryBanner {
            height: 100%;
            width: 100%;
          }
          button.control {
            height: 40px;
            width: 40px;
            margin: 10px;
            border: none;
            background-color: white;
            border-radius: 50%;
            font-size: 15px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          button.control:hover {
            opacity: 0.8;
          }
          @media (max-width: 768px) {
            .title {
              font-size: 20px;
            }
          }
        `}
      </style>
    </div>
  );
}
