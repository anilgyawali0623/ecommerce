import React from "react";
import { Fade, Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import bannerImage from "../pictures/asset22.jpeg";
const fadeImages = [
  {
    url: "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "First Slide",
  },
  {
    url: "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
    caption: "Second Slide",
  },
  {
    url: "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
    caption: "Third Slide",
  },
];
function BannerImage() {
  return (
    <div className="slide-container  pb-9">
      <Slide
        autoplay={true}
        duration={4000}
        arrows={false}
        infinite={true}
        canSwipe={true}
      >
        {fadeImages.map((fadeImage, index) => (
          <div key={index}>
            <img className="" style={{ width: "100%" }} src={bannerImage} />
          </div>
        ))}
      </Slide>
    </div>
  );
}

export default BannerImage;
