import Image from "@/components/Image";
import useMediaQuery from "@/hooks/useMediaQuery";

interface BannersProps {
  banner1Title: string;
  banner1Caption: string;
  banner2Title: string;
  banner2Caption: string;
}

export default function Banners({
  banner1Title,
  banner1Caption,
  banner2Title,
  banner2Caption,
}: BannersProps) {
  const tabWidth = useMediaQuery("(max-width:768px)");
  const bannerSize = tabWidth
    ? { height: 150, width: 300 }
    : { height: 200, width: 400 };

  return (
    <section className="container pb-4 mb-md-3">
      <div className="row">
        <div className="col-md-8 mb-4">
          <div className="d-sm-flex justify-content-between align-items-center bg-secondary overflow-hidden rounded-3">
            <div className="py-4 my-2 my-md-0 py-md-5 px-4 ms-md-3 text-center text-sm-start">
              <h4 className="title fs-lg fw-light mb-2">{banner1Title}</h4>
              <h3 className="mb-4 banner1Caption">{banner1Caption}</h3>
              <a className="btn btn-primary btn-shadow btn-sm" href="#">
                Shop Now
              </a>
            </div>
            <div className="bannerImgContainer">
              <Image
                className="d-block ms-auto"
                src="/img/shop/catalog/banner.webp"
                alt="Shop Converse"
                height={bannerSize.height}
                width={bannerSize.width}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="bannerImg d-flex flex-column h-100 justify-content-center bg-size-cover bg-position-center rounded-3">
            <div className="py-4 my-2 px-4 text-center">
              <div className="py-1">
                <h5 className="mb-2 banner2Title"> {banner2Title}</h5>
                <p className="fs-sm text-muted">{banner2Caption}</p>
                <a className="btn btn-primary btn-shadow btn-sm" href="#">
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .bannerImg {
              background-image: url(img/blog/banner-bg.webp);
            }
            @media (max-width: 768px) {
              .banner1Caption {
                font-size: 22px;
              }
            }
          `}
        </style>
      </div>
    </section>
  );
}
