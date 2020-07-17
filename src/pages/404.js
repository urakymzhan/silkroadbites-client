import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { css } from "@emotion/core"

export default function PageNotFound() {
  return (
    <Layout>
      <div
        css={css`
          min-height: 100vh;
          padding: 80px 0;
          font-family: Cinzel, serif;
          text-align: center;
        `}
      >
        <h3
          css={css`
            font-family: inherit;
          `}
        >
          Page not Found
        </h3>
        <p>Oops! The page you are looking for has been removed or relocated</p>
        <Link to="/">
          <button>Go Back</button>
        </Link>
      </div>
    </Layout>
  )
}
