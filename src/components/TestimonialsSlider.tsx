import { testimonials } from "@/constants/home";
import Slider from "react-slick";

const settings = {
  customPaging: (i: number) => {
    return <div className="dot"></div>;
  },
  dotsClass: "slick-dots slick-thumb",
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  draggable: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: true,
        draggable: true,
        arrows: true,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        draggable: true,
        dots: true,
        arrows: true,
      },
    },
  ],
};

const TestimonialsSlider: React.FC = () => {
  return (
    <div className="testimonials-slider">
      <Slider {...settings}>
        {testimonials.map((item, i) => (
          <div key={i}>
            <div className="testimonials-slide">
              <div className="slide-body">
                <img className="quote-icon" src="./icons/quote.svg" alt="" />
                <p className="quote text-sm">{item.quote}</p>
              </div>
              <div className="slide-footer">
                <div className="image-wrap">
                  <img src={item.imageUrl} alt="" />
                </div>
                <div className="text-wrap">
                  <span className="name text-thin">{item.authorName}</span>
                  <span className="position text-sm-2">
                    {item.authorPosition}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TestimonialsSlider;
