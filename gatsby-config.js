module.exports = {
  siteMetadata: {
    title: `ASDF Technology`,
    description: `PT AS Digital Future Technology is a leading IT Company From Indonesia!`,
    author: `@asdftechnology.id`,
    viewPortScale: `width=device-width, initial-scale=0.9, shrink-to-fit=no`,
  },
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-offline',
    'gatsby-plugin-sass',
    'gatsby-plugin-material-ui',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/src/assets`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        pure: true,
        displayName: process.env.GATSBY_PRODUCTION !== "TRUE",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'asdf-technology',
        short_name: 'asdf-tech',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/img/favicon.png', // This path is relative to the root of the site.
      },
    },
  ],
}