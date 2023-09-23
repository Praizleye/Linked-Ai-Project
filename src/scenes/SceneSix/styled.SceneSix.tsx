import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

// export const StyleSceneSixContainer = styled.div`
//   ${Flexbox};
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
//   padding: ${(props) => props.theme.paddings.navPadsXXL};
//   border-top: 1px solid ${(props) => props.theme.colors.borderColor};
//   padding-top: 4rem;
//   padding-bottom: 8rem;
//   position: relative;
//   @media ${device.xl} {
//     padding: ${(props) => props.theme.paddings.navPadsXL};
//     padding-top: 4rem;
//     padding-bottom: 8rem;
//   }
//   @media ${device.lg} {
//     padding: ${(props) => props.theme.paddings.navPadsL};
//     padding-top: 4rem;
//     padding-bottom: 8rem;
//   }
//   @media ${device.md} {
//     padding: ${(props) => props.theme.paddings.navPadsMD};
//     flex-direction: column;
//     gap: 2rem;
//     padding-top: 4rem;
//     padding-bottom: 8rem;
//   }

//   @media ${device.sm} {
//     gap: 4rem;
//     padding-bottom: 4rem;
//   }
//   div.timeline-heading {
//     color: ${({ theme }) => theme.colors.textColor};
//     font-size: 2rem;
//     font-family: ${({ theme }) => theme.fonts.headers};
//   }
//   div.timeline-sub-text {
//     font-size: ${({ theme }) => theme.fontSize.below1px};
//     padding-bottom: 5rem;
//     text-align: center;
//     span {
//       display: block;
//     }
//   }
// `;

// export const StyleTimeline = styled.div`
//   div.event-container {
//     display: grid;
//     grid-template-columns: 15rem 5rem 10rem;
//     align-items: end;
//     justify-content: center;
//     grid-gap: 1rem;
//     div.text-container {
//       background: green;
//       width: 15rem;
//       div.event-heading {
//         color: ${({ theme }) => theme.colors.alt2};
//         font-weight: ${({ theme }) => theme.fontWeight.bold};
//         font-size: ${({ theme }) => theme.fontSize.above1px};
//         margin-bottom: 0.75rem;
//       }
//       div.event-desc {
//         color: ${({ theme }) => theme.colors.textColor};
//         font-size: ${({ theme }) => theme.fontSize.below1px};
//         line-height: 1.49538rem;
//       }
//     }
//     div.event-number-container {
//       ${Flexbox};
//       background: blue;
//       width: 5rem;
//       flex-direction: column;
//       div.vert-line {
//         height: 5.375rem;
//         width: 0.25rem;
//         background: ${({ theme }) => theme.colors.alt2};
//         margin: 1.25rem 0;
//       }
//       div.vert-line-1 {
//         height: 8.5625rem;
//       }
//       div.event-number {
//         width: 3.3125rem;
//         height: 3.3125rem;
//         border-radius: 50%;
//         background: ${({ theme }) => theme.colors.alt2};
//         font-size: ${({ theme }) => theme.fontSize.above1px};
//         font-weight: ${({ theme }) => theme.fontWeight.bold};
//         ${Flexbox};
//         justify-content: center;
//       }
//     }
//     div.event-date {
//       width: 15rem;
//       /* background: yellow; */
//       color: ${({ theme }) => theme.colors.alt2};
//       font-weight: ${({ theme }) => theme.fontWeight.bold};
//       font-size: ${({ theme }) => theme.fontSize.above1px};
//       margin-bottom: 0.75rem;
//     }
//   }
//   div.event-container:nth-child(even) {
//     div.text-container {
//       grid-column-start: 3;
//       grid-column-end: 1;
//     }

//     div.event-number-container {
//       grid-column-start: 1;
//       grid-column-end: 3;
//     }
//   }
// `;

export const StyleSceneSixContainer = styled.div`
  ${Flexbox};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  border-top: 1px solid ${(props) => props.theme.colors.borderColor};
  padding-top: 4rem;
  padding-bottom: 8rem;
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
    gap: 1rem;
    padding-bottom: 4rem;
  }
  div.timeline-heading {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: 2rem;
    font-family: ${({ theme }) => theme.fonts.headers};
    @media ${device.sm} {
      font-size: ${({ theme }) => theme.fontSize.above1px};
    }
  }
  div.timeline-sub-text {
    font-size: ${({ theme }) => theme.fontSize.below1px};
    text-align: center;
    padding-bottom: 5rem;

    @media ${device.sm} {
      font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
      padding-bottom: 0;
    }
    span {
      display: block;
    }
  }
`;

export const StyleTimeline = styled.div`
  div.event-container {
    ${Flexbox};
    justify-content: center;
    align-items: flex-end;
    gap: 7.5rem;
    @media ${device.md} {
      gap: 2rem;
    }
    @media ${device.sm} {
      flex-direction: row-reverse;
    }
    div.text-container {
      width: 35%;
      ${Flexbox};
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;
      padding-top: 2rem;
      /* background-color: green; */
      @media ${device.sm} {
        font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
        width: auto;
        justify-content: flex-start;
        align-items: flex-start;
      }
      div.event-heading {
        color: ${({ theme }) => theme.colors.alt2};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        font-size: ${({ theme }) => theme.fontSize.above1px};
        margin-bottom: 0.75rem;

        @media ${device.sm} {
          font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
        }
      }
      div.event-desc {
        color: ${({ theme }) => theme.colors.textColor};
        font-size: ${({ theme }) => theme.fontSize.below1px};
        line-height: 1.49538rem;
        span {
          display: none;
          @media ${device.sm} {
            display: flex;
            color: ${({ theme }) => theme.colors.alt2};
            font-weight: ${({ theme }) => theme.fontWeight.bold};
            font-size: ${({ theme }) => theme.fontSize.below1pxsmall};
            margin-bottom: 0.75rem;
          }
        }
      }
    }
    div.event-number-container {
      ${Flexbox};
      flex-direction: column;
      div.vert-line {
        height: 5.375rem;
        width: 0.25rem;
        background: ${({ theme }) => theme.colors.alt2};
        margin: 1.25rem 0;
      }
      div.vert-line-1 {
        height: 8.5625rem;
      }
      div.event-number {
        width: 3.3125rem;
        height: 3.3125rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.alt2};
        font-size: ${({ theme }) => theme.fontSize.above1px};
        font-weight: ${({ theme }) => theme.fontWeight.bold};
        ${Flexbox};
        justify-content: center;
      }
    }
    div.event-date {
      color: ${({ theme }) => theme.colors.alt2};
      font-weight: ${({ theme }) => theme.fontWeight.bold};
      font-size: ${({ theme }) => theme.fontSize.above1px};
      margin-bottom: 0.75rem;
      width: 35%;
      @media ${device.sm} {
        display: none;
      }
    }
  }
  div.event-container:nth-child(even) {
    div.text-container {
      order: 3;
      ${Flexbox};
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-start;
      @media ${device.sm} {
        order: 2;
      }
    }
    div.event-number-container {
      order: 2;
    }
    div.event-date {
      order: 1;
      ${Flexbox};
      justify-content: flex-end;
      align-self: flex-end;
      @media ${device.sm} {
        display: none;
      }
      /* background: green; */
    }
  }
`;
