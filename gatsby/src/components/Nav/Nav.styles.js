import { Container } from 'react-bootstrap'
import styled from 'styled-components/macro'
import {
  green,
  navbarGradients,
  primaryBlue,
  secondaryBlue,
  yellow,
} from '../styles/colors'

export const Header = styled.header`
  --borderColor: ${({ theme }) => theme.nav.linkUnderline};
  --borderThickness: 3.14px;
  --borderWidth: 80%;
  --bottomDistance: 3.14%;
  --navLinkColor: ${({ theme }) => theme.nav.link};

  margin: 0 auto;
  padding: 0.5rem;
  hyphens: none;
  display: grid;
  grid-template-areas: 'header navigation';
  align-items: center;
  position: sticky;
  z-index: 500;
  top: 0;
  background: ${({ theme }) => theme.navbarGradient};

  /* grid-template-rows: 1fr min-content; */
  /* justify-content: space-evenly; */
  /* justify-items: center;
  align-content: space-evenly; */
  /* -webkit-animation: shadow-drop-center 0.4s
    cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  animation: shadow-drop-center 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) both; */

  .navLinkLogo {
    transition: 0.3s ease all;
    background-size: 0%;
    padding: 1rem 0.5rem 1rem 1rem;
  }

  .navLinkLogo:hover {
    transform: rotate(4deg);

    & img {
      transform: rotate(-4deg) !important;
    }
  }

  & .bureauBrand {
    text-decoration: none;
    margin: 0 auto;
    padding-bottom: 8px;
    font-weight: 400;
    display: inline;
    background-image: linear-gradient(var(--borderColor), var(--borderColor));
    background-size: 0% var(--borderThickness);
    background-repeat: no-repeat;
    transition: background-size 0.24s;
    color: var(--navLinkColor) !important;
    border: 4px solid transparent;
    text-align: center;
    padding: 1rem 1.2rem;
    border-radius: 2px;
    cursor: pointer;
    transition: all 0.24s;
  }

  & .navLink {
    text-decoration: none;
    line-height: 1.4;
    padding-bottom: 8px;
    font-weight: 400;
    display: inline;
    background-image: linear-gradient(var(--borderColor), var(--borderColor));
    background-size: 0% var(--borderThickness);
    background-repeat: no-repeat;
    transition: 0.24s all ease;
    color: var(--navLinkColor) !important;
    font-weight: 900 !important;
    opacity: 0.82;

    &:hover {
      color: ${green[500]} !important;
    }
  }

  .navLink[aria-current*='page'] {
    opacity: 1;
    transition: color 0.14s ease;
    color: ${({ theme }) => theme.nav.linkActive};
    background-size: 100% var(--borderThickness);
    &:active {
      color: ${({ theme }) => theme.nav.link} !important;
    }
  }

  & .highlight:hover {
    border-color: ${green[500]};
    background-size: 100% var(--borderThickness);
  }
  & .fromCenter {
    --bottomDistance: 50%;
    background-position: 50% calc(100% - var(--bottomDistance));
  }

  & .fromCenter:hover {
    background-size: 85% var(--borderThickness);
  }
  & .fromCenter:hover {
    --borderColor: ${props => props.theme.navbarGradients};
  }

  & .fromRight {
    background-position: 100% calc(100% - var(--bottomDistance));
  }

  & .fromLeft {
    background-position: 0 calc(100% - var(--bottomDistance));
  }

  @media (max-width: 992px) {
    grid-template-areas:
      'header'
      'navigation';
  }

  @media (max-width: 630px) {
    .navLinkLogo {
      padding: 0;
    }

    .bureauBrand {
      padding: 0.25rem 0.5rem;
      border-width: 2px;
    }
  }

  @media (max-width: 350px) {
    .fromCenter {
      --borderThickness: 0.125rem;
    }
    h1 {
      font-size: 1.2rem;
    }
  }
`

export const Navigation = styled.nav`
  z-index: 5;
  max-width: 600px;
  margin: 0 auto;
  display: grid;
  width: 100%;
  gap: 1.4rem;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  justify-content: space-between;

  align-items: center;
  grid-area: header;
  @media (max-width: 480px) {
    gap: 0;
  }
`

Navigation.LogoOuter = styled.div`
  box-shadow: inset 0px 0px 0px 5px ${props => props.theme.nav.logo.outerBorder};
  background: ${props => props.theme.nav.logo.outerBg};
  transform: scale(1) rotate(-45deg);
  border-radius: 10px;
  width: 5rem;
  height: 5rem;
  transition: all 0.3s ease;

  @media (max-width: 630px) {
    transform: scale(0.6) rotate(-45deg);
  }
`
Navigation.LogoInner = styled.div`
  transform: rotate(45deg);
  background: ${props => props.theme.nav.logo.innerBg};
  border-radius: 10px;
  transition: 0.3s all ease;
  border: 3px solid ${props => props.theme.nav.logo.innerBorder};
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;
  /* @media (max-width:630px) {
    padding: 6px;
  } */
`

