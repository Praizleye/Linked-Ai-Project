import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleSceneThreeContainer = styled.div`
  ${Flexbox};
  flex-direction: row-reverse;
  justify-content: center;
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
  img {
    width: 50%;
    height: auto;
    @media ${device.md} {
      width: 80%;
    }
  }
  div.text-section {
    /* background-color: red; */
    width: 50%;
    @media ${device.md} {
      text-align: center;
      width: 80%;
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
