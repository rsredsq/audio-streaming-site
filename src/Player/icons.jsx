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

// Delete bucket
export const DeleteIconSVG = ({ className, style }) => (
  <IconSVG
    className={className}
    style={style}
    viewBox="0 0 774.266 774.266">
    <path
      d="M640.35,91.169H536.971V23.991C536.971,10.469,526.064,0,512.543,0c-1.312,0-2.187,0.438-2.614,0.875    C509.491,0.438,508.616,0,508.179,0H265.212h-1.74h-1.75c-13.521,0-23.99,10.469-23.99,23.991v67.179H133.916    c-29.667,0-52.783,23.116-52.783,52.783v38.387v47.981h45.803v491.6c0,29.668,22.679,52.346,52.346,52.346h415.703    c29.667,0,52.782-22.678,52.782-52.346v-491.6h45.366v-47.981v-38.387C693.133,114.286,670.008,91.169,640.35,91.169z     M285.713,47.981h202.84v43.188h-202.84V47.981z M599.349,721.922c0,3.061-1.312,4.363-4.364,4.363H179.282    c-3.052,0-4.364-1.303-4.364-4.363V230.32h424.431V721.922z M644.715,182.339H129.551v-38.387c0-3.053,1.312-4.802,4.364-4.802    H640.35c3.053,0,4.365,1.749,4.365,4.802V182.339z"/>
    <rect x="475.031" y="286.593" width="48.418" height="396.942"/>
    <rect x="363.361" y="286.593" width="48.418" height="396.942"/>
    <rect x="251.69" y="286.593" width="48.418" height="396.942"/>
  </IconSVG>
)
