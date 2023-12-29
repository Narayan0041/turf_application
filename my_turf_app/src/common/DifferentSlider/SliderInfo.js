import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { feature } from "./FeatureSectionData";
import InfoSliderCard from "./InfoSliderCard";

export default class SliderInfo extends Component {
 constructor(props){
  super();
  this.state={
     ImageData:[],
  }
}
componentDidMount =()=>{ 
  this.setState({ImageData:feature.featureData.image})
 }
 
  render() {
    const settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 330,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <>
        <Slider className="Different" {...settings}>
          {/* Slides */}
          {
           this.state.ImageData.map((image)=>{
            return(
            <div>
              <InfoSliderCard image={image.image}/>
            </div>
            )
           }) 
          }
        </Slider>
      </>
    );
  }
}
