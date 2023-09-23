import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleSceneEightContainer = styled.div`
  ${Flexbox};
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  font-weight: ${(props) => props.theme.fontWeight.xBold};
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  position: relative;
  padding-top: 4rem;
  padding-bottom: 8rem;
  gap: 5rem;
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
    padding-top: 4rem;
    padding-bottom: 8rem;
  }
  div.text-section__heading {
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: ${({ theme }) => theme.fontSize.headings};
    text-align: center;
    @media ${device.sm} {
      font-size: ${({ theme }) => theme.fontSize.above1px};
    }
  }
  div.text-section__sub-text {
    text-align: center;
    font-size: ${({ theme }) => theme.fontSize.below1px};
    line-height: ${({ theme }) => theme.lineHeight.lhMedium};
    color: ${({ theme }) => theme.colors.textColor};
    margin-top: 1rem;
    font-weight: 400;
    span {
      display: block;
    }
    @media ${device.sm} {
      font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
    }
  }
  div.partners-images-container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    place-items: center;
    grid-gap: 2rem;
    border-radius: 0.3125rem;
    border: 1px solid #d434fe;
    padding: 4rem;

    @media ${device.lg} {
      padding: 4rem 2rem;
    }
    @media ${device.sm} {
      padding: 3rem 1rem;
    }
    div.image-container {
      border: 0.25rem solid ${({ theme }) => theme.colors.alt2};
      width: 16rem;
      height: 10.96rem;
      ${Flexbox};
      justify-content: center;
      align-self: center;
      border-top: none;
      border-right: none;
      @media ${device.lg} {
        width: 12rem;
        height: 7.96rem;
      }
      @media ${device.md} {
        width: 9rem;
        height: 5.96rem;
      }
      @media ${device.sm} {
        width: 4rem;
        height: 3.96rem;
      }
    }
    img {
      @media ${device.lg} {
        width: 6rem;
        height: auto;
      }
      @media ${device.md} {
        width: 4rem;
        height: auto;
      }
      @media ${device.sm} {
        width: 2rem;
        height: auto;
      }
    }
    div.image-container:nth-of-type(1),
    div.image-container:nth-of-type(4) {
      border-left: none;
    }
    div.image-container:nth-of-type(4),
    div.image-container:nth-of-type(5),
    div.image-container:nth-of-type(6) {
      border-bottom: none;
      /* display: none; */
    }
    div.image-container:nth-of-type(2),
    div.image-container:nth-of-type(3) {
      position: relative;
      div.box {
        position: absolute;
        width: 3rem;
        height: 3rem;
        bottom: -1rem;
        left: -1rem;
        background: ${({ theme }) => theme.colors.background};
        @media ${device.sm} {
          width: 3.5rem;
          height: 2rem;
          bottom: -1rem;
          left: -2.15rem;
        }
      }
    }
  }
`;
