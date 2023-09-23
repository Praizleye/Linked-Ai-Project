import {
  AnimatedPurpleStar,
  AnimatedWhiteStar,
} from "../../components/AnimatedAssets/AnimatedStar";
import { StyleSceneSixContainer, StyleTimeline } from "./styled.SceneSix";
import { motion, AnimatePresence } from "framer-motion";
import { generateRandomDuration } from "../../utils/generateRandomCode";

const fadeInVariants = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 2,
      delay: 0.21,
      delayChildren: 0.3,
      staggerChildren: 0.05,
    },
    exit: {
      opacity: 0,
    },
  },
};

const rand1 = generateRandomDuration();
const rand2 = generateRandomDuration();
export default function SceneSix() {
  return (
    <StyleSceneSixContainer id="timeline">
      <div className="timeline-heading">Timeline</div>
      <div className="timeline-sub-text">
        Here is the breakdown of the time we anticipate
        <span>using for the upcoming event.</span>
      </div>
      <AnimatedPurpleStar w={1.6} h={2.16} posY={10} posX={90} rand={rand2} />
      <AnimatedWhiteStar w={1.3} h={1.56} posY={50} posX={45} rand={rand1} />
      <AnimatedWhiteStar w={1.3} h={1.56} posY={90} posX={90} rand={rand1} />
      <StyleTimeline>
        <AnimatePresence>
          {eventProperties?.map((data: eventPropertiesType) => (
            <motion.div
              key={data.val}
              className="event-container"
              initial="hidden"
              whileInView="animate"
              variants={fadeInVariants}
            >
              <div className="text-container">
                <div className="event-heading">{data.heading}</div>
                <div className="event-desc">
                  {data.subtext}
                  <span>{data.date}</span>
                </div>
              </div>

              <div className="event-number-container">
                <div className={`vert-line vert-line-${data.val}`}></div>
                <div className="event-number">{data.val}</div>
              </div>

              <div className="event-date">{data.date}</div>
            </motion.div>
          ))}
        </AnimatePresence>
      </StyleTimeline>
    </StyleSceneSixContainer>
  );
}

interface eventPropertiesType {
  heading: string;
  subtext: string;
  val: number;
  date: string;
}

const eventProperties: eventPropertiesType[] = [
  {
    heading: "Hackathon Announcement",
    subtext:
      "The getlinked tech hackathon 1.0 is formally announced to the general public and teams begin to get ready to register",
    val: 1,
    date: "November 18, 2023",
  },
  {
    heading: "Team Registration begins",
    subtext:
      "Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register",
    val: 2,
    date: "November 18, 2023",
  },
  {
    heading: "Team Registration ends",
    subtext: "Interested Participants are no longer Allowed toregister",
    val: 3,
    date: "November 18, 2023",
  },
  {
    heading: "Announcement of the accepted teams and ideas",
    subtext:
      "All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced",
    val: 4,
    date: "November 18, 2023",
  },
  {
    heading: "Getlinked Hackathon 1.0 Offically Begins",
    subtext:
      "Accepted teams can now proceed to build their ground breaking skill driven solutions",
    val: 5,
    date: "November 18, 2023",
  },
  {
    heading: "Demo Day",
    subtext:
      "Teams get the opportunity to pitch their projects to judges.The winner of the hackathon will also be announced on this day",
    val: 6,
    date: "November 18, 2023",
  },
];
