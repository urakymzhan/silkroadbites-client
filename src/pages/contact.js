import React from "react"
import Layout from "../components/layout"
import { css } from "@emotion/core"

export default function Menu({ data }) {
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
            font-weight: 600;
            color: inherit;
            color: #949378;
            text-shadow: -1px 1px 0px #d8cca3, -2px 2px 0px #d8cca3,
              -3px 3px 0px #d8cca3, -4px 4px 0px #d8cca3, -5px 5px 0px #d8cca3;
            margin-bottom: 40px;
          `}
        >
          Contact Information
        </h1>
        <p>SilkroadBites</p>
        <p>San Francisco, CA</p>
        <p>
          <strong>
            <span
              css={css`
                color: #fff;
              `}
            >
              P:
            </span>
          </strong>{" "}
          <a href="tel:13236205909">323.620.5909</a>
          <br />
          <strong>
            {" "}
            <span
              css={css`
                color: #fff;
              `}
            >
              E:
            </span>
          </strong>{" "}
          <a href="mailto:silkroadbites@gmail.com">silkroadbites@gmail.com</a>
        </p>
      </div>
    </Layout>
  )
}
