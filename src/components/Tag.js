import React, { useContext, useRef, useEffect, useCallback } from "react"
import tw, { css } from "twin.macro"
import ThemeContext from "../lib/context/ThemContext"
import { darkModeColor, whiteModeColor } from "../../them-color"

const Tag = ({
  onClick,
  tag,
  selectedTag,
  scrollToCenter,
  tagWhite,
  tagDark,
  hover,
  allTag,
}) => {
  const { isDarkMode } = useContext(ThemeContext)
  const tabRef = useRef(null)

  const handleClick = useCallback(() => {
    if (scrollToCenter) scrollToCenter(tabRef)
    if (onClick) onClick(tag)
  }, [scrollToCenter, onClick, tabRef, tag])

  useEffect(() => {
    if (selectedTag === tag && scrollToCenter) {
      scrollToCenter(tabRef)
    }
  }, [scrollToCenter, selectedTag, tabRef, tag])

  return (
    <button
      ref={tabRef}
      css={css`
        white-space: nowrap;
        transition: all 300ms cubic-bezier(0.4, 0, 0.2, 1);
        ${tw`text-base font-bold rounded-full mr-2 my-1 py-1 px-3`}
        ${selectedTag === tag ? "color" : "background-color"}:
        ${isDarkMode ? tagWhite : tagDark};
        ${selectedTag === tag ? `background-color` : `color`}: ${isDarkMode
          ? darkModeColor.textColor1
          : whiteModeColor.textColor1};
        ${selectedTag !== tag &&
        hover &&
        `&:hover {
          background-color: ${isDarkMode ? "#555555" : "#D6D6D6"};
        }`}
        ${selectedTag !== tag &&
        allTag &&
        `&:hover {
          background-color: ${isDarkMode ? "#79AAFF" : "#0066CC"};
          color: ${
            isDarkMode ? whiteModeColor.textColor1 : darkModeColor.textColor1
          };
        }`}
      `}
      onClick={handleClick}
    >
      {tag}
    </button>
  )
}

export default Tag
