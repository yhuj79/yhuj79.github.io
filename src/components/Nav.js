import React, { useState, useEffect, useContext } from "react"
import tw, { css } from "twin.macro"
import ThemeContext from "../lib/context/ThemContext"
import { whiteModeColor, darkModeColor } from "../../them-color"
import { Link } from "gatsby"
import { AiOutlineSearch } from "react-icons/ai"

const Wrapper = tw.nav`
flex items-center justify-between flex-wrap max-w-screen-xl mx-auto p-5
`

var old_windows_Scrolly = 0

const Nav = () => {
  const { isDarkMode } = useContext(ThemeContext)
  const [isVisible, setIsVisible] = useState(false)

  const backgroundCSS = css`
    background-color: ${isDarkMode ? "#1C1C1C" : "#F8F8F8"};
    border-bottom: ${isDarkMode ? "1px solid #404040" : "1px solid #D8D8D8"};
  `

  const handleScroll = (_e) => {
    if (window.scrollY < old_windows_Scrolly && window.scrollY > 10) {
      old_windows_Scrolly = window.scrollY + 5
      setIsVisible(true)
    } else {
      setIsVisible(false)
      old_windows_Scrolly = window.scrollY
    }
  }

  const Content = () => {
    return (
      <>
        <Link
          css={css`
            ${tw`text-xl text-white font-bold`}
            color: ${isDarkMode
              ? darkModeColor.textColor1
              : whiteModeColor.textColor1};
          `}
          to={"/"}
        >
          BLOG_YHUJ
        </Link>
        <Link to={`/search`} aria-label={`search page`}>
          <AiOutlineSearch
            css={css`
              ${tw`text-white my-auto w-8 h-8`}
              color: ${isDarkMode
                ? darkModeColor.textColor1
                : whiteModeColor.textColor1};
            `}
          />
        </Link>
      </>
    )
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div css={backgroundCSS}>
        <Wrapper>
          <Content />
        </Wrapper>
      </div>
      <div
        css={[
          backgroundCSS,
          tw`fixed w-full shadow`,
          css`
            z-index: 100;
            transition: all 300ms cubic-bezier(0, 0, 0.2, 1);
            top: ${isVisible ? "0px" : "-100px"};
          `,
        ]}
      >
        <Wrapper>
          <Content />
        </Wrapper>
      </div>
    </>
  )
}

export default Nav
