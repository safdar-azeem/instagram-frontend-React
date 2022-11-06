import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { AppRoutes } from '../constants/routes.constants'
import ProtectedRoute from './ProtectedRoute'

const Home = lazy(() => import('../pages/public/Home'))
const Login = lazy(() => import('../pages/auth/Login'))
const SignUp = lazy(() => import('../pages/auth/SignUp'))

export const routes = createBrowserRouter([
	{
		path: AppRoutes.HOME,
		element: (
			<ProtectedRoute type='private'>
				<Home />
			</ProtectedRoute>
		),
	},
	{
		path: AppRoutes.LOGIN,
		element: (
			<ProtectedRoute type='auth'>
				<Login />
			</ProtectedRoute>
		),
	},
	{
		path: AppRoutes.REGISTER,
		element: (
			<ProtectedRoute type='auth'>
				<SignUp />
			</ProtectedRoute>
		),
	},
])
