require("dotenv").config({
  path: `.env`,
});

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Bientot Riche",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-source-google-spreadsheet",
      options: {
        spreadsheetId: process.env.SPREADSHEET_ID,
        spreadsheetName: "Mois sans tabac",
        typePrefix: "GoogleSpreadsheet",
        credentials: {
          client_email: process.env.CLIENT_EMAIL,
          private_key: Buffer.from(process.env.PRIVATE_KEY, "base64").toString(
            "utf8"
          ),
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`IM Fell English SC`, `VT323`, `Press Start 2P`],
        display: "swap",
      },
    },
  ],
};
