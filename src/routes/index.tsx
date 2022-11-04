import { lazy } from 'react'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'

const Home = lazy(() => import('../pages/public/Home'))
const Login = lazy(() => import('../pages/auth/Login'))
const SignUp = lazy(() => import('../pages/auth/SignUp'))

export const routes = createBrowserRouter([
	{
		path: '/',
		element: <Home />,
	},
	{
		path: '/login',
		element: <Login />,
	},
	{
		path: '/signup',
		element: <SignUp />,
	},
])
