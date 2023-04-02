# 🚀 fast-graphql

Graphql Tools to Strucutre , Combine Resolvers , Merge Schema Definitions and generate schema file for Node.js / Next.Js / Graphql Apollo server

Topics


## Install

```
npm i fast-graphql
```

```
yarn add fast-graphql
```

## Example : Next.js Graphql Server that use fast-graphql

[https://github.com/idurar/next-js-graphql-apollo-server-starter](https://github.com/idurar/next-js-graphql-apollo-server-starter)


## To Merge Schema

```
import { mergeSchemas } from 'fast-graphql';

const pathfiles = './backend/graphql/typeDefs/*.gql';

const mergedSchemas = mergeSchemas({ pathfiles });

export default mergedSchemas;

```

## To Combine Resolvers

```
import { combineResolvers, resolverType } from 'fast-graphql';

import user from './user';
import place from './place';
import review from './review';

const resolvers: resolverType[] = [place, user, review];

const cominedResolvers = combineResolvers({ resolvers });

export default cominedResolvers;

```

## To Generate Schema file (recomended to deploy to vercel easly)

```
./scripts/generateSchema.js 

const { generateSchema } = require('fast-graphql');

const inputPath = './graphql/typeDefs/*.gql';
const schemaPath = './graphql/schema.graphql';
const typeDefsPath = './graphql/typeDefs/index.ts';

generateSchema({ inputPath, schemaPath, typeDefsPath });

```

```
# package.json

"scripts": {
    "dev": "yarn generate && next dev",
    ...
    "generate:schema": "node ./scripts/generateSchema"
  },

```

