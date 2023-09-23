import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleSceneFiveContainer = styled.div`
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
    flex-direction: column-reverse;
    gap: 2rem;
    padding-top: 4rem;
    padding-bottom: 8rem;
  }
  div.questn-illustration {
    width: 50%;
    ${Flexbox}
    flex-direction: column;
    align-items: flex-start;
    @media ${device.md} {
      width: 80%;
    }
    /* justify-content: center; */
    div.small-bg-illustration {
      img {
        width: 2.3rem;
        height: auto;
      }
      img:nth-of-type(2) {
        margin: 0 2rem;
        width: 3.5rem;
      }
      img:nth-of-type(3) {
        margin: 0 2rem;
        width: 2rem;
      }
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  div.text-section {
    margin-top: 4rem;
    width: 50%;
    @media ${device.md} {
      width: 80%;
    }
    div.text-section__heading {
      font-family: ${({ theme }) => theme.fonts.headers};
      font-size: ${({ theme }) => theme.fontSize.headings};
      @media ${device.md} {
        ${Flexbox};
        flex-direction: column;
        justify-content: center;
        align-self: center;
      }
      /* background-color: red; */
      @media ${device.sm} {
        text-align: center;
        font-size: ${({ theme }) => theme.fontSize.above1px};
      }
      span {
        color: ${({ theme }) => theme.colors.alt2};
        display: block;
        @media ${device.sm} {
          font-size: ${({ theme }) => theme.fontSize.above1px};
        }
      }
      div {
        font-family: ${({ theme }) => theme.fonts.text};
        font-size: ${({ theme }) => theme.fontSize.below1px};
        width: 60%;
        @media ${device.md} {
          text-align: center;
          ${Flexbox};
          flex-direction: column;
          justify-content: center;
          align-self: center;
        }
        @media ${device.sm} {
          font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
        }
      }
    }
    div.text-section__long-text {
      font-size: ${({ theme }) => theme.fontSize.below1px};
      line-height: ${({ theme }) => theme.lineHeight.lhMedium};
      color: ${({ theme }) => theme.colors.textColor};
      margin-top: 1rem;
      font-weight: 400;
    }
  }
`;

export const StyleFaqsContainer = styled.div`
  height: 100%;
  margin-top: 3rem;
  div.faqs__container {
    @media ${device.lg} {
      width: 100%;
    }
    ${Flexbox}
    flex-direction: column;
    width: 80%;
    margin-bottom: 4rem;
    @media ${device.lg} {
      width: 100%;
    }
    div.faq__container {
      align-self: flex-start;
      width: 100%;
      /* margin: 2rem auto; */
      div.faq__title {
        margin-top: 1rem;
        padding-bottom: 1rem;
        font-size: ${(props) => props.theme.fontSize.below1px};
        line-height: ${(props) => props.theme.lineHeight.lhMedium};
        font-weight: ${(props) => props.theme.fontWeight.light};
        color: ${(props) => props.theme.colors.textColor};
        transition: all 0.3s ease-in-out;
        border-bottom: 2px solid ${(props) => props.theme.colors.alt2};
        /* height: 2rem; */
        @media ${device.md} {
          font-size: 20px;
        }
        @media ${device.sm} {
          font-size: 14px;
        }
        :hover {
          cursor: pointer;
          /* background-color: ${(props) => props.theme.colors.alt1}; */
        }
        ${Flexbox};
        cursor: pointer;
      }
      div.faq__active.faq__title {
        color: ${(props) => props.theme.colors.primary};
      }
      div.faq__content {
        padding: 0.5rem 0.5rem 0;
        font-weight: ${(props) => props.theme.fontWeight.light};
        font-size: ${(props) => props.theme.fontSize.below1px};
      }
    }
  }
`;
