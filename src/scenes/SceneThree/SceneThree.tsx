import { StyleSceneThreeContainer } from "./styled.SceneTheree";
import { images } from "../../constants";
import AnimatedGlow from "../../components/AnimatedAssets/AnimatedGlow";
import {
  AnimatedPurpleStar,
  AnimatedWhiteStar,
} from "../../components/AnimatedAssets/AnimatedStar";
import {
  generateRandomGlowValues,
  generateRandomDuration,
} from "../../utils/generateRandomCode";

const rand1 = generateRandomDuration();
const rand2 = generateRandomDuration();
export default function SceneThree() {
  const valX = [];
  const valY = [];
  for (let i = 0; i < 10; i++) {
    const genX = generateRandomGlowValues(50, 150) as number;
    const genY = generateRandomGlowValues(-50, 50) as number;

    valX.push(genX);
    valY.push(genY);
  }
  // console.log(valX);

  return (
    <div>
      <StyleSceneThreeContainer>
        <img src={images.RulesIllustration} alt="a-judge-illustration" />
        <div className="text-section">
          <div className="text-section__heading">
            Rules and
            <span> Guidelines</span>
          </div>
          <AnimatedGlow
            w={52}
            h={52}
            rot={180}
            posX={40}
            posY={-60}
            valX={valX}
            valY={valY}
          />
          <AnimatedGlow
            w={25}
            h={59}
            rot={0}
            posX={0}
            posY={-50}
            valX={valX}
            valY={valY}
          />
          <AnimatedWhiteStar w={1.675} h={2} posY={20} posX={80} rand={rand2} />
          <AnimatedPurpleStar
            w={1.675}
            h={2}
            posY={50}
            posX={50}
            rand={rand1}
          />
          <div className="text-section__long-text">
            Our tech hackathon is a melting pot of visionaries, and its purpose
            is as clear as day: to shape the future. Whether you're a coding
            genius, a design maverick, or a concept wizard, you'll have the
            chance to transform your ideas into reality. Solving real-world
            problems, pushing the boundaries of technology, and creating
            solutions that can change the world, that's what we're all about!
          </div>
        </div>
      </StyleSceneThreeContainer>
    </div>
  );
}
