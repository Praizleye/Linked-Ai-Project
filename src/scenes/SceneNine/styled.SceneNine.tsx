import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleSceneNineContainer = styled.div`
  ${Flexbox};
  justify-content: center;
  min-height: 100vh;
  font-weight: ${(props) => props.theme.fontWeight.xBold};
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
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
  div.side-one {
    div.text-section {
      @media ${device.sm} {
        text-align: center;
        ${Flexbox};
        flex-direction: column;
        justify-content: center;
      }
      div.text-section__heading {
        font-family: ${({ theme }) => theme.fonts.headers};
        font-size: ${({ theme }) => theme.fontSize.headings};
        span {
          color: ${({ theme }) => theme.colors.alt2};
          display: block;
        }
        @media ${device.sm} {
          font-size: ${({ theme }) => theme.fontSize.above1px};
        }
      }
      div.text-last-updated {
        font-size: ${({ theme }) => theme.fontSize.below1px};
        line-height: ${({ theme }) => theme.lineHeight.lhMedium};
        color: rgba(255, 255, 255, 0.75);
        margin-top: 1rem;
        font-weight: 400;
        @media ${device.sm} {
          font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
        }
      }
      div.text-sub-text {
        font-size: ${({ theme }) => theme.fontSize.below1px};
        line-height: ${({ theme }) => theme.lineHeight.lhMedium};
        color: ${({ theme }) => theme.colors.textColor};
        margin-top: 2rem;
        font-weight: 400;
        @media ${device.lg} {
          font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
        }
      }
    }

    div.privacy-card {
      padding: 4rem 4rem;
      flex-shrink: 0;
      border-radius: 0.3125rem;
      border: 1px solid #d434fe;
      background: rgba(217, 217, 217, 0.03);
      ${Flexbox};
      justify-content: center;
      margin-top: 4.31rem;
      @media ${device.lg} {
        padding: 3rem 3rem;
        font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
      }
      div.privacy-card-container {
        max-width: 26.5625rem;
        div.text-one {
          color: #fff;
          font-family: Montserrat;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 400;
          line-height: 216.4%; /* 1.8935rem */
          @media ${device.lg} {
            font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
            line-height: 216.4%; /* 1.8935rem */
          }
        }

        div.text-two__heading {
          color: #d434fe;
          font-family: Montserrat;
          font-size: 1rem;
          font-style: normal;
          font-weight: 700;
          line-height: 216.4%; /* 2.164rem */
          margin-top: 2rem;
        }
        div.text-two__sub-text {
          color: #fff;
          font-family: Montserrat;
          font-size: 0.875rem;
          font-style: normal;
          font-weight: 700;
          line-height: 216.4%; /* 1.8935rem */
          margin-bottom: 1rem;
          @media ${device.lg} {
            font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
          }
        }
      }

      div.text-two__accept-terms {
        color: #fff;
        font-family: Montserrat;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 216.4%;
        ${Flexbox};
        align-items: flex-start;
        gap: 1rem;
        @media ${device.lg} {
          font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
          line-height: 216.4%; /* 1.8935rem */
        }
        img {
          padding-top: 0.35rem;
        }
      }
      button {
        height: 3.3125rem;
        width: 10.75rem;
        padding: 8px 17px 8px 17px;
        color: ${(props) => props.theme.colors.textColor};
        background: ${(props) => props.theme.colors.btnGradient};
        font-weight: ${(props) => props.theme.fontWeight.light};
        ${Flexbox};
        justify-content: center;
        margin: 1rem auto;
      }
    }
  }
  div.side-two {
    position: relative;
    width: 50%;
    @media ${device.sm} {
      width: 70%;
    }
    img.security-bg {
      position: absolute;
      top: -25%;
    }

    img {
      width: 100%;
      height: auto;
    }
  }
`;
