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
        background_color: `#F8A01A`,
        theme_color: `#F8A01A`,
        display: `minimal-ui`,
        icon: "src/images/logo-512x512.png",
        icons: [
          {
            "src": "/icons/icon-192x192.png",
            "sizes": "192x192",
            "type": "image/png",
            "purpose": "any maskable"
          },
          {
            "src": "/icons/icon-512x512.png",
            "sizes": "512x512",
            "type": "image/png",
            "purpose": "any maskable"
          }
        ]
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/`, `/404`]
      }
    }
  ],
}
