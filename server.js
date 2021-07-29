const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const app = express();
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList,
} = require("graphql");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      message: {type: GraphQLString, resolve:() => "Hello World"}
  })
 }),
});

app.use("/graphql", graphqlHTTP({
  schema: schema,
  graphiql: true
}));

app.listen(5000, () => {
  console.log("Server running on port 5000");
})
