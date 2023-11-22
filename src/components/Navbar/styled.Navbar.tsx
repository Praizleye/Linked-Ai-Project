import styled from "styled-components";
import { Flexbox } from "../../styles/Globals";
import { device } from "../../styles/Breakpoints";

type ShowNavProps = {
  shownav: number;
};
type NavBarProps = {
  clicknav?: boolean;
  position?: string;
};

export const NavStyle = styled.div<ShowNavProps>`
  background-color: ${(props) => props.theme.colors.secondary};
  color: ${(props) => props.theme.colors.textColor};
  height: 5rem;
  padding: ${(props) => props.theme.paddings.navPadsXXL};
  ${Flexbox};
  /* margin-top: 1rem; */
  position: fixed;
  width: 100%;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  > div {
    img {
      /* width: 3.5rem; */
      height: auto;
    }
  }
  z-index: 10;
  opacity: ${(props) => props.shownav};
  transition: opacity 0.3s ease-in-out;
  ul.big__screens {
    ${Flexbox};
    justify-content: space-between;
    width: 70%;
    /* background: red; */
    line-height: ${(props) => props.theme.lineHeight.lhSmall};
    a {
      text-transform: capitalize;
      text-decoration: none;
      color: ${(props) => props.theme.colors.textColor};
      padding-bottom: 0.5rem;
      &.active {
        font-weight: ${(props) => props.theme.fontWeight.bold};
        border-bottom: 3px solid ${(props) => props.theme.colors.hoverPrimary};
      }
      &.inactive {
        color: ${(props) => props.theme.colors.navInactive};
      }
    }
    li {
      padding: ${(props) => props.theme.paddings.navItemPads};
      list-style: none;
      /* background: green; */
      a {
        text-transform: capitalize;
        text-decoration: none;
        color: ${(props) => props.theme.colors.textColor};
        padding-bottom: 0.5rem;
        &.active {
          font-weight: ${(props) => props.theme.fontWeight.bold};
          border-bottom: 3px solid ${(props) => props.theme.colors.hoverPrimary};
        }
        &.inactive {
          color: ${(props) => props.theme.colors.navInactive};
        }
      }
    }
    button {
      height: 3.3125rem;
      width: 10.75rem;
      padding: 8px 17px 8px 17px;
      color: ${(props) => props.theme.colors.textColor};
      background: ${(props) => props.theme.colors.btnGradient};
      font-weight: ${(props) => props.theme.fontWeight.light};
      margin-left: 4rem;
      justify-self: flex-end;
      align-self: flex-end;
    }

    @media ${device.md} {
      display: none;
    }
  }

  @media ${device.xl} {
    padding: ${(props) => props.theme.paddings.navPadsXL};
  }
  @media ${device.lg} {
    padding: ${(props) => props.theme.paddings.navPadsL};
  }
  @media ${device.md} {
    padding: ${(props) => props.theme.paddings.navPadsMD};
  }
`;

export const NavItemsContainer = styled.div<NavBarProps>`
  ${Flexbox};
  line-height: ${(props) => props.theme.lineHeight.lhSmall};
  display: none;

  @media ${device.md} {
    display: flex;
    flex-direction: column;

    height: 60vh;
    width: 100%;
    background: ${(props) => props.theme.colors.background};
    /* border: 2px solid ${(props) => props.theme.colors.primary}; */
    position: absolute;
    top: 5rem;
    right: ${({ ...props }) => (props.clicknav === false ? "-100%" : 0)};
    align-items: flex-start;
  }
  li {
    padding: ${(props) => props.theme.paddings.navItemPads};
    list-style: none;
    opacity: ${({ ...props }) => (props.clicknav === false ? 0 : 1)};
    transition: opacity 0.3s ease-in-out;
    padding: 1rem 2rem;
    /* border-bottom: 1px solid ${(props) =>
      props.theme.colors.hoverPrimary}; */
    width: 100%;
    /* background-color: red; */
    a {
      text-transform: capitalize;
      text-decoration: none;
      color: ${(props) => props.theme.colors.textColor};
      &.active {
        font-weight: ${(props) => props.theme.fontWeight.bold};
        border-bottom: 1px solid ${(props) => props.theme.colors.hoverPrimary};
      }
      &.inactive {
        color: ${(props) => props.theme.colors.navInactive};
      }
    }
  }

  button {
    height: 3.3125rem;
    width: 10.75rem;
    padding: 8px 17px 8px 17px;
    color: ${(props) => props.theme.colors.textColor};
    background: ${(props) => props.theme.colors.btnGradient};
    font-weight: ${(props) => props.theme.fontWeight.light};
    margin: 1rem 2rem;
  }
`;

export const MenuBar = styled.div<NavBarProps>`
  width: 20px;
  height: 15px;
  ${Flexbox};
  cursor: pointer;
  flex-direction: column;
  justify-content: space-around;
  display: none;
  @media ${device.md} {
    display: flex;
  }
`;
export const Bar = styled.div<NavBarProps>`
  /* background-color: red; */
  height: 2px;
  width: 100%;
  background: white;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
  transform: ${({ ...props }) =>
    props.clicknav && props.position === "top"
      ? "translateY(5.5px) rotate(45deg)"
      : props.clicknav && props.position === "middle"
      ? "opacity: 0"
      : props.clicknav && props.position === "bottom"
      ? "translateY(-5.5px) rotate(-47deg)"
      : "none"};

  opacity: ${({ ...props }) =>
    props.clicknav && props.position === "middle" ? 0 : 1};
`;
