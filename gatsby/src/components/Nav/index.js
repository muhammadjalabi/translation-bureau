import { Link } from 'gatsby'
import React, { useRef, useEffect, useState } from 'react'
import { IoHomeOutline } from 'react-icons/io5'

import { Header, Navigation, NavMenu } from './Nav.styles'
import { useWindowSize } from '../../utils/useWindowSize'
import { Container } from 'react-bootstrap'
import Icon from '../Icon'

export default function Nav() {
  const [isTilted, setIsTilted] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const node = useRef(null)
  const size = useWindowSize()
  useEffect(() => {
    function handleOutsideClick(e) {
      if (node.current && !node.current.contains(e.target)) {
        setMenuOpen(false)
        // outside click
      }
      // inside click
    }
    document.addEventListener('mousedown', handleOutsideClick)
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick)
    }
  }, [node])
  useEffect(() => {
    if (size.width < 768) {
      setMenuOpen(false)
    }
    console.log({ size })
  }, [size])
  return (
    <Header>
      <Navigation as="section" ref={node}>
        <Link to="/" isTilted={isTilted} className="navLinkLogo">
          <Navigation.LogoOuter
            tabIndex="0"
            onMouseOver={() => setIsTilted(true)}
            onFocus={() => setIsTilted(true)}
            onMouseLeave={() => setIsTilted(false)}
            onBlur={() => setIsTilted(false)}
          >
            <Navigation.LogoInner tabindex="-1">
              <Navigation.Logo
                src="/tb_logo.svg"
                alt="logo"
                data-is-tilted={isTilted}
                isTilted={isTilted}
              />
            </Navigation.LogoInner>
          </Navigation.LogoOuter>
        </Link>

        <Link to="/" className="bureauBrand highlight fromCenter">
          <Navigation.BrandName>Translation Bureau</Navigation.BrandName>
        </Link>

        <Navigation.MenuButton
          menuOpen={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span menuOpen={menuOpen} />
          <span menuOpen={menuOpen} />
          <span menuOpen={menuOpen} />
        </Navigation.MenuButton>
      </Navigation>

      <NavMenu
        as="nav"
        menuOpen={menuOpen}
        // hidden={!menuOpen && size.width < 768}
      >
        <NavMenu.List role="menu" menuOpen={menuOpen}>
          <NavMenu.ListItem>
            <Link to="/" className="navLink highlight fromLeft">
              Home
            </Link>
          </NavMenu.ListItem>
          <NavMenu.ListItem>
            <Link to="/about" className="navLink highlight fromLeft">
              About
            </Link>
          </NavMenu.ListItem>
          <NavMenu.ListItem>
            <Link to="/services" className="navLink highlight fromLeft">
              Services
            </Link>
          </NavMenu.ListItem>
          <NavMenu.ListItem>
            <Link to="/contact" className="navLink highlight fromLeft">
              Contact
            </Link>
          </NavMenu.ListItem>
          <NavMenu.ListItem>
            <Link to="/clients" className="navLink highlight fromLeft">
              Clients
            </Link>
          </NavMenu.ListItem>
          <NavMenu.ListItem>
            <Link to="/news" className="navLink highlight fromRight">
              News
            </Link>
          </NavMenu.ListItem>
        </NavMenu.List>
      </NavMenu>
    </Header>
  )
}
