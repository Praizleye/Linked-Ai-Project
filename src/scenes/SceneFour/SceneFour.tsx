import { StyleSceneFourContainer } from "./styled.SceneFour";
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
export default function SceneFour() {
  // console.log(valX, valY);
  return (
    <div>
      {" "}
      <StyleSceneFourContainer>
        <img src={images.JudgeIllustration} alt="a-judge-illustration" />

        <AnimatedGlow
          w={64}
          h={59}
          rot={0}
          posX={0}
          posY={40}
          valX={valX}
          valY={valY}
        />
        <AnimatedGlow
          w={64}
          h={59}
          rot={180}
          posX={40}
          posY={10}
          valX={valX}
          valY={valY}
        />
        <AnimatedWhiteStar w={1.675} h={2} posY={50} posX={75} rand={rand1} />
        <AnimatedWhiteStar w={1.675} h={2} posY={70} posX={50} rand={rand2} />
        <AnimatedPurpleStar
          w={1.875}
          h={2.25}
          posY={10}
          posX={80}
          rand={rand1}
        />
        <div className="text-section">
          <div className="text-section__heading">
            Judging Criteria
            <span> Key Attributes</span>
          </div>
          <div className="criteria criteria-one">
            <span>Innovation and Creativity</span>: Evaluate the uniqueness and
            creativity of the solution. Consider whether it addresses a
            real-world problem in a novel way or introduces innovative features.{" "}
          </div>
          <div className="criteria criteria-two">
            <span>Functionality</span>: Assess how well the solution works. Does
            it perform its intended functions effectively and without major
            issues? Judges would consider the completeness and robustness of the
            solution.
          </div>

          <div className="criteria criteria-three">
            <span>Impact and Relevance</span>: Determine the potential impact of
            the solution in the real world. Does it address a significant
            problem, and is it relevant to the target audience? Judges would
            assess the potential social, economic, or environmental benefits.
          </div>
          <div className="criteria criteria-four">
            <span>Technical Complexity</span>: Evaluate the technical
            sophistication of the solution. Judges would consider the complexity
            of the code, the use of advanced technologies or algorithms, and the
            scalability of the solution.
          </div>
          <div className="criteria criteria-five">
            <span>Adherence to Hackathon Rules</span>: Judges will Ensure that
            the team adhered to the rules and guidelines of the hackathon,
            including deadlines, use of specific technologies or APIs, and any
            other competition-specific requirements.
          </div>
          <button> Read More</button>
        </div>
      </StyleSceneFourContainer>
    </div>
  );
}
