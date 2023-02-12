import React, { useContext } from "react"
import tw, { css } from "twin.macro"
import SEO from "../components/seo"
import Layout from "../components/Layout"
import ThemeContext from "../lib/context/ThemContext"

export default () => {
  const { isDarkMode } = useContext(ThemeContext)
  return (
    <Layout>
      <SEO title="Page Not Found" />
      <div
        css={css`
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          padding: 1rem;
          background-color: ${isDarkMode ? "#1C1C1C" : "#F2F2F2"};
        `}
      >
        <span css={tw`text-6xl text-red-400 font-bold`}>404</span>
        <span css={tw`text-2xl font-semibold`}> Page Not Found!</span>
      </div>
    </Layout>
  )
}
