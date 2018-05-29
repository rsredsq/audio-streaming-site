import React from 'react'

export const IconSVG = ({ className, style, viewBox, children }) => (
  <svg
    className={className}
    style={style}
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || '0 0 32 32'}
    fill="currentColor"
  >
    {children}
  </svg>
)

// |> Play
export const PlayIconSVG = ({ className, style }) => (
  <IconSVG
    className={className}
    style={style}>
    <path d="M0 0 L32 16 L0 32 z"/>
  </IconSVG>
)

// || Pause
export const PauseIconSVG = ({ className, style }) => (
  <IconSVG
    className={className}
    style={style}>
    <path d="M0 0 H12 V32 H0 z M20 0 H32 V32 H20 z"/>
  </IconSVG>
)

// |>| Next
export const NextIconSVG = ({ className, style }) => (
  <IconSVG
    className={className}
    style={style}>
    <path d="M4 4 L24 14 V4 H28 V28 H24 V18 L4 28 z "/>
  </IconSVG>
)


// |<| Prev
export const PrevIconSVG = ({ className, style }) => (
  <IconSVG
    className={className}
    style={style}>
    <path d="M4 4 H8 V14 L28 4 V28 L8 18 V28 H4 z "/>
  </IconSVG>
)


// Volume
export const VolumeIconLoudSVG = ({ className, style }) => (
  <IconSVG
    viewBox="0 0 75 75"
    className={className}
    style={style}>
    <polygon
      points="39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769"
      style={{ strokeWidth: 5, strokeLinejoin: 'round' }}/>
    <path
      d="M 48.128,49.03 C 50.057,45.934 51.19,42.291 51.19,38.377 C 51.19,34.399 50.026,30.703 48.043,27.577"
      style={{ fill: 'none', strokeWidth: 5, strokeLinecap: 'round' }}/>
    <path
      d="M 55.082,20.537 C 58.777,25.523 60.966,31.694 60.966,38.377 C 60.966,44.998 58.815,51.115 55.178,56.076"
      style={{ fill: 'none', strokeWidth: 5, strokeLinecap: 'round' }}/>
    <path
      d="M 61.71,62.611 C 66.977,55.945 70.128,47.531 70.128,38.378 C 70.128,29.161 66.936,20.696 61.609,14.01"
      style={{ fill: 'none', strokeWidth: 5, strokeLinecap: 'round' }}/>
  </IconSVG>
)

export const VolumeIconMuteSVG = ({ className, style }) => (
  <IconSVG
    viewBox="0 0 75 75"
    className={className}
    style={style}>
    <polygon
      points="39.389,13.769 22.235,28.606 6,28.606 6,47.699 21.989,47.699 39.389,62.75 39.389,13.769"
      style={{ stroke: '#11111', strokeWidth: 5, strokeLinejoin: 'round' }}/>
    <path d="M 48.651772,50.269646 69.395223,25.971024"
          style={{ fill: 'none', strokeWidth: 5, strokeLinecap: 'round' }}/>
    <path d="M 69.395223,50.269646 48.651772,25.971024"
          style={{ fill: 'none', strokeWidth: 5, strokeLinecap: 'round' }}/>
  </IconSVG>
)

// Loading circle
export const PreloaderIconSvg = ({ className, style }) => (
  <IconSVG
    className={className}
    style={style}>
    <path opacity=".25"
          d="M16 0 A16 16 0 0 0 16 32 A16 16 0 0 0 16 0 M16 4 A12 12 0 0 1 16 28 A12 12 0 0 1 16 4"/>
    <path d="M16 0 A16 16 0 0 1 32 16 L28 16 A12 12 0 0 0 16 4z"
          transform="rotate(8.0328 16 16)">
      <animateTransform attributeName="transform" type="rotate" from="0 16 16"
                        to="360 16 16" dur="0.8s" repeatCount="indefinite"/>
    </path>
  </IconSVG>
)