import { useState, useEffect, useRef } from "react";
import { StyleLandingPageContainer } from "./styled.LandingPage";
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

export default function LandingPageScene() {
  const targetDate = new Date("2023-09-26T00:00:00Z").getTime(); // Convert to timestamp
  const now = new Date().getTime(); // Convert to timestamp
  const initialTimeRemaining = Math.max(targetDate - now, 0);

  const [days, setDays] = useState(
    Math.floor(initialTimeRemaining / (1000 * 60 * 60 * 24))
  );
  const [hours, setHours] = useState(
    Math.floor(
      (initialTimeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    )
  );
  const [minutes, setMinutes] = useState(
    Math.floor((initialTimeRemaining % (1000 * 60 * 60)) / (1000 * 60))
  );
  const [seconds, setSeconds] = useState(
    Math.floor((initialTimeRemaining % (1000 * 60)) / 1000)
  );

  const timeRemainingRef = useRef(initialTimeRemaining);

  useEffect(() => {
    const timer = setInterval(() => {
      if (timeRemainingRef.current > 0) {
        setDays(Math.floor(timeRemainingRef.current / (1000 * 60 * 60 * 24)));
        setHours(
          Math.floor(
            (timeRemainingRef.current % (1000 * 60 * 60 * 24)) /
              (1000 * 60 * 60)
          )
        );
        setMinutes(
          Math.floor(
            (timeRemainingRef.current % (1000 * 60 * 60)) / (1000 * 60)
          )
        );
        setSeconds(Math.floor((timeRemainingRef.current % (1000 * 60)) / 1000));
        timeRemainingRef.current -= 1000;
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <StyleLandingPageContainer>
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
        posX={5}
        posY={35}
        valX={valX}
        valY={valY}
      />

      <AnimatedWhiteStar w={1.875} h={1.5} posY={45} posX={20} rand={rand2} />
      <AnimatedWhiteStar w={1.275} h={1.3} posY={80} posX={35} rand={rand3} />
      <AnimatedPurpleStar w={1.875} h={2.25} posY={30} posX={50} rand={rand3} />
      <AnimatedWhiteStar w={1.875} h={2.25} posY={80} posX={90} rand={rand4} />
      <AnimatedWhiteStar w={1.875} h={2.25} posY={30} posX={10} rand={rand1} />
      <AnimatedPurpleStar w={1.875} h={2.25} posY={80} posX={60} rand={rand1} />
      <div className="side-one-container">
        <img
          src={images.Creative}
          alt="creative-ideas-illustration"
          className="creative-idea-image"
        />
        <div className="heading-text-one">getlinked Tech</div>
        <div className="heading-text-two">
          Hackathon <span style={{ color: "#D434FE" }}>1.0</span>
          <img src={images.Chain} alt="chain-illustration" />
          <img src={images.Spark} alt="idea-spark-illustration" />
        </div>
        <div className="heading-text-three">
          Participate in getlinked tech Hackathon 2023 stand a chance to win a
          Big prize
        </div>
        <button>Register</button>
        <div className="timer">
          {days < 10 ? `0${days}` : days}
          <sub>D</sub>{" "}
          <span>
            {hours < 10 ? `0${hours}` : hours}
            <sub>H</sub>
          </span>
          <span>
            {minutes < 10 ? `0${minutes}` : minutes}
            <sub>M</sub>
          </span>
          <span>
            {seconds < 10 ? `0${seconds}` : seconds}
            <sub>S</sub>
          </span>
        </div>
      </div>
      <div className="side-two-container">
        <div className="text-top-right">
          <span>Igniting a Revolution in HR Innovation</span>
          <img src={images.LineStroke} alt="line-stroke" />
        </div>
        <img
          src={images.ManWearingGlasses}
          alt="man-wearing-glasses"
          className="main-image-one"
        />
        <img
          src={images.LightDisplay}
          alt="light-showing-star-with-particles"
          className="main-image-two"
        />
      </div>
    </StyleLandingPageContainer>
  );
}
