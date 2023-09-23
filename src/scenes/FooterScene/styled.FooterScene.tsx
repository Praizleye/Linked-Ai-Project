import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

export const StyleFooterSection = styled.div`
  background: #100b20;
  ${Flexbox};
  flex-direction: column;
  justify-content: space-around;
  min-height: 70vh;
  @media ${device.lg} {
  }
  div.main-info {
    ${Flexbox};
    flex-wrap: wrap;
    justify-content: flex-start;
    height: 90%;
    position: relative;
    /* background-color: red; */
    gap: 5rem;
    @media ${device.lg} {
      gap: 2rem;
    }
    @media ${device.md} {
      padding: 0 2rem;
      gap: 2rem;
    }
    @media ${device.sm} {
      justify-content: space-between;
    }
    div.split-one {
      max-width: 25.5rem;

      div {
        margin-top: 1.4rem;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 172.4%; /* 1.293rem */
      }
      div.bottom__split-one {
        ${Flexbox};
        justify-content: flex-start;
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 172.4%; /* 1.293rem */
        div:nth-of-type(1) {
          border-right: 2px solid ${({ theme }) => theme.colors.alt2};
          padding-right: 0.5rem;
        }
        div:nth-of-type(2) {
          padding-left: 0.5rem;
        }
      }
    }
  }
  div.copyright {
    font-size: 0.75rem;
    font-weight: 400;
    @media ${device.md} {
      margin-top: 2rem;
      padding: 2rem 0;
    }
  }
`;

export const StyleSplitTwo = styled.div`
  ${Flexbox};
  justify-content: flex-start;
  align-items: flex-start;
  height: 100%;
  flex-direction: column;
  div.split-two-heading {
    color: #d434fe;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 172.4%; /* 1.5085rem */
    margin-top: 2rem;
  }
  li {
    list-style: none;
    font-size: 0.75rem;
    font-weight: 400;
    /* background: green; */
    padding: 0.4rem 0;
    line-height: 172.4%; /* 1.293rem */
  }
  li.socials {
    ${Flexbox};

    img {
      padding: 0 0.5rem;
    }
  }
`;

export const StyleSplitThree = styled.div`
  align-self: flex-start;

  div.split-three-heading {
    color: #d434fe;
    font-size: 0.875rem;
    font-weight: 600;
    line-height: 172.4%; /* 1.5085rem */
    margin-top: 2rem;
  }
  div {
    list-style: none;
    font-size: 0.75rem;
    font-weight: 400;
    /* background: green; */
    padding: 0.55rem 0;
    line-height: 172.4%; /* 1.293rem */
    img {
      padding-right: 0.3rem;
      /* padding-top: 0.2rem; */
    }
  }
  div.location {
    width: 7rem;
    @media ${device.sm} {
      width: 10rem;
    }
  }
`;
