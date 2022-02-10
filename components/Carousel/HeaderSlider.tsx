import { Splide, SplideSlide } from "@splidejs/react-splide";
import Image from "next/image";
import "@splidejs/splide/dist/css/splide.min.css";
import sliderContent from "@/json/header-slider.json";

export default function HeaderSlider() {
  return (
    <div className="header-slider">
      <Splide
        options={{
          type: "loop",
          height: "3rem",
          direction: "ttb",
          autoplay: true,
        }}
      >
        {sliderContent.map((content: any, index: number) => (
          <SplideSlide key={index}>
            <div className="item slider-container d-flex align-items-center m-auto justify-content-center">
              <Image
                height={40}
                width={40}
                src={content.icon}
                alt={content.text}
              />
              <p className="text-white text-center my-0 mx-2">{content.text}</p>
            </div>
          </SplideSlide>
        ))}
      </Splide>
      <style jsx>{`
        .slider-container {
          background-color: #373f50;
        }
        .icon-container {
          height: 50px;
          width: 60px;
          margin: 0px 10px;
        }
        @media (max-width: 768px) {
          .header-slider p {
            font-size: 13px;
          }
        }
      `}</style>
    </div>
  );
}
