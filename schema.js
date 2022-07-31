const { buildSchema } = require('graphql');

const schema = buildSchema(`

  type Slozeni {
    nekiString: String
    nekiBroj: Float
  }

  type Query {
    hello: String
    dajSlucajniBroj: Float
    nekiSaArgumentima(nesto: String): String
    nestoSlozeno: Slozeni
  }

`);

module.exports = schema;