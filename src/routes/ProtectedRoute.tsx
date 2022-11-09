import { Navigate } from 'react-router-dom'
import FallBackLoader from '../components/reusable/FallBackLoader'
import { AppRoutes } from '../constants/routes.constants'
import { useMeQuery } from '../types/graphql.types'
import iCookies from '../utils/cookies.utils'

interface ProtectedRouteProps {
	children: React.ReactElement<any>
	type: 'auth' | 'private'
}

const ProtectedRoute = ({ children, type }: ProtectedRouteProps) => {
	const token = iCookies.getToken()
	const { data, loading } = useMeQuery({
		fetchPolicy: 'network-only',
		context: {
			headers: {
				authorization: token ? `${token}` : '',
			},
		},
	})

	if (loading) return <FallBackLoader />

	return data?.me ? (
		type === 'private' ? (
			children
		) : (
			<Navigate to={AppRoutes.HOME} />
		)
	) : type === 'auth' ? (
		children
	) : (
		<Navigate to={AppRoutes.LOGIN} />
	)
}

export default ProtectedRoute
