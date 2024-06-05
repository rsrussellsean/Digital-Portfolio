import "./ImageCarousel.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ImageCarousel({ id }) {
  const images = [
    {
      id: 1,
      img: "/Digital-Portfolio/project/alliance2.png",
    },
    {
      id: 1,
      img: "/Digital-Portfolio/project/alliance4.png",
    },
    {
      id: 1,
      img: "/Digital-Portfolio/project/alliance3.png",
    },
    {
      id: 2,
      img: "/Digital-Portfolio/project/bgf1.png",
    },
    {
      id: 2,
      img: "/Digital-Portfolio/project/bgf2.png",
    },
    {
      id: 2,
      img: "/Digital-Portfolio/project/bgf3.png",
    },
    {
      id: 3,
      img: "/Digital-Portfolio/project/rd.png",
    },
    {
      id: 3,
      img: "/Digital-Portfolio/project/rd2.png",
    },
    {
      id: 3,
      img: "/Digital-Portfolio/project/rd3.png",
    },
    {
      id: 4,
      img: "/Digital-Portfolio/project/en2.png",
    },
    {
      id: 4,
      img: "/Digital-Portfolio/project/en3.png",
    },
    {
      id: 4,
      img: "/Digital-Portfolio/project/en4.png",
    },
  ];
  return (
    <div className="ImageCarousel">
      <Carousel
        className="crsl"
        autoPlay
        interval={3000}
        stopOnHover={true}
        infiniteLoop
        swipeable={true}
        transitionTime={800}
        showStatus={false}
        showIndicators={false}
        emulateTouch={true}
      >
        {images
          .filter((image) => image.id === id)
          .map((image) => (
            <img src={image.img} />
          ))}

        {/* {images.map((image) => (
          <img src={image.download_url} alt={image.author} />
        ))} */}
      </Carousel>
    </div>
  );
}
