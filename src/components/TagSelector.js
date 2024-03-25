import React, { useContext, useRef, useCallback } from "react"
import tw, { css } from "twin.macro"
import ThemeContext from "../lib/context/ThemContext"
import { darkModeColor, whiteModeColor } from "../../them-color"
import Tags from "./Tags"
import Tag from "./Tag"

const TagSelector = ({ onTagClick, state, tags }) => {
  const { isDarkMode } = useContext(ThemeContext)
  const containerRef = useRef(null)

  const scrollToCenter = useCallback(
    (tabRef) => {
      const { offsetWidth: tabWidth } = tabRef.current
      const { scrollLeft, offsetWidth: containerWidth } = containerRef.current
      const tabLeft = tabRef.current.getBoundingClientRect().left
      const containerLeft = containerRef.current.getBoundingClientRect().left
      const refineLeft = tabLeft - containerLeft
      const targetScollX =
        scrollLeft + refineLeft - containerWidth / 2 + tabWidth / 2

      containerRef.current.scroll({
        left: targetScollX,
        top: 0,
        behavior: "smooth",
      })
    },
    [containerRef]
  )

  return (
    <div
      css={css`
        display: flex;
        padding: 0.5rem;
        background-color: ${isDarkMode ? "#2C2C2C" : "#FFF"};
        box-shadow: 10px 10px 20px rgba(0, 0, 0, 0.1);
        border-radius: 8px;
        margin-top: 0.5rem;
        margin-bottom: 0.5rem;
        border-color: ${isDarkMode
          ? darkModeColor.mainColor2
          : whiteModeColor.mainColor2};
        ${tw`mx-3`}
      `}
    >
      <div
        css={css`
          ${tw`content-center py-2 pl-2 pr-1`}
          border-right: 1px solid ${isDarkMode ? "#4B4B4B" : "#EDEDED"};
        `}
      >
        <Tag
          tagWhite={`#0066CC`}
          tagDark={`#79AAFF`}
          tag={"ALL"}
          selectedTag={state.tag}
          index={"default"}
          onClick={onTagClick}
          scrollToCenter={scrollToCenter}
          hover={false}
          allTag={true}
        />
      </div>
      <div
        ref={containerRef}
        css={css`
          scrollbar-width: none;
          -ms-overflow-style: none;
          &::-webkit-scrollbar {
            display: none;
          }
          ${tw`flex flex-no-wrap content-center mx-2 py-2 pl-1 overflow-scroll`}
        `}
      >
        <Tags
          tagWhite={`#484848`}
          tagDark={`#E8E8E8`}
          tags={tags}
          onClick={onTagClick}
          tag={state.tag}
          scrollToCenter={scrollToCenter}
          hover={true}
        />
      </div>
    </div>
  )
}

export default TagSelector
