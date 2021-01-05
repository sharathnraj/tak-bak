module.exports = {
  siteMetadata: {
    title: `Tak Bak`,
    description: `The Tak Bak app will teach your kids Hindi the fun and cool way. There are no memorizing drills or boring lessons. ONLY GAMES. Your kids will listen and play and learning happens automatically.`,
    author: `Sharath Nagaraj <sharathnraj@yahoo.com>`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
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
        name: `tak-bak`,
        short_name: `tak-bak`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
