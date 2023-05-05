import React, { useContext } from "react"
import tw, { css } from "twin.macro"
import { Link } from "gatsby"
import Tags from "./Tags"
import { keyframes } from "@emotion/core"
import ThemeContext from "../lib/context/ThemContext"

const Post = ({ post }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const fadein = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity:1;
  }
  `
  return (
    <>
      <div
        css={css`
          background-color: ${isDarkMode ? "#2c2c2c" : "#FFFFFF"};
          border-radius: 8px;
          animation: ${fadein} 500ms;
          transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
          &:hover {
            --transform-scale-x: 1.02;
            --transform-scale-y: 1.02;
          }
          ${tw`mx-3 my-10 transform`}
        `}
      >
        <Link to={post.node.fields.slug}>
          <img
            css={css`
              border-top-left-radius: 8px;
              border-top-right-radius: 8px;
            `}
            src={require(`../../content/assets/${post.node.frontmatter.tags[0]}.png`)}
            alt={post.node.frontmatter.tags[0]}
          />
          <div
            css={css`
              padding: 20px;
            `}
          >
            <h1
              css={css`
                ${tw`text-2xl font-semibold`}
              `}
            >
              {post.node.frontmatter.title}
            </h1>
            <h2
              css={css`
                ${tw`my-1 text-xs`}
              `}
            >
              {post.node.frontmatter.date}
            </h2>
            <div css={tw`my-4`}>
              <Tags
                tagWhite={`#484848`}
                tagDark={`#F2F2F2`}
                tags={post.node.frontmatter.tags}
                onClick={() => {}}
              />
            </div>
            <div
              css={css`
                ${tw`break-words`}
              `}
            >
              {post.node.excerpt}
            </div>
          </div>
        </Link>
      </div>
    </>
  )
}

export default Post
