import { Loader } from '@mantine/core'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'
import { NotificationsProvider } from '@mantine/notifications'

const App = () => {
	return (
		<>
			<NotificationsProvider
				position='top-right'
				autoClose={1500}>
				<RouterProvider
					router={routes}
					fallbackElement={<Loader />}
				/>
			</NotificationsProvider>
		</>
	)
}

export default App
