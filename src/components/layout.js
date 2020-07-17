import React from "react"
import { css } from "@emotion/core"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }) {
  // static query
  // const data = useStaticQuery(
  //   graphql`
  //     query {
  //       site {
  //         siteMetadata {
  //           title
  //         }
  //       }
  //     }
  //   `
  // )
  return (
    <div
      css={css`
        margin: 0 auto;
        max-width: 1200px;
      `}
    >
      <Header />
      {children}
      <Footer />
    </div>
  )
}
