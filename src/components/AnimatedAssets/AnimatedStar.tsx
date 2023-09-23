import { motion } from "framer-motion";
import { images } from "../../constants";
import styled from "styled-components";

interface StarPropsTypes {
  w: number;
  h: number;
  posX?: number;
  posY?: number;
  rand?: number;
}

const StyleAnimatedWhiteStar = styled(motion.div)<StarPropsTypes>`
  position: absolute;
  top: ${(props) => props.posY + "%"};
  right: ${(props) => props.posX + "%"};
  img {
    width: ${(props) => props.w + "rem"}!important;
    height: ${(props) => props.h + "rem"}!important;
  }
`;
const StyleAnimatedPurpleStar = styled(motion.div)<StarPropsTypes>`
  position: absolute;
  top: ${(props) => props.posY + "%"};
  right: ${(props) => props.posX + "%"};
  img {
    width: ${(props) => props.w + "rem"} !important;
    height: ${(props) => props.h + "rem"} !important;
  }
`;

export const AnimatedWhiteStar = ({
  w,
  h,
  posX,
  posY,
  rand,
}: StarPropsTypes) => {
  const AnimateWhiteStar = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [1, 0, 1],
      transition: {
        duration: rand,
        repeat: Infinity,
        // delay,
      },
    },
  };

  return (
    <StyleAnimatedWhiteStar w={w} h={h} posX={posX} posY={posY}>
      <motion.img
        src={images.WhiteStar}
        alt="small-white-star-animated"
        loading="lazy"
        initial="initial"
        animate="animate"
        variants={AnimateWhiteStar}
      />
    </StyleAnimatedWhiteStar>
  );
};
export const AnimatedPurpleStar = ({
  w,
  h,
  posX,
  posY,
  rand,
}: StarPropsTypes) => {
  const AnimatePurpleStar = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: [1, 0, 1],
      transition: {
        duration: rand,
        repeat: Infinity,
      },
    },
  };
  return (
    <StyleAnimatedPurpleStar w={w} h={h} posX={posX} posY={posY}>
      <motion.img
        src={images.PurpleStar}
        alt="small-white-star-animated"
        loading="lazy"
        initial="initial"
        animate="animate"
        variants={AnimatePurpleStar}
      />
    </StyleAnimatedPurpleStar>
  );
};
