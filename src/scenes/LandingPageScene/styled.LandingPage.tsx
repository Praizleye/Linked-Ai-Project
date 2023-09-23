import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleLandingPageContainer = styled.div`
  ${Flexbox};
  min-height: 100vh;
  /* line-height: ${(props) => props.theme.lineHeight.lhXtraLarge}; */
  font-weight: ${(props) => props.theme.fontWeight.xBold};
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  padding-right: 0;
  position: relative;
  @media ${device.xl} {
    padding: ${(props) => props.theme.paddings.navPadsXL};
    padding-right: 0;
  }
  @media ${device.lg} {
    padding: ${(props) => props.theme.paddings.navPadsL};
    padding-right: 0;
  }
  @media ${device.md} {
    padding: ${(props) => props.theme.paddings.navPadsMD};
    flex-direction: column;
    padding-right: 0;
    padding: 0;
  }

  @media ${device.sm} {
    gap: 4rem;
    /* padding-bottom: 4rem; */
    /* background-color: yellow; */
  }
  div.side-one-container {
    ${Flexbox};
    flex-direction: column;
    align-items: flex-start;
    margin-top: 4rem;
    width: 40%;
    font-family: ${(props) => props.theme.fonts.headers};
    @media ${device.md} {
      align-items: center;
      width: 80%;
    }
    @media ${device.sm} {
      /* align-items: center; */
      width: 90%;
    }
    img.creative-idea-image {
      justify-self: flex-end;
      align-self: flex-end;
      @media ${device.lg} {
        width: 2rem;
        height: auto;
        margin-top: 1rem;
      }
    }
    div.heading-text-one,
    div.heading-text-two {
      font-size: 5rem;
      white-space: nowrap;
      @media ${device.lg} {
        font-size: 4rem;
        img {
          width: 3rem;
          height: auto;
        }
      }
      @media ${device.md} {
        font-size: 3rem;
        img {
          width: 3rem;
          height: auto;
        }
      }
      @media ${device.sm} {
        font-size: 2rem;
        width: 100%;
        text-align: center;
        /* background-color: blue; */
        img {
          width: 2rem;
          height: auto;
        }
      }
    }
    div.heading-text-three {
      font-size: 1.25rem;
      font-family: ${(props) => props.theme.fonts.text};
      font-weight: ${(props) => props.theme.fontWeight.light};
      width: 32.625rem;
      @media ${device.lg} {
        font-size: 1rem;
        width: auto;
      }
      @media ${device.md} {
        font-size: 0.875rem;
        width: auto;
      }
      @media ${device.sm} {
        font-size: 0.675rem;
        width: auto;
        text-align: center;
      }
    }

    button {
      height: 3.3125rem;
      width: 10.75rem;
      padding: 8px 17px 8px 17px;
      color: ${(props) => props.theme.colors.textColor};
      background: ${(props) => props.theme.colors.btnGradient};
      font-weight: ${(props) => props.theme.fontWeight.light};
      margin-top: 2.5625rem;
    }
    div.timer {
      /* margin-top: 4.8125rem; */
      font-size: 4rem;
      justify-self: flex-end;
      align-self: baseline;
      font-family: UnicaOne;
      margin-top: 8rem;
      @media ${device.lg} {
        margin-top: 2rem;
        font-size: 2rem;
      }
      @media ${device.md} {
        justify-self: center;
        align-self: center;
        text-align: center;
      }
    }
  }
  div.side-two-container {
    ${Flexbox};
    flex-direction: column;
    align-items: flex-end;
    @media ${device.md} {
      align-items: center;
    }
    div.text-top-right {
      justify-self: flex-end;
      align-self: flex-end;
      margin-top: 8rem;
      margin-bottom: 4rem;
      padding: ${(props) => props.theme.paddings.navPadsXXL};
      font-style: italic;
      font-size: 1.25rem;
      ${Flexbox}
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      @media ${device.lg} {
        font-size: 1rem;
        margin-top: 6rem;
        img {
          width: 6rem;
          height: auto;
        }
      }
      @media ${device.md} {
        position: absolute;
        top: -80vh;
        left: 50%;
        transform: translateX(-50%);
        font-size: 0.725rem;
        white-space: nowrap;
      }
      @media ${device.sm} {
        top: -83vh;
      }
    }
    position: relative;
    img.main-image-one {
      width: 80%;
      height: auto;
      justify-self: flex-end;
      align-self: flex-end;
      background-blend-mode: luminosity;
      object-fit: cover;
      filter: grayscale(100%);
      margin-top: 3rem;
      @media ${device.md} {
        justify-self: center;
        align-self: center;
        width: 100%;
      }
    }
    img.main-image-two {
      width: 80%;
      height: auto;
      position: absolute;
      bottom: 0;
      background-blend-mode: hard-light;
      @media ${device.md} {
        justify-self: center;
        align-self: center;
        width: 100%;
      }
    }
  }
`;
