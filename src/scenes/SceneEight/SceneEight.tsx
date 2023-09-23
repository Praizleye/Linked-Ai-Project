import React from "react";
import { StyleSceneEightContainer } from "./styled.SceneEight";
import { images } from "../../constants";
import AnimatedGlow from "../../components/AnimatedAssets/AnimatedGlow";
import {
  valX,
  valY,
  generateRandomDuration,
} from "../../utils/generateRandomCode";
import {
  AnimatedWhiteStar,
  AnimatedPurpleStar,
} from "../../components/AnimatedAssets/AnimatedStar";

const rand1 = generateRandomDuration();
const rand2 = generateRandomDuration();
const rand3 = generateRandomDuration();
const rand4 = generateRandomDuration();
export default function SceneEight() {
  return (
    <div>
      <StyleSceneEightContainer>
        <div className="text-section">
          <div className="text-section__heading">Partners and Sponsors</div>
          <div className="text-section__sub-text">
            Getlinked Hackathon 1.0 is honored to have the following major
            <span>companies as its partners and sponsors</span>
          </div>
        </div>
        <AnimatedGlow
          w={34}
          h={39}
          rot={0}
          posX={80}
          posY={-30}
          valX={valX}
          valY={valY}
        />
        <AnimatedGlow
          w={34}
          h={39}
          rot={0}
          posX={0}
          posY={55}
          valX={valX}
          valY={valY}
        />
        <AnimatedWhiteStar w={1.875} h={1.5} posY={45} posX={20} rand={rand2} />
        <AnimatedPurpleStar
          w={1.275}
          h={1.3}
          posY={80}
          posX={35}
          rand={rand3}
        />
        <AnimatedWhiteStar
          w={1.875}
          h={2.25}
          posY={30}
          posX={50}
          rand={rand3}
        />
        <AnimatedPurpleStar
          w={1.875}
          h={2.25}
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

        <div className="partners-images-container">
          <div className="image-container">
            <img src={images.LibertyLogo} alt="liberty-logo" loading="lazy" />
          </div>
          <div className="image-container">
            <img
              src={images.LibertyPayLogo}
              alt="liberty-pay-logo"
              loading="lazy"
            />
            <div className="box"></div>
          </div>
          <div className="image-container">
            <img src={images.WinwiseLogo} alt="wine-wise-logo" loading="lazy" />
            <div className="box"></div>
          </div>
          <div className="image-container">
            <img src={images.WisperLogo} alt="whisper-logo" loading="lazy" />
          </div>
          <div className="image-container">
            <img src={images.PayboxLogo} alt="paybox-logo" loading="lazy" />
          </div>
          <div className="image-container">
            <img src={images.VisualPluzLogo} alt="payboz-logo" loading="lazy" />
          </div>
        </div>
      </StyleSceneEightContainer>
    </div>
  );
}
