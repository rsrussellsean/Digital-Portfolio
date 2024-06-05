import "./ImageCarousel.scss";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export default function ImageCarousel({ id }) {
  const images = [
    {
      id: 1,
      img: "/project/alliance2.png",
    },
    {
      id: 1,
      img: "/project/alliance4.png",
    },
    {
      id: 1,
      img: "/project/alliance3.png",
    },
    {
      id: 2,
      img: "/project/bgf1.png",
    },
    {
      id: 2,
      img: "/project/bgf2.png",
    },
    {
      id: 2,
      img: "/project/bgf3.png",
    },
    {
      id: 3,
      img: "/project/rd.png",
    },
    {
      id: 3,
      img: "/project/rd2.png",
    },
    {
      id: 3,
      img: "/project/rd3.png",
    },
    {
      id: 4,
      img: "/project/en2.png",
    },
    {
      id: 4,
      img: "/project/en3.png",
    },
    {
      id: 4,
      img: "/project/en4.png",
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
