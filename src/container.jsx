import React from 'react'

export default function Container({
  center,
  vCenter,
  dark,
  gray,
  wide,
  first,
  top,
  small,
  borders,
  id,
  bodyText,
  padding,
  margin,
  overflow,
  minHeight,
  dotBackground,
  children,
  mobileStyle,
  ...props
}) {
  return (
    <div {...props}>
    <style jsx>
      {`
        div {
          width: 100%;
          position: relative;
          margin: ${margin ? '0' : '0 auto'};
          padding: ${padding ? 'var(--outer-padding)' : '0'} ${wide ? '0' : ''};
          ${small ? 'max-width: calc(100% - 18rem);' : ''}
          ${bodyText ? 'max-width: 740px;' : ''}
          ${center ? 'text-align: center;' : ''}
          ${
            dark
              ? 'background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);'
              : ''
          }
          ${first ? 'padding-top: 6rem;' : ''}
          ${dark ? 'color: #f1f1f1;' : ''}
          ${gray ? 'background-color: #f6f6f6;' : ''}
          ${wide && !overflow ? 'overflow: hidden;' : ''}
          ${minHeight ? `min-height: ${minHeight};` : ''}
          ${vCenter ? 'display: flex; align-items: center;' : ''}
          ${
            borders
              ? `
            border-top: 1px solid;
            border-bottom: 1px solid;
          `
              : ''
          }
          ${
            dotBackground
              ? `
            background-image: radial-gradient(circle, #D7D7D7, #D7D7D7 1px, #FFF 1px, #FFF);
            background-size: 29px 29px;
          `
              : ''
          }
        }
        div:after {
          content: '';
          display: table;
          clear: both;
        }

        // CSS only media query for tablet
        @media screen and (max-width: 960px) {
          div {
            padding: ${padding ? '4rem' : '0'} ${wide ? '0' : '2rem'};
            ${first ? 'padding-top: 6rem;' : ''}
            ${small ? 'max-width: calc(100% - 9rem);' : ''}

          }
        }
        // CSS only media query for mobile
        @media screen and (max-width: 640px) {
          div {
            padding: ${padding ? '4rem' : '0'} ${wide ? '0' : '1rem'};
            ${first ? 'padding-top: 6rem;' : ''}
            ${small ? 'max-width: 100%' : ''}
            ${mobileStyle || ''}
          }
        }
      `}
    </style>
    {children}
  </div>
  )
}