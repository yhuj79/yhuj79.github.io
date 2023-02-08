import React, { useContext } from "react"
import ThemeContext from "../lib/context/ThemContext"
import tw from "twin.macro"
import Image from "gatsby-image"

const PhotoFrame = ({ fixed, alt = "profileImg", _css }) => {
  const { isDarkMode } = useContext(ThemeContext)

  return (
    <Image
      fixed={fixed}
      alt={alt}
      css={[
        isDarkMode
          ? tw`rounded-full border border-gray-300`
          : tw`rounded-full border border-blue-900`,
        _css,
      ]}
    />
  )
}

export default PhotoFrame
