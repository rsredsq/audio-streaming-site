import React from 'react'
import ClassNames from 'classnames'
import { Icons } from 'react-soundplayer/components'

export const PrevButton = ({ className, style, onPrevClick }) => {
  const { PrevIconSVG } = Icons
  const classNames = ClassNames('sb-soundplayer-btn sb-soundplayer-prev-btn', className)

  return (
    <button type="button" className={classNames} style={style}
            onClick={onPrevClick}>
      <PrevIconSVG/>
    </button>
  )
}

export const NextButton = ({ className, style, onNextClick }) => {
  const { NextIconSVG } = Icons
  const classNames = ClassNames('sb-soundplayer-btn sb-soundplayer-next-btn', className)

  return (
    <button type="button" className={classNames} style={style}
            onClick={onNextClick}>
      <NextIconSVG/>
    </button>
  )
}

export const PreloaderIconSvg = (props) => (
  <svg
    className="mdl-js sb-soundplayer-icon"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 32 32"
    width="32"
    height="32"
    fill="#FC561E">
    <path opacity=".25"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
    <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
          transform="rotate(8.0328 16 16)">
      <animateTransform attributeName="transform" type="rotate" from="0 16 16"
                        to="360 16 16" dur="0.8s" repeatCount="indefinite"/>
    </path>
  </svg>
)