/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Anshuman Talukdar',
    description:
      'Anshuman Talukdar is a software engineer who specializes in building (and occasionally designing) exceptional digital experiences.',
    siteUrl: 'https://anshumantalukdar.netlify.app/',
    image: '/og.png', // Path to your image you placed in the 'static' folder
    twitterUsername: '@anshutalukdar',
  },
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://anshumantalukdar.netlify.app',
        sitemap: 'https://anshumantalukdar.netlify.app/sitemap-index.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
}
