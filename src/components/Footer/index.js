import React from "react";
import { FaFacebook, FaInstagram, FaLine } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";
import {
  FooterContainer,
  FooterWrap,
  // FooterLinksConainer,
  // FooterLinksWrapper,
  // FooterLinkItems,
  // FooterLinkTitle,
  // FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrap>
        {/* <FooterLinksConainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it worlk</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Caewwes</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it worlk</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Caewwes</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it worlk</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Caewwes</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to="/signin">How it worlk</FooterLink>
              <FooterLink to="/signin">Testimonial</FooterLink>
              <FooterLink to="/signin">Caewwes</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksConainer> */}
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Handmade Jipatha
            </SocialLogo>
            <WebsiteRights>
              Handmade Jipatha © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink href="//www.facebook.com/handmade.jipatha1" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="//www.instagram.com/handmade_jipatha" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="//lin.ee/sqeJLPo" target="_blank" aria-label="Line">
                <FaLine />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
