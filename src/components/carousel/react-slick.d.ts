declare module "react-slick" {
  import { Component } from "react";

  interface Settings {
    dots?: boolean;
    infinite?: boolean;
    speed?: number;
    slidesToShow?: number;
    slidesToScroll?: number;
    autoplay?: boolean;
    autoplaySpeed?: number;
    pauseOnHover?: boolean;
    arrows?: boolean;
  }

  class Slider extends Component<Settings> {}

  export default Slider;
}
