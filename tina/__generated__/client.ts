import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '812fc5570381ec86d161bf58e302963bc8a5a809', queries,  });
export default client;
  