import { Box, Loader, MantineProvider } from '@mantine/core'
import React, { Suspense } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import theme from './theme/'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<Suspense
			fallback={
				<Box className='min-h-screen flex justify-center items-center w-screen'>
					<Loader />
				</Box>
			}
		>
			<MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
				<App />
			</MantineProvider>
		</Suspense>
	</React.StrictMode>
)
