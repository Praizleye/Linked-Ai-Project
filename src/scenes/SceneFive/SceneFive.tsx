import React from "react";
import {
  StyleSceneFiveContainer,
  StyleFaqsContainer,
} from "./styled.SceneFive";
import { images } from "../../constants";
import { motion } from "framer-motion";
import {
  AnimatedPurpleStar,
  AnimatedWhiteStar,
} from "../../components/AnimatedAssets/AnimatedStar";
import { generateRandomDuration } from "../../utils/generateRandomCode";

interface FaqItem {
  title: string;
  content: string;
}

interface faqProps {
  faqItem: FaqItem[];
}

const faqItems = [
  {
    title: "Can I work on a project I started before the hackathon?",
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
  },
  {
    title: "What happens if I need help during the hackathon?",
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
  },
  {
    title: "What happens if I don't have an idea for a project?",
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
  },
  {
    title: "Can I join a team or do I have to come with one?",
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
  },
  {
    title: "What happens after the hackathon ends?",
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
  },
  {
    title: "Can I work on a project I started before the hackathon?",
    content:
      "high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition.",
  },
];

const rand1 = generateRandomDuration();
const rand2 = generateRandomDuration();

const AnimateQuestnIllustration = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: [0, 1, 1, 0],
    y: [-5, -10, -15],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "backInOut",
    },
  },
};
const AnimateQuestnIllustration2 = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: [0, 1, 1, 0],
    y: [0, -10, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};
const AnimateQuestnIllustration3 = {
  initial: {
    opacity: 0,
    y: 0,
  },
  animate: {
    opacity: [0, 1, 1, 0],
    y: [-5, -10, -15],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "backInOut",
    },
  },
};

export default function SceneFive() {
  const [active, setActiveItem] = React.useState<number | null>(null); //get active nav clicked

  const toggleFaqItem = (index: number) => {
    setActiveItem((prevActiveIndex) =>
      prevActiveIndex === index ? null : index
    );
  };
  return (
    <div>
      <StyleSceneFiveContainer>
        <div className="questn-illustration">
          <div className="small-bg-illustration">
            <motion.img
              src={images.Questn2}
              alt="question-illustration"
              initial="initial"
              animate="animate"
              variants={AnimateQuestnIllustration}
            />
            <motion.img
              src={images.Questn1}
              alt="question-illustration"
              initial="initial"
              animate="animate"
              variants={AnimateQuestnIllustration2}
            />
            <motion.img
              src={images.Questn2}
              alt="question-illustration"
              initial="initial"
              animate="animate"
              variants={AnimateQuestnIllustration3}
            />
          </div>
          <img src={images.FaqIllustration} alt="faq-illustration-image" />
        </div>

        <AnimatedPurpleStar
          w={2.875}
          h={2.25}
          posY={3}
          posX={90}
          rand={rand1}
        />
        <AnimatedPurpleStar
          w={1.575}
          h={1.85}
          posY={20}
          posX={10}
          rand={rand2}
        />
        <AnimatedPurpleStar
          w={1.875}
          h={2.25}
          posY={40}
          posX={40}
          rand={rand1}
        />
        <AnimatedWhiteStar
          w={1.875}
          h={2.25}
          posY={10}
          posX={50}
          rand={rand2}
        />
        <AnimatedWhiteStar
          w={1.875}
          h={2.25}
          posY={80}
          posX={50}
          rand={rand1}
        />
        <div className="text-section">
          <div className="text-section__heading">
            Frequently Ask <span> Question</span>
            <div>
              We got answers to the questions that you might want to ask about
              getlinked Hackathon 1.0
            </div>
          </div>
          <StyleFaqsContainer>
            <div className="faqs__container">
              {faqItems.map((item, index) => (
                <div className="faq__container" key={index}>
                  <div
                    className="faq__title"
                    onClick={() => toggleFaqItem(index)}
                  >
                    <div>{item.title}</div>

                    <div style={{ color: "#D434FE", fontSize: "1.5rem" }}>
                      {index === active ? "-" : "+"}
                    </div>
                  </div>
                  <div className="faq__content">
                    {index === active && item.content}
                  </div>
                </div>
              ))}
            </div>
          </StyleFaqsContainer>
        </div>
      </StyleSceneFiveContainer>
    </div>
  );
}
