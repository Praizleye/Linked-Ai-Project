import { motion, Variants } from "framer-motion";
import { images } from "../../constants";
import styled from "styled-components";

interface StarPropsTypes {
  w: number;
  h: number;
  posX?: number;
  posY?: number;
  valX?: number[];
  valY?: number[];
  rot?: number;
}
const StyleAnimatedGlow = styled(motion.div)<StarPropsTypes>`
  position: absolute;
  top: ${(props) => props.posY + "%"};
  right: ${(props) => props.posX + "%"};
  border-radius: 50%;
  img {
    width: ${(props) => props.w + "rem"}!important;
    height: ${(props) => props.h + "rem"}!important;
    border-radius: 50%;
  }
  transform: rotate(${(props) => props.rot + "deg"}) !important;

  /* opacity: 0.5; */
`;

export default function AnimatedGlow({
  w,
  h,
  rot,
  posX,
  posY,
  valX,
  valY,
}: StarPropsTypes) {
  const AnimateGlow: Variants = {
    initial: { x: 0, y: 0 },

    animate: {
      x: valX,
      y: valY,

      transition: {
        duration: 15,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
        repeatDelay: 5,
        times: [0, 0.2, 0.5, 0.8, 1],
      },
    },
  };
  // console.log(valX, valY);
  return (
    <StyleAnimatedGlow w={w} h={h} posX={posX} posY={posY} rot={rot}>
      <motion.img
        src={images.Glow}
        alt="glow-background-animated"
        initial="initial"
        animate="animate"
        variants={AnimateGlow}
      />
    </StyleAnimatedGlow>
  );
}
