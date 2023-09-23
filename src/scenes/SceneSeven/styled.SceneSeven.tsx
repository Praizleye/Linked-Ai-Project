import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleSceneSevenContainer = styled.div`
  ${Flexbox};
  min-height: 100vh;
  font-weight: ${(props) => props.theme.fontWeight.xBold};
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  padding-top: 4rem;
  padding-bottom: 4rem;
  background: #100b20;
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
    /* min-height: 100%; */
  }
  div.side-one {
    width: 45%;
    @media ${device.md} {
      width: 70%;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  div.side-two {
    ${Flexbox};
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media ${device.md} {
      text-align: center;
    }
    div.text-heading {
      font-family: ${({ theme }) => theme.fonts.headers};
      font-size: ${({ theme }) => theme.fontSize.headings};
      width: 24.875rem;
      span {
        color: ${({ theme }) => theme.colors.alt2};
        display: block;
      }
      @media ${device.sm} {
        font-size: ${({ theme }) => theme.fontSize.above1px};
      }
    }
    div.sub-text {
      font-size: ${({ theme }) => theme.fontSize.below1px};
      line-height: ${({ theme }) => theme.lineHeight.lhMedium};
      color: ${({ theme }) => theme.colors.textColor};
      margin-top: 1rem;
      font-weight: 400;
      /* width: 22rem; */
      margin-bottom: 14rem;
      span {
        display: block;
      }
      @media ${device.sm} {
        font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
      }
    }

    div.price-images-container {
      ${Flexbox};
      gap: 2rem;

      @media ${device.sm} {
        gap: 1rem;
      }
      @media ${device.xs} {
        gap: 0.5rem;
      }
      div.card {
        border: 1px solid ${({ theme }) => theme.colors.alt1};
        border-radius: 0.5rem;
        background: rgba(212, 52, 254, 0.12);
        ${Flexbox};
        justify-content: center;
        align-items: center;
        flex-direction: column;
        position: relative;
        width: 13.25rem;
        height: 18.5rem;
        @media ${device.lg} {
          width: 10.25rem;
          height: 16.5rem;
        }
        @media ${device.sm} {
          width: 30%;
          height: 120%;
          padding: 0 1rem;
        }
        img {
          position: absolute;
          top: -30%;
          @media ${device.lg} {
            width: 13.25rem;
            height: auto;
            top: -50%;
          }
          @media ${device.sm} {
            width: 135%;
            height: auto;
            top: -50%;
          }
          @media ${device.xs} {
            width: 105%;
            height: auto;
            top: -50%;
          }
        }
        div.medal-text {
          text-align: center;
          margin-top: 5rem;
          @media ${device.sm} {
            margin-top: 90%;
          }
        }
        div.medal-text div:nth-child(1) {
          font-size: 2.25rem;
          font-weight: 700;
          @media ${device.sm} {
            font-size: 0.725rem;
          }
          @media ${device.xs} {
            font-size: 0.525rem;
          }
          /* line-height: 4.869rem; */
        }
        div.medal-text div:nth-child(2) {
          font-size: 1.5rem;
          font-weight: 600;
          @media ${device.lg} {
            font-size: 1.3rem;
          }
          @media ${device.sm} {
            font-size: 0.725rem;
          }
          @media ${device.xs} {
            font-size: 0.525rem;
          }
        }
        div.medal-text div:nth-child(3) {
          color: #d434fe;
          font-size: 2rem;
          font-style: normal;
          font-weight: 700;
          line-height: 4.328rem;
          @media ${device.lg} {
            font-size: 1.8rem;
          }
          @media ${device.sm} {
            font-size: 1rem;
          }
          @media ${device.sm} {
            font-size: 0.725rem;
          }
        }
      }
      div.gold-card {
        width: 13.25rem;
        height: 21.6875rem;
        border: 1px solid #903aff;
        background: rgba(144, 58, 255, 0.12);
        @media ${device.lg} {
          width: 11.25rem;
          height: 18.5rem;
        }
        @media ${device.sm} {
          width: 40%;
          height: 100%;
          padding: 0 1rem;
        }
        @media ${device.xs} {
          width: 30%;
          height: 100%;
          padding: 0 1rem;
        }
        img {
          position: absolute;
          top: -50%;
          @media ${device.lg} {
            top: -40%;
            width: 15.25rem;
          }
          @media ${device.sm} {
            top: -40%;
            width: 140%;
          }
        }

        div.medal-text {
          margin-top: 7rem;
          @media ${device.sm} {
            margin-top: 120%;
          }
        }
        div.medal-text div:nth-child(3) {
          color: #903aff;
          @media ${device.lg} {
            font-size: 1.8rem;
          }
          @media ${device.sm} {
            font-size: 1rem;
          }
        }
      }
    }
  }
`;
