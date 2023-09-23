import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleContactPage = styled.div`
  margin: 12rem auto;
  ${Flexbox};
  /* flex-direction: column; */
  justify-content: space-between;
  min-height: 100vh;
  font-weight: ${(props) => props.theme.fontWeight.xBold};
  padding: ${(props) => props.theme.paddings.navPadsXXL};

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
    /* padding-right: 0; */
    justify-content: center;
    align-items: center;
  }
  @media ${device.sm} {
    padding: ${(props) => props.theme.paddings.navPadsMD};
    flex-direction: column;
    /* padding-right: 0; */
    justify-content: center;
    align-items: center;
  }
`;

export const StyleSideOne = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.light};
  @media ${device.md} {
    text-align: center;
    padding-bottom: 3rem;
  }
  @media ${device.sm} {
    text-align: left;
    padding-bottom: 3rem;
    width: 100%;
  }
  div.side-one__heading {
    color: #d434fe;
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 2rem;
    font-weight: 600;
  }
  div.contact-info-heading {
    font-weight: ${({ theme }) => theme.fontWeight.light};
    margin-top: 1rem;
    span {
      display: block;
    }
  }
  div.contact-address {
    margin-top: 1rem;
    span {
      display: block;
    }
  }
  div.contact-num {
    margin-top: 1rem;
  }

  div.opening-hours {
    margin-top: 1rem;
    span {
      display: block;
    }
  }
  div.share-socials {
    margin-top: 1rem;
    @media ${device.md} {
      ${Flexbox};
      justify-content: center;
      align-items: center;
    }
    @media ${device.md} {
      ${Flexbox};
      justify-content: flex-start;
      align-items: flex-start;
    }
    div {
      color: #d434fe;
      /* font-family: ${({ theme }) => theme.fonts.headers}; */
    }
    div.social-icons {
      ${Flexbox};
      margin-top: 1rem;
      width: 8rem;

      @media ${device.md} {
        margin: 0;
      }
    }
  }
`;

export const StyleSideTwo = styled.div`
  width: 38.5625rem;
  height: 38.1875rem;
  flex-shrink: 0;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  ${Flexbox};
  flex-direction: column;
  justify-content: space-evenly;

  @media ${device.md} {
    width: 26rem;
  }
  @media ${device.sm} {
    background: ${(props) => props.theme.colors.background};
    box-shadow: none;
    width: 100%;
  }
  div.side-two__heading {
    color: #d434fe;
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 27.3125rem;
    @media ${device.md} {
      width: 80%;
    }
    @media ${device.sm} {
      width: 100%;
    }
  }

  form {
    ${Flexbox};
    flex-direction: column;
    justify-content: space-evenly;
    gap: 2rem;
    @media ${device.sm} {
      justify-self: flex-start;
      align-self: flex-start;
    }
    /* width: 100%; */
    input {
      outline: none;
      width: 27.3125rem;
      height: 2.9375rem;
      flex-shrink: 0;
      border-radius: 0.25rem;
      border: 1px solid #fff;
      background: rgba(255, 255, 255, 0.03);
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
      padding-left: 1.81rem;
      @media ${device.md} {
        width: 20rem;
      }
    }
    span.onError {
      display: block;
      font-size: 0.775rem;
      font-style: italic;
      font-weight: 400;
      color: #ec2525;
    }
  }

  button {
    height: 3.3125rem;
    width: 10.75rem;
    padding: 8px 17px 8px 17px;
    color: ${(props) => props.theme.colors.textColor};
    background: ${(props) => props.theme.colors.btnGradient};
    font-weight: ${(props) => props.theme.fontWeight.light};
  }
`;
