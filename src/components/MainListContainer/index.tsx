import { Container } from "./styles";
import { SlideText } from "../SliderText";
import Slider from "react-slick";

const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



interface MainListContainerProps {
    title: string,
    children?: React.ReactNode
}

export function MainListContainer({ title, children }: MainListContainerProps){
    return(
        <Container>
            <h1>{title}</h1>
            <SlideText />
            {/* <div className="card-container">
                <div className="row">
                    {children}
                </div>
            </div> */}

            <Slider {...settings}>
                {children}
            </Slider>
        </Container>
    );
}