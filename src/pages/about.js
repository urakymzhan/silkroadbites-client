import React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"
import { css } from "@emotion/core"

export default function About({ data }) {
  return (
    <Layout>
      <div
        css={css`
          min-height: 100vh;
          padding: 80px 0;
          font-family: Cinzel, serif;
          text-align: center;
          background-color: #282a2b;
          color: #949378;
        `}
      >
        <h1
          css={css`
            font-family: inherit;
            color: #949378;
            font-weight: 600;
            text-shadow: -1px 1px 0px #d8cca3, -2px 2px 0px #d8cca3,
              -3px 3px 0px #d8cca3, -4px 4px 0px #d8cca3, -5px 5px 0px #d8cca3;
          `}
        >
          About {data.site.siteMetadata.title}
        </h1>
        <p
          css={css`
            font-family: inherit;
            padding: 40px;
          `}
        >
          <strong>
            {" "}
            <span
              css={css`
                color: #fff;
              `}
            >
              {data.site.siteMetadata.title}
            </span>
          </strong>{" "}
          is a takeout and catering online restaruant that serves{" "}
          <strong>
            {" "}
            <span
              css={css`
                color: #fff;
              `}
            >
              Bay Area
            </span>
          </strong>{" "}
          for a long time. <br />
          Our previous location was in Stonestone Galleria in San Francisco
          <br />
          It combines tradition with modernity in an exceptional way. <br />
          We mainly serve all traditional and modern cuisine and add variety to
          our menu according to the season.
        </p>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
