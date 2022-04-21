const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const TrackAPI = require('./datasources/track-api');


const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI()
    };
  }

});

server.listen().then((res) => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    ${res.url}
     📭  Query at https://studio.apollographql.com/dev
`);
});
