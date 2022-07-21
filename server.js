const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const app = express();
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'HelloWorld',
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => 'Hello World'
      }
    })
  })
})
app.listen(5000, () => console.log('Server Running'));

app.use('/graphql', expressGraphQL({
  schema: schema,
  grapihql: true
}));