import React  from 'react'
import { DocsThemeConfig, useNextSeoProps } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  
  logo: (
      <span style={{ fontWeight: 900 }}>
        Unick Docs
      </span>
  ),
  project: {
    link: 'https://github.com/Unick-io/Documentation',
  },
  chat: {
    link: 'https://discord.gg/gpnzJXBG8m',
  },
  docsRepositoryBase: 'https://github.com/Unick-io',
  footer: {
    text: 'Unick.io Docs',
  },
  useNextSeoProps() {
    return {

  titleTemplate: '%s – Unick.io',
}
  }}


export default config
