# 🚀 fast-graphql

Graphql Tools to Strucutre , Combine Resolvers , Merge Schema Definitions and generate schema file

# Install

```
npm i fast-graphql

```

```
yarn add fast-graphql
```

# Example : Demo : Next.js Graphql Server that use fast-graphql

[https://github.com/idurar/next-js-graphql-apollo-server-starter](https://github.com/idurar/next-js-graphql-apollo-server-starter)

# To Merge Schema

```
import { mergeSchemas } from 'fast-graphql';

const pathfiles = './backend/graphql/typeDefs/*.gql';

const mergedSchemas = mergeSchemas({ pathfiles });

export default mergedSchemas;

```

# To Combine Resolvers

```
import { combineResolvers, resolverType } from 'fast-graphql';

import user from './user';
import place from './place';
import review from './review';

const resolvers: resolverType[] = [place, user, review];

const cominedResolvers = combineResolvers({ resolvers });

export default cominedResolvers;

```

# To Generate Resolvers

```
const { generateSchema } = require('fast-graphql');

const inputPath = './backend/graphql/typeDefs/*.gql';
const outPath = './backend/graphql/schema.graphql';

generateSchema({ inputPath, outPath });

```
