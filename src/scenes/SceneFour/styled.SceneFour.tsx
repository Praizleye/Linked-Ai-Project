import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleSceneFourContainer = styled.div`
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
  @media ${device.md} {
    gap: 0;
  }
  img {
    width: 50%;
    height: auto;
    @media ${device.md} {
      width: 80%;
    }
  }
  div.text-section {
    margin: 5rem auto;
    width: 50%;
    @media ${device.md} {
      width: 80%;
      margin: 1rem auto;
    }
    div.text-section__heading {
      font-family: ${({ theme }) => theme.fonts.headers};
      font-size: ${({ theme }) => theme.fontSize.headings};
      @media ${device.md} {
        text-align: center;
      }
      @media ${device.sm} {
        font-size: ${({ theme }) => theme.fontSize.above1px};
      }
      span {
        color: ${({ theme }) => theme.colors.alt2};
        display: block;
      }
    }
    div.criteria {
      font-size: ${({ theme }) => theme.fontSize.below1px};
      line-height: ${({ theme }) => theme.lineHeight.lhMedium};
      color: ${({ theme }) => theme.colors.textColor};
      margin-top: 1rem;
      font-weight: 700;
      @media ${device.md} {
        text-align: center;
      }
      @media ${device.sm} {
        font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
      }
      span {
        color: ${({ theme }) => theme.colors.alt2};
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
  }
`;
