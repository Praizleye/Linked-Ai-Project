import { StyleSceneNineContainer } from "./styled.SceneNine";
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

export default function SceneNine() {
  return (
    <div>
      <StyleSceneNineContainer>
        <div className="side-one">
          <div className="text-section">
            <div className="text-section__heading">
              Privacy Policy and <span>Terms</span>
            </div>
            <div className="text-last-updated">
              Last updated on September 12, 2023
            </div>
            <div className="text-sub-text">
              Below are our privacy & policy, which outline a lot of goodies.
              it’s our aim to always take of our participant
            </div>
          </div>
          <AnimatedGlow
            w={34}
            h={39}
            rot={0}
            posX={85}
            posY={75}
            valX={valX}
            valY={valY}
          />

          <AnimatedWhiteStar
            w={1.875}
            h={1.5}
            posY={45}
            posX={20}
            rand={rand2}
          />
          <AnimatedWhiteStar
            w={1.275}
            h={1.3}
            posY={80}
            posX={35}
            rand={rand3}
          />
          <AnimatedPurpleStar
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
          <AnimatedPurpleStar
            w={1.875}
            h={2.25}
            posY={80}
            posX={60}
            rand={rand1}
          />

          <div className="privacy-card">
            <div className="privacy-card-container">
              <div className="text-one">
                At getlinked tech Hackathon 1.0, we value your privacy and are
                committed to protecting your personal information. This Privacy
                Policy outlines how we collect, use, disclose, and safeguard
                your data when you participate in our tech hackathon event. By
                participating in our event, you consent to the practices
                described in this policy.{" "}
              </div>
              <div className="text-two">
                <div className="text-two__heading">Licensing Policy</div>
                <div className="text-two__sub-text">
                  Here are terms of our Standard License:
                </div>
                <div className="text-two__accept-terms">
                  <img src={images.ListTerms} alt="" />

                  <span>
                    {"    "}
                    The Standard License grants you a non-exclusive right to
                    navigate and register for our event
                  </span>
                </div>
                <div className="text-two__accept-terms">
                  <img src={images.ListTerms} alt="" />
                  <span>
                    {"    "}
                    You are licensed to use the item available at any free
                    source sites, for your project developement
                  </span>
                </div>
                <button>Read More</button>
              </div>
            </div>
          </div>
        </div>

        <div className="side-two">
          <img src={images.SecurityBg} alt="" className="security-bg" />
          <img src={images.PadlockIllustration} alt="" />
        </div>
      </StyleSceneNineContainer>
    </div>
  );
}
