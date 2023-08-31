// @ts-check

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { loadEnvConfig } = require('@next/env')

loadEnvConfig(process.cwd())

/** @type {import("@graphql-codegen/cli").CodegenConfig} */
const config = {
  overwrite: true,
  schema: {
    [process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_URL ??
    'https://api.sandbox.awellhealth.com/orchestration/m2m/graphql']: {
      headers: {
        apiKey: process.env.NEXT_PUBLIC_SANDBOX_GRAPHQL_API_KEY || '',
      },
    },
  },
  emitLegacyCommonJSImports: false,
  generates: {
    'src/types/generated/api.types.ts': {
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
    },
  },
}

module.exports = config
