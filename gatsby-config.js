/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

// Load environment variables
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

// Prepare plugins array
const plugins = [
  `gatsby-plugin-image`,
  {
    resolve: `gatsby-source-filesystem`,
    options: {
      name: `images`,
      path: `${__dirname}/src/images`,
    },
  },
  `gatsby-transformer-sharp`,
  `gatsby-plugin-sharp`,
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: `white-keys-music`,
      short_name: `whitekeys`,
      start_url: `/`,
      background_color: `#ffffff`,
      // This will impact how browsers show your PWA/website
      // https://css-tricks.com/meta-theme-color-and-trickery/
      theme_color: `#000000`,
      display: `minimal-ui`,
      icon: `src/images/piano-icon.svg`, // Using SVG directly
    },
  },
]

// Only add Contentful plugin if environment variables exist
if (process.env.CONTENTFUL_SPACE_ID && process.env.CONTENTFUL_ACCESS_TOKEN) {
  plugins.push({
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: process.env.CONTENTFUL_SPACE_ID,
      accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
    },
  })
}

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `White Keys Music`,
    description: `Piano instruction studio in Modesto, California. Over 30 years of experience with Cindy White, using the Piano Marvel teaching method.`,
    author: `Cindy White`,
    siteUrl: `https://whitekeys-music.com/`,
  },
  plugins,
}
