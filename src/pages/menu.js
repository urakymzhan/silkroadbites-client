import React from "react"
import Layout from "../components/layout"
import Card from "react-bootstrap/Card"
import Button from "react-bootstrap/Button"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import { graphql } from "gatsby"

// styles
const cards = css`
  height: 255px;
`
const hdrs = css`
  font-family: inherit;
  display: inline-block;
  border-bottom: 2px solid;
  margin: 40px auto;
`
const menuSections = css`
  display: grid;
  grid-direction: column;
  grid-template-columns: repeat(auto-fill, 30%);
  grid-column-gap: 40px;
  grid-row-gap: 20px;
  @media (max-width: 820px) {
    grid-template-columns: repeat(auto-fill, 100%);
  }
`
// query images
export const data = graphql`
  query {
    manty: file(relativePath: { eq: "images/Silk Road-20.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    mantyFr: file(relativePath: { eq: "images/Silk Road-48.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    oromo: file(relativePath: { eq: "images/Silk Road-32.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    norun: file(relativePath: { eq: "images/Silk Road-14.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    jarkop: file(relativePath: { eq: "images/Silk Road-24.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    lagman: file(relativePath: { eq: "images/Silk Road-93.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    samsy: file(relativePath: { eq: "images/Silk Road-53.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    plov: file(relativePath: { eq: "images/Silk Road-63.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    medovik: file(relativePath: { eq: "images/Silk Road-81.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    napoleon: file(relativePath: { eq: "images/Silk Road-85.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    shupra: file(relativePath: { eq: "images/Silk Road-16.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    carrot: file(relativePath: { eq: "images/Silk Road-11.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    olive: file(relativePath: { eq: "images/Silk Road-12.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    vinegret: file(relativePath: { eq: "images/Silk Road-1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default function Menu({ data }) {
  console.log(" data", data)
  return (
    <Layout>
      <main
        css={css`
          text-align: center;
          padding: 50px 0;
          font-family: Cinzel, serif;
          @media (max-width: 820px) {
            padding: 50px;
          }
        `}
      >
        <h2
          css={css`
            font-weight: 600;
            font-family: inherit;
            color: #949378;
            text-shadow: -1px 1px 0px #d8cca3, -2px 2px 0px #d8cca3,
              -3px 3px 0px #d8cca3, -4px 4px 0px #d8cca3, -5px 5px 0px #d8cca3;
          `}
        >
          MENU
        </h2>
        <p
          css={css`
            font-family: inherit;
          `}
        >
          Menu prices and availability subject to change.
        </p>
        <p
          css={css`
            font-family: inherit;
          `}
        >
          To order please choose your menu and reach out at:
          <p
            css={css`
              font-size: 13px;
            `}
          >
            ( or from any social media that is on the bottom of the website)
          </p>
        </p>
        <p>
          <strong>
            <span
              css={css`
                color: red;
              `}
            >
              323.620.5909
            </span>
          </strong>{" "}
          -
          <strong>
            {" "}
            <span
              css={css`
                color: purple;
              `}
            >
              silkroadbites@gmail.com
            </span>
          </strong>{" "}
        </p>

        <h3
          css={css`
            ${hdrs};
          `}
        >
          Meals
        </h3>
        <div
          css={css`
            ${menuSections}
          `}
        >
          <Card>
            <Img
              fluid={data.manty.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Manty - 5pcs</Card.Title>
              <Card.Text>
                Steemed
                <br />
                Ingredients: black pepper, salt, onion, beef+lamb
              </Card.Text>
              <Button variant="info">$12</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.mantyFr.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Manty Frozen - 5pcs</Card.Title>
              <Card.Text>Pre-cooked manty</Card.Text>
              <Button variant="secondary">$12</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.plov.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Plov</Card.Title>
              <Card.Text>
                Steemed
                <br />
                Ingredients: rice, carrot, onion, cumin, salt, black pepper,
                garlic, lamb (beef optional)
              </Card.Text>
              <Button variant="info">$11</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.shupra.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Shupra</Card.Title>
              <Card.Text>
                Soup
                <br />
                Ingredients: lamb, patato, carrot, black pepper
              </Card.Text>
              <Button variant="info">$11</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.jarkop.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Jarkop</Card.Title>
              <Card.Text>
                Ingredients: lamb, potato, paprika, salt, black pepper
              </Card.Text>
              <Button variant="secondary">$12</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.oromo.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Khanum/Oromo</Card.Title>
              <Card.Text>
                Steemed <br />
                Ingredients: lground beef, potato, onion, black pepper, salt
              </Card.Text>
              <Button variant="info">$11</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.norun.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Besh Barmak/Norun</Card.Title>
              <Card.Text>
                Ingredients: boiled lamb, handmade noodle, onion, black pepper
              </Card.Text>
              <Button variant="info">$15</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.lagman.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Lagman</Card.Title>
              <Card.Text>
                Ingredients: bell pepper, tomato sause, beef, green beans,
                hand-pulled noodle
              </Card.Text>
              <Button variant="secondary">$13</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.samsy.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Samsy</Card.Title>
              <Card.Text>Ingredients: lamb, chicken, beef, potato</Card.Text>
              <Button variant="info">$3</Button>
            </Card.Body>
          </Card>
        </div>

        <h3
          css={css`
            ${hdrs};
          `}
        >
          Salads
        </h3>
        <div
          css={css`
            ${menuSections}
          `}
        >
          <Card>
            <Img
              fluid={data.carrot.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Carrot Salad</Card.Title>
              <Card.Text>Delicious Carrot Salad</Card.Text>
              <Button variant="info">$6</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.vinegret.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Vinegret</Card.Title>
              <Card.Text>
                Ingredients: potato, beets, carrot, pickles, onion, oil
              </Card.Text>
              <Button variant="secondary">$7</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.olive.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Olivè</Card.Title>
              <Card.Text>
                Ingredients: carrot, potato, pickles, eggs, chicken, mayo
              </Card.Text>
              <Button variant="info">$9</Button>
            </Card.Body>
          </Card>
        </div>

        <h3
          css={css`
            ${hdrs};
          `}
        >
          Desserts
        </h3>
        <div
          css={css`
            ${menuSections}
          `}
        >
          <Card>
            <Img
              fluid={data.napoleon.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Napoleon</Card.Title>
              <Card.Text>
                Ingredients: custard cream, 5 layers pastry, sugar, butter
              </Card.Text>
              <Button variant="info">$5</Button>
            </Card.Body>
          </Card>
          <Card>
            <Img
              fluid={data.medovik.childImageSharp.fluid}
              css={css`
                ${cards}
              `}
            />
            <Card.Body>
              <Card.Title>Medovik</Card.Title>
              <Card.Text>Ingredients: 6 layers source cream</Card.Text>
              <Button variant="secondary">$5</Button>
            </Card.Body>
          </Card>
        </div>
      </main>
    </Layout>
  )
}
