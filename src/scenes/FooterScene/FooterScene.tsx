import React from "react";
import { images } from "../../constants";
import {
  StyleFooterSection,
  StyleSplitTwo,
  StyleSplitThree,
} from "./styled.FooterScene";
import { generateRandomDuration } from "../../utils/generateRandomCode";
import {
  AnimatedWhiteStar,
  AnimatedPurpleStar,
} from "../../components/AnimatedAssets/AnimatedStar";

const rand1 = generateRandomDuration();
const rand2 = generateRandomDuration();
const rand3 = generateRandomDuration();
const rand4 = generateRandomDuration();

export default function FooterScene() {
  return (
    <StyleFooterSection>
      <div className="main-info">
        <AnimatedWhiteStar w={1.875} h={1.5} posY={45} posX={20} rand={rand2} />
        <AnimatedWhiteStar w={1.275} h={1.3} posY={80} posX={35} rand={rand3} />
        <AnimatedPurpleStar
          w={1.875}
          h={1.25}
          posY={30}
          posX={50}
          rand={rand3}
        />
        <AnimatedWhiteStar
          w={1.875}
          h={1.85}
          posY={80}
          posX={90}
          rand={rand4}
        />
        <AnimatedWhiteStar
          w={1.875}
          h={2.25}
          posY={30}
          posX={10}
          rand={rand1}
        />
        <AnimatedPurpleStar
          w={1.875}
          h={2.25}
          posY={80}
          posX={60}
          rand={rand1}
        />

        <div className="split-one">
          <div className="top__split-one">
            <img src={images.Logo} alt="getlinkedai-logo" />
            <div>
              Getlinked Tech Hackathon is a technology innovation program
              established by a group of organizations with the aim of showcasing
              young and talented individuals in the field of technology
            </div>
          </div>
          <div className="bottom__split-one">
            <div>Terms of Use</div>
            <div>Privacy Policy</div>
          </div>
        </div>
        <StyleSplitTwo className="split-two">
          <div className="split-two-heading">Useful Links</div>
          <li className="overview">Overview</li>
          <li className="timeline">Timeline</li>
          <li className="faqs">FAQs</li>
          <li className="register">Register</li>
          <li className="socials">
            <div>follow us:</div>
            <div className="social-icons">
              <img src={images.InstagramIcon} alt="instagram-icon" />
              <img src={images.XIcon} alt="x-icon" />
              <img src={images.LinkedInIcon} alt="linkedIn-icon" />
              <img src={images.FacebookIcon} alt="facebook-icon" />
            </div>
          </li>
        </StyleSplitTwo>
        <StyleSplitThree className="split-three">
          <div className="split-three-heading">Contact us</div>
          <div>
            <img src={images.Call} alt="call-icon" />
            +234 679 81819
          </div>
          <div className="location">
            <img src={images.Location} alt="call-icon" />
            27,Alara Street Yaba 100012 Lagos State
          </div>
        </StyleSplitThree>
      </div>
      <div className="copyright">All rights reserved. © getlinked Ltd.</div>
    </StyleFooterSection>
  );
}
