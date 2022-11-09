import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'
import codegen from 'vite-plugin-graphql-codegen'

export default ({ mode }) => {
	process.env = { ...process.env, ...loadEnv(mode, process.cwd()) }
	return defineConfig({
		plugins: [
			react(),
			codegen({
				config: {
					schema: process.env.VITE_APP_API_URL,
					documents: 'src/**/*.ts',
					config: {
						preResolveTypes: true,
					},
					generates: {
						'src/types/graphql.types.ts': {
							plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
							config: {
								typesPrefix: 'I',
								skipTypename: true,
								flattenGeneratedTypesIncludeFragments: true,
								dedupeOperationSuffix: true,
							},
						},
					},
				},
			}),
		],
	})
}
