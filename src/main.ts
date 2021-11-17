import { ApolloServer } from "apollo-server";

import typeDefs from "./schema";
import resolvers from "./resolvers";

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});

let port = process.env.PORT || 4000;

// server.listen({ port }).then(({ url }) => {
//   console.log(`🚀  Server ready at ${url}`);
// });
server.listen(port, () => {
  console.log("server listening to port " + port);
});
