import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import { Button } from "../ButtonElements";
import {
  VideoContainer,
  VideoBg,
  VideoBackground,
  VideoContent,
  VideoH1,
  VideoP,
  VideoBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "./VideoElements";

const VideoSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <VideoContainer>
      <VideoBg>
        <VideoBackground autoPlay loop muted src={Video} type="video/mp4" />
      </VideoBg>
      <VideoContent>
        <VideoH1>Handmade Jipatha Shop</VideoH1>
        <VideoP>จำหน่ายสินค้า handmade ต่างๆ</VideoP>
        <VideoBtnWrapper>
          <Button
            to="about"
            smooth={true}
            duration={500}
            spy={true}
            exact="true"
            offset={-80}
            onMouseEnter={onHover}
            onMouseLeave={onHover}
            primary="true"
            dark="true"
          >
            เริ่ม {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </VideoBtnWrapper>
      </VideoContent>
    </VideoContainer>
  );
};

export default VideoSection;
