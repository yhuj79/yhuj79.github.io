import React from "react"
import tw, { css } from "twin.macro"

const Count = ({ tag, length }) => {
  return (
    <h2
      css={css`
        ${tw`text-4xl font-bold mx-3`}
        @media screen and (max-width: 767px) {
          ${tw`text-2xl`}
        }
      `}
    >
      {tag} {length} Posts
    </h2>
  )
}

export default Count
