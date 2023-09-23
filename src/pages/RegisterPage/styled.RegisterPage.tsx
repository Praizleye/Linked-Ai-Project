import { styled } from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleRegisterContainer = styled.div`
  margin: 12rem auto;
  ${Flexbox};
  /* flex-direction: column; */
  justify-content: space-between;
  min-height: 100vh;
  font-weight: ${(props) => props.theme.fontWeight.xBold};
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  padding: 0 3rem;
`;

export const StyleSideOneContainer = styled.div`
  img {
    width: 100%;
    height: auto;
  }
`;
export const StyleSideTwoContainer = styled.div`
  width: 46.25rem;
  /* height: 46.25rem; */
  flex-shrink: 0;
  border-radius: 0.75rem;
  background: rgba(255, 255, 255, 0.03);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  ${Flexbox};
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  padding: 5rem 5.75rem;
  div.side-two__heading {
    div:nth-of-type(1) {
      color: #d434fe;
      font-family: ${({ theme }) => theme.fonts.headers};
      font-size: 2rem;
      font-weight: 600;
    }
    div:nth-of-type(2) {
      margin-top: 2.87rem;
    }
    div:nth-of-type(3) {
      font-size: 1.5rem;
      font-weight: ${({ theme }) => theme.fontWeight.light};
      margin-top: 1.19rem;
    }
  }
  form {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1.81rem;
    margin-top: 2rem;
    div {
      ${Flexbox};
      flex-direction: column;
      align-items: flex-start;
      /* background: green; */
      height: 6rem;
      label {
        font-size: 0.875rem;
        font-weight: ${({ theme }) => theme.fontWeight.light};
        margin-bottom: 0.69rem;
      }
      input,
      select {
        width: 16.4375rem;
        height: 2.9375rem;
        flex-shrink: 0;
        border-radius: 0.25rem;
        border: 1px solid #fff;
        background: rgba(255, 255, 255, 0.03);
        box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
        padding-left: 1.69rem;
        /* padding-right: 2.69rem; */
        outline: none;
      }
      span.onError {
        display: block;
        font-size: 0.75rem;
        font-weight: 400;
        color: #ec2525;
        font-style: italic;
      }
    }
    div.terms {
      grid-column: 1 / -1;
      div.alert {
        color: #ff26b9;
        font-size: 0.75rem;
        font-style: italic;
        font-weight: 400;
      }
      div.checkbox {
        ${Flexbox};

        input {
          width: 0.875rem;
          height: 0.875rem;
          flex-shrink: 0;
          /* display: inline; */
        }
        label {
          padding-top: 0.75rem;
          padding-left: 0.75rem;
        }
        span.onError {
          display: block;
          font-style: italic;
        }
      }
    }
    button {
      grid-column: 1 / -1;
      height: 3.3125rem;
      width: 100%;
      padding: 8px 17px 8px 17px;
      color: ${(props) => props.theme.colors.textColor};
      background: ${(props) => props.theme.colors.btnGradient};
      font-weight: ${(props) => props.theme.fontWeight.light};
    }
  }
`;
