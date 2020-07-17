import React from "react"
import { css } from "@emotion/core"
import { Link, useStaticQuery, graphql } from "gatsby"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"

const links = css`
  color: #a0b4a9 !important;
  &:hover {
    color: gray !important;
  }
`
export default function Header() {
  // static query
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <header>
      <Navbar
        bg="light"
        expand="lg"
        css={css`
          // solve this later
          background-color: #282a2b !important;
          color: #8c8989 !important;
          border-bottom: 1px solid 4b4c4d !important;
        `}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          css={css`
            color: #a0b4a9 !important;
          `}
        >
          {data.site.siteMetadata.title}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" css={css``}>
          <Nav className="mr-auto">{/* empty */}</Nav>
          <Nav>
            <Nav.Link
              as={Link}
              to="/"
              css={css`
                ${links}
              `}
            >
              Home
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/menu/"
              css={css`
                ${links}
              `}
            >
              Menu
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/about/"
              css={css`
                ${links}
              `}
            >
              About
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/contact/"
              css={css`
                ${links}
              `}
            >
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}
