/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

interface CategoryBannerProps {
  categoryImg?: string;
  categoryTitle: string;
  categoryCaption: string;
  bannerBgColor: string; 
  local?: boolean;
}

export default function CategoryBanner({
  categoryImg,
  categoryTitle,
  categoryCaption,
  bannerBgColor,
  local,
}: CategoryBannerProps) {
  return (
    <div className="col-md-5">
      <div
        className="d-flex flex-column h-100 overflow-hidden rounded-3"
        style={{ backgroundColor: `${bannerBgColor}` }}
      >
        <div className="d-flex justify-content-between px-grid-gutter py-grid-gutter">
          <div>
            <h3 className="mb-1">{categoryTitle}</h3>
            <Link href="/shop" passHref>
              <a className="fs-md text-white">
                {categoryCaption}
                <i className="ci-arrow-right fs-xs align-middle ms-1"></i>
              </a>
            </Link>
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
        `}
      </style>
    </div>
  );
}
