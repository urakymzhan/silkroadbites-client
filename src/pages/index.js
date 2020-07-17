import React from "react"
import { css } from "@emotion/core"
import Layout from "../components/layout"
import { Link, graphql } from "gatsby"
import { FaArrowUp } from "react-icons/fa"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section
        css={css`
          height: 400px;
          background: rgba(0, 0, 0, 1);
          position: relative;
        `}
      >
        <h1
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            -webkit-transform: translate(-50%, -50%);
            border-bottom: 2px solid #ffae19;
            border-top: 2px solid #ffae19;
            border-right: 1px solid #e91e63;
            border-left: 1px solid #e91e63;
            padding: 40px 100px;
            color: #fff;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 9;
            @media (max-width: 820px) {
              padding: 10px 60px;
            }
          `}
        >
          Eat & Believe
        </h1>
        <Img
          fluid={data.mainBg.childImageSharp.fluid}
          css={css`
            height: 100%;
            width: 100%;
            opacity: 0.7;
          `}
        />
      </section>
      <section
        css={css`
          background-color: #e9e7bd;
          color: #333333;
          min-height: 250px;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-wrap: nowrap;
            justify-content: space-around;
            @media (max-width: 820px) {
              display: block;
            }
          `}
        >
          <Img
            fluid={data.mantyMain.childImageSharp.fluid}
            css={css`
              width: 100%;
              margin-right: 40px;
              margin-bottom: 0;
              @media (max-width: 820px) {
                display: none;
              }
            `}
          />
          <div
            css={css`
              align-self: center;
              padding: 20px;
            `}
          >
            <h1
              css={css`
                font-family: "Cinzel, serif";
              `}
            >
              Welcome To{" "}
              <span
                css={css`
                  border-bottom: 1px solid;
                  text-shadow: -1px 1px 0px #d8cca3, -2px 2px 0px #d8cca3,
                    -3px 3px 0px #d8cca3, -4px 4px 0px #d8cca3,
                    -5px 5px 0px #d8cca3;
                `}
              >
                {" "}
                SilkroadBites
              </span>
            </h1>
            <p>
              SilkroadBites is a takeout and catering online restaruant that
              serves Bay Area for a long time. Our previous location was in
              Stonestone Galleria in San Fransisco. It combines tradition with
              modernity in an exceptional way. We mainly serve all traditional
              and modern cuisine and add variety to our menu according to the
              season.
            </p>
            <Link to="/about/">
              <button
                css={css`
                  text-decoration: none;
                  border: 1px solid gray;
                  background: inherit;
                  padding: 5px 10px;
                  transition: ease-in-out 0.2s;
                  &:hover {
                    background: #d1cfaa;
                  }
                `}
              >
                Read More About Us
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section
        css={css`
          text-align: center;
          color: #333333;
          // background-color: #e5f1f0;
          border-right: 2px solid #e9e7bd;
          border-left: 2px solid #e9e7bd;
        `}
      >
        <div
          css={css`
            padding: 20px;
          `}
        >
          <h1
            css={css`
              font-family: "Cinzel, Arial, Helvetica, sans-serif";
              font-size: 24px;
              line-height: 1.1em;
              font-weight: 600;
              margin: 30px auto;
              color: #949378;
              text-shadow: -1px 1px 0px #d8cca3, -2px 2px 0px #d8cca3,
                -3px 3px 0px #d8cca3, -4px 4px 0px #d8cca3, -5px 5px 0px #d8cca3;
              margin-bottom: 40px;
              &:before {
                background: #949378;
                content: "";
                display: inline-block;
                width: 20%;
                height: 1px;
                margin: 0 6px;
              }
              &:after {
                background: #949378;
                content: "";
                display: inline-block;
                width: 20%;
                height: 1px;
                margin: 0 6px;
              }
            `}
          >
            TAKEOUT & CATERING SERVICE
          </h1>
          <p>PRE ORDER BY AT LEAST 10PM FOR NEXT DAY</p>
          <h2
            css={css`
              font-family: "Cinzel, Arial, Helvetica, sans-serif";
              font-size: 24px;
              line-height: 1.13em;
              font-weight: 400;
            `}
          >
            <span
              css={css`
                color: #949378;
              `}
            >
              DAYS OF OPERATION:{" "}
            </span>
          </h2>
          <p>MONDAY - SUNDAY</p>
          <h2
            css={css`
              ${base}
              font-size: 24px;
              line-height: 1.13em;
              font-weight: 400;
              color: #949378;
              margin: 30px auto;
            `}
          >
            DELIVERY:
          </h2>
          <p>MINIMUM 50$ AND WITHIN 10 MILES - FREE DELIVERY</p>
          <p>OVER 50$ AND OVER 10 MILES - 10~20$ FOR DELIVERY</p>
          <Link to="/contact/">
            <h2
              css={css`
                ${base}
                font-size: 24px;
                line-height: 1.13em;
                font-weight: 400;
                margin: 30px auto;
                color: #949378;
              `}
            >
              CONTACT
            </h2>
          </Link>
          <p
            css={css`
              &:before {
                background: #949378;
                content: "";
                display: inline-block;
                width: 20%;
                height: 1px;
                margin: 0 6px;
              }
              &:after {
                background: #949378;
                content: "";
                display: inline-block;
                width: 20%;
                height: 1px;
                margin: 0 6px;
              }
              @media (max-width: 820px) {
                &:before {
                  width: 5%;
                }
                &:after {
                  width: 5%;
                }
              }
            `}
          >
            211-322-334 - email@gmail.com
          </p>
          <div
            css={css`
              display: flex;
              justify-content: space-between;
              flex-direction: row;
              align-items: baseline;
              width: 20%;
              margin: 0 auto;
              color: red;
              font-size: 16px;
              @media (max-width: 820px) {
                width: 90%;
                text-align: center;
              }
            `}
          >
            <FaArrowUp />
            <Link to="/menu/">
              <h2
                css={css`
                  ${base}
                  font-size: 22px;
                  line-height: 1.13em;
                  font-weight: 400;
                  margin: 30px 5px;
                  color: red;
                `}
              >
                Explore Our Menu
              </h2>
            </Link>
            <FaArrowUp />
          </div>
        </div>
      </section>
    </Layout>
  )
}

// styles
const base = css`
  font-family: "Cinzel, serif";
`

// query
export const data = graphql`
  query {
    mainBg: file(relativePath: { eq: "images/mainBg.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mantyMain: file(relativePath: { eq: "images/Silk Road-22.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
