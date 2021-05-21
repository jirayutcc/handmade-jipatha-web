import React from "react";
import imgLogo from "../../images/message.png";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  ImgWrap,
  Img,
  SocialIcons,
  SocialIconLink,
} from "./ContactElements";

const ContactSection = () => {
  return (
    <>
      <InfoContainer id="contact">
        <InfoWrapper>
          <InfoRow imgStart="false">
            <Column1>
              <TextWrapper>
                <TopLine>ติดต่อ</TopLine>
                <SocialIcons>
                  <SocialIconLink
                    href="//www.facebook.com/handmade.jipatha1"
                    target="_blank"
                    aria-label="Facebook"
                  >
                    <FaFacebook /> Handmade_Jipatha
                  </SocialIconLink>
                </SocialIcons>
                <SocialIcons>
                  <SocialIconLink
                    href="//www.instagram.com/handmade_jipatha"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    <FaInstagram /> Handmade_Jipatha
                  </SocialIconLink>
                </SocialIcons>
                <SocialIcons>
                  <SocialIconLink
                    href="//lin.ee/sqeJLPo"
                    target="_blank"
                    aria-label="Line"
                  >
                    <FaLine /> Handmade_Jipatha
                  </SocialIconLink>
                </SocialIcons>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={imgLogo} alt="contact" />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default ContactSection;
