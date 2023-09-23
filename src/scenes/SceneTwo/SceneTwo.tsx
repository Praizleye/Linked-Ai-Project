import { StyleSceneTwoContainer } from "./styled.SceneTwo";
import { images } from "../../constants";
import { AnimatedPurpleStar } from "../../components/AnimatedAssets/AnimatedStar";
import { generateRandomDuration } from "../../utils/generateRandomCode";

const rand1 = generateRandomDuration();
const rand2 = generateRandomDuration();
export default function SceneTwo() {
  return (
    <StyleSceneTwoContainer>
      <img src={images.BigIdea} alt="a-big-idea" loading="lazy" />
      <img src={images.Arrow} alt="arrow-illustration" loading="lazy" />
      <div className="text-section">
        <div className="text-section__heading">
          Introduction to getlinked <span>tech Hackathon 1.0</span>
        </div>
        <AnimatedPurpleStar
          w={1.875}
          h={2.25}
          posY={30}
          posX={10}
          rand={rand1}
        />
        <AnimatedPurpleStar w={1.3} h={1.56} posY={30} posX={90} rand={rand2} />

        <div className="text-section__long-text">
          Our tech hackathon is a melting pot of visionaries, and its purpose is
          as clear as day: to shape the future. Whether you're a coding genius,
          a design maverick, or a concept wizard, you'll have the chance to
          transform your ideas into reality. Solving real-world problems,
          pushing the boundaries of technology, and creating solutions that can
          change the world, that's what we're all about!
        </div>
      </div>
    </StyleSceneTwoContainer>
  );
}
