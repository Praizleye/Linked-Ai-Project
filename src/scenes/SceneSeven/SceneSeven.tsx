import { StyleSceneSevenContainer } from "./styled.SceneSeven";
import { images } from "../../constants";
import AnimatedGlow from "../../components/AnimatedAssets/AnimatedGlow";
import {
  valX,
  valY,
  generateRandomDuration,
} from "../../utils/generateRandomCode";
import { AnimatedWhiteStar } from "../../components/AnimatedAssets/AnimatedStar";

const rand1 = generateRandomDuration();
const rand2 = generateRandomDuration();
const rand3 = generateRandomDuration();
const rand4 = generateRandomDuration();
export default function SceneSeven() {
  return (
    <div>
      <StyleSceneSevenContainer id="overview">
        <div className="side-one">
          <img src={images.Medal} alt="medal-image" loading="lazy" />
        </div>
        <AnimatedGlow
          w={34}
          h={39}
          rot={0}
          posX={65}
          posY={5}
          valX={valX}
          valY={valY}
        />
        <AnimatedGlow
          w={34}
          h={39}
          rot={0}
          posX={0}
          posY={35}
          valX={valX}
          valY={valY}
        />
        <AnimatedWhiteStar w={1.875} h={1.5} posY={45} posX={20} rand={rand2} />
        <AnimatedWhiteStar w={1.275} h={1.3} posY={80} posX={35} rand={rand3} />
        <AnimatedWhiteStar
          w={1.875}
          h={2.25}
          posY={30}
          posX={50}
          rand={rand3}
        />
        <AnimatedWhiteStar
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

        <div className="side-two">
          <div className="text-container">
            <div className="text-heading">
              Prices and <span>Rewards</span>
            </div>
            <div className="sub-text">
              Highlight the prices or rewards for winners and
              <span>for participants</span>
            </div>
          </div>

          <div className="price-images-container">
            <div className="silver-card card">
              <img src={images.SilverMedal} alt="second-price-medal" />
              <div className="medal-text">
                <div>2nd</div>
                <div>Runner</div>
                <div>N300,000</div>
              </div>
            </div>
            <div className="gold-card card">
              <img src={images.GoldMedal} alt="first-price-medal" />
              <div className="medal-text">
                <div>1st</div>
                <div>Runner</div>
                <div>N400,000</div>
              </div>
            </div>
            <div className="bronze-card card">
              <img src={images.BronzeMedal} alt="third-price-medal" />
              <div className="medal-text">
                <div>3rd</div>
                <div>Runner</div>
                <div>N150,000</div>
              </div>
            </div>
          </div>
        </div>
      </StyleSceneSevenContainer>
    </div>
  );
}