Navigation.Logo = styled.img`
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  transition: 0.3s all ease;

  ${props => props.isTilted && 'transform: rotate(-4deg);'}
`

Navigation.BrandName = styled.h1`
  margin: 0;
  letter-spacing: 0.14em;
  text-shadow: 0.1em 0.1em 0 rgba(0, 0, 0, 0.05);
  perspective: 10px;
  transition: all 0.3s ease;
  @media (max-width: 630px) {
    font-size: 1.5rem;
  }
`

Navigation.MenuButton = styled.button`
  --menuBtnWidth: 38px;
  --menuBtnHeight: calc(var(--menuBtnWidth) * 0.8);
  --menuBtnLineHeight: calc(var(--menuBtnWidth) * 0.1);
  --menuBtnLineRadius: calc(var(--menuBtnWidth) * 0.04);
  --menuBtnTransitionDuration: 0.3s;
  --menuBtnTranslate: calc(var(--menuBtnWidth) * 0.17);

  display: none;
  position: relative;
  justify-self: center;
  align-self: center;
  width: var(--menuBtnWidth);
  height: var(--menuBtnHeight);
  background: transparent;
  border: 0;
  cursor: pointer;
  box-shadow: unset;
  z-index: 100;

  & span {
    position: absolute;
    height: var(--menuBtnLineHeight);
    border-radius: var(--menuBtnLineRadius);
    background: ${({ theme }) => theme.nav.menuBtn};
    /* background: ${({ menuOpen, theme }) => (menuOpen ? 'red' : 'green')}; */
    transition: transform var(--menuBtnTransitionDuration);
  }

  & span:nth-child(1) {
    width: calc(var(--menuBtnWidth));
    top: 0;
    left: 0;
    transform-origin: top left;
    transform: ${({ menuOpen }) =>
      menuOpen
        ? 'translateX(var(--menuBtnTranslate)) rotate(45deg)'
        : 'translateX(0) rotate(0deg)'};
  }
  & span:nth-child(2) {
    top: 50%;
    left: 0;
    width: var(--menuBtnWidth);
    transform: ${({ menuOpen }) =>
      menuOpen ? 'translateY(-50%) rotate(-45deg)' : 'translateY(-50%)'};
  }

  & span:nth-child(3) {
    bottom: 0;
    right: 0;
    transform-origin: bottom right;
    transform: ${({ menuOpen }) =>
      menuOpen
        ? 'translateX(calc(-1 * var(--menuBtnTranslate))) rotate(45deg)'
        : 'translateX(0) rotate(0deg)'};
  }

  & span:nth-child(2) {
    width: calc(var(--menuBtnWidth));
  }
  & span:nth-child(1),
  & span:nth-child(3) {
    width: calc(var(--menuBtnWidth) / 2);
  }

  @media (max-width: 768px) {
    display: unset;
  }

  @media (max-width: 480px) {
    --menuBtnWidth: 2rem;
    --menuBtnHeight: calc(var(--menuBtnWidth) * 0.8);
    --menuBtnLineHeight: calc(var(--menuBtnWidth) * 0.1);
    --menuBtnLineRadius: calc(var(--menuBtnWidth) * 0.04);
    --menuBtnTransitionDuration: 0.3s;
    --menuBtnTranslate: calc(var(--menuBtnWidth) * 0.17);
  }
`
export const NavMenu = styled.section`
  /* grid-area: navigation;

  display: ${({ menuOpen }) => (menuOpen ? 'flex' : 'none')};
    align-items: center;
    visibility: hidden;
  @media (max-width: 768px) {
    display: flex;

    flex-direction: column;
    justify-content: center;
    visibility: ${({ menuOpen }) => (menuOpen ? 'unset' : 'hidden')};
    opacity: ${({ menuOpen }) => (menuOpen ? '1' : '0')};
    transition: 0.2s ease opacity;
  } */
`

NavMenu.List = styled.ul`
  display: grid;
  list-style: none;
  gap: 0.8rem;
  grid-template-columns: repeat(6, 1fr);

  /* background: transparent;
  margin: 0;
  padding: 0;
  grid-gap: 1rem;
  align-items: center;
  justify-items: center;
  */
  @media (max-width: 630px) {
    /* margin: 0; */
    background: ${({ theme }) => theme.navbarGradient};
    grid-template-columns: auto;
    justify-items: center;
    /* min-width: 100%;
    position: absolute;
    top: 5rem;
    left: 0;
    height: 100vh; */
  }
`

NavMenu.ListItem = styled.li`
  margin: 0;
  padding: 0;

  /* font-weight: 900; */
  /* text-align: center; */

  transition: 0.3s all ease;
`
