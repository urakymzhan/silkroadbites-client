import React from "react"
import { css } from "@emotion/core"
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"

export default function Footer() {
  return (
    <footer
      css={css`
        background-color: #282a2b;
        padding: 10px 30px;
        color: #8c8989;
        border-top: 1px solid 4b4c4d;
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        @media (max-width: 820px) {
          padding: 10px;
        }
      `}
    >
      <p
        css={css`
          font-size: 12px;
          margin: 0;
        `}
      >
        © 2020 SilkroadBites
      </p>
      <p
        css={css`
          font-size: 28px;
          margin: 0;
        `}
      >
        <FaFacebookSquare
          css={css`
            color: #a0b4a9;
            cursor: pointer;
          `}
        />{" "}
        <FaInstagramSquare
          css={css`
            color: #a0b4a9;
            cursor: pointer;
          `}
        />
      </p>
      <p
        css={css`
          font-size: 12px;
          margin: 0;
        `}
      >
        <a
          css={css`
            color: inherit;
            &:hover {
              color: #aeacac;
            }
          `}
          href="https://ulan13.me/"
          target="_blank"
          rel="noreferrer"
        >
          | Site by Ulan Rakymzhanov{" "}
        </a>
      </p>
    </footer>
  )
}
