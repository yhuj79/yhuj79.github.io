import React from "react"
import tw, { css } from "twin.macro"

const Footer = () => {
  return (
    <footer css={tw`text-center py-8 bottom-0`}>
      <a
        css={css`
          ${tw`text-xs font-bold`}
          &:hover {
            opacity: 0.7;
          }
        `}
        href={`https://github.com/yhuj79`}
      >
        &copy;yhuj79
      </a>
      <a
        css={css`
          ${tw`text-xs font-bold`}
          &:hover {
            opacity: 0.7;
          }
        `}
        href={`https://www.gatsbyjs.com/starters/gatsbyjs/gatsby-starter-blog`}
      >
        {" "}
        Built with Gatsby
      </a>
    </footer>
  )
}

export default Footer
