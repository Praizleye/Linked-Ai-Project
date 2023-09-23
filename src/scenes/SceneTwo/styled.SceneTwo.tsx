import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleSceneTwoContainer = styled.div`
  ${Flexbox};
  min-height: 100vh;
  /* line-height: ${(props) => props.theme.lineHeight.lhXtraLarge}; */
  font-weight: ${(props) => props.theme.fontWeight.xBold};
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
  /* border-bottom: 1px solid ${(props) => props.theme.colors.borderColor}; */
  gap: 10rem;
  position: relative;
  @media ${device.xl} {
    padding: ${(props) => props.theme.paddings.navPadsXL};
    padding-top: 4rem;
    padding-bottom: 8rem;
  }
  @media ${device.lg} {
    padding: ${(props) => props.theme.paddings.navPadsL};
    padding-top: 4rem;
    padding-bottom: 8rem;
  }
  @media ${device.md} {
    padding: ${(props) => props.theme.paddings.navPadsMD};
    flex-direction: column;
    gap: 2rem;
    padding-top: 4rem;
    padding-bottom: 8rem;
  }

  @media ${device.sm} {
    gap: 4rem;
    padding-bottom: 4rem;
  }
  img:nth-of-type(1) {
    width: 50%;
    height: auto;
    @media ${device.md} {
      width: 80%;
    }
  }
  img:nth-of-type(2) {
    position: absolute;
    bottom: 10%;
    left: 40%;

    @media ${device.md} {
      bottom: 44%;
      z-index: -1;
    }
    @media ${device.sm} {
      z-index: -1;
    }
  }
  div.text-section {
    width: 50%;
    @media ${device.md} {
      width: 80%;
      text-align: center;
      margin-top: 3rem;
    }
    div.text-section__heading {
      font-family: ${({ theme }) => theme.fonts.headers};
      font-size: ${({ theme }) => theme.fontSize.headings};
      @media ${device.sm} {
        font-size: ${({ theme }) => theme.fontSize.above1px};
      }
      span {
        color: ${({ theme }) => theme.colors.alt2};
        display: block;
      }
    }
    div.text-section__long-text {
      font-size: ${({ theme }) => theme.fontSize.below1px};
      line-height: ${({ theme }) => theme.lineHeight.lhMedium};
      color: ${({ theme }) => theme.colors.textColor};
      margin-top: 1rem;
      font-weight: 400;
      @media ${device.sm} {
        font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
      }
    }
  }
`;
