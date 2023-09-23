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
  /* border-top: 1px solid ${(props) => props.theme.colors.borderColor}; */
`;

export const StyleSideOne = styled.div`
  font-weight: ${({ theme }) => theme.fontWeight.light};
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
    div {
      color: #d434fe;
      /* font-family: ${({ theme }) => theme.fonts.headers}; */
    }
    div.social-icons {
      ${Flexbox};
      margin-top: 1rem;
      width: 8rem;
      /* gap: 0.5rem; */
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

  div.side-two__heading {
    color: #d434fe;
    font-family: ${({ theme }) => theme.fonts.headers};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    width: 27.3125rem;
  }

  form {
    ${Flexbox};
    flex-direction: column;
    justify-content: space-evenly;
    gap: 2rem;
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
