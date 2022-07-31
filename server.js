const express = require('express');
const { graphqlHTTP } = require('express-graphql');
// const expressGraphQL = require('express-graphql').graphqlHTTP;
const app = express();
/*
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} = require('graphql');
*/
const root = require('./root');
const schema = require('./schema');

/*
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
*/



/*
app.use('/graphql', expressGraphQL({
  schema: schema,
  grapihql: true
}));
*/

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true
}));


app.listen(5000, () => console.log('Server Running'));
