import { ApolloProvider } from '@apollo/client'
import { MantineProvider } from '@mantine/core'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import FallBackLoader from './components/reusable/FallBackLoader'
import client from './config/graphql.config'
import './index.css'
import theme from './theme/'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<Suspense fallback={<FallBackLoader />}>
				<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
					<App />
				</MantineProvider>
			</Suspense>
		</ApolloProvider>
	</React.StrictMode>
)
