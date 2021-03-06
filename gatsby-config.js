module.exports = {
  siteMetadata: {
    title: `Jacob D Frank Portfolio`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    'gatsby-plugin-catch-links', {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/posts`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/static/assets`,
        name: 'img'
      }
    },
     {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-96615084-1",
        // Setting this parameter is optional
        anonymize: true
      }
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-netlify-cms',
  ]
}
