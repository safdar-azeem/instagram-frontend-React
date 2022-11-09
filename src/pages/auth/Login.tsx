import { ApolloError } from '@apollo/client'
import { Icon } from '@iconify-icon/react'
import { showNotification } from '@mantine/notifications'
import { IFormValues } from 'formash'
import { useNavigate } from 'react-router-dom'
import FormRegistration from '../../components/registration/FormRegistration'
import { AppRoutes } from '../../constants/routes.constants'
import { loginSchema } from '../../mocks/login.schema'
import { useLoginMutation } from '../../types/graphql.types'
import iCookies from '../../utils/cookies.utils'

const Login = () => {
	const navigate = useNavigate()

	const [login, { loading }] = useLoginMutation({
		onCompleted: ({ login }) => {
			iCookies.setToken(login?.token || '')
			showNotification({
				message: 'Login successful',
				icon: <Icon icon='mdi:check' />,
			})
			navigate(AppRoutes.HOME)
		},
		onError: (error: ApolloError) => {
			showNotification({
				color: 'red',
				message: error.message,
				icon: <Icon icon='mdi:close' />,
			})
		},
	})

	const handleSubmit = (data: IFormValues) =>
		login({
			variables: {
				email: data.email,
				password: data.password,
			},
		})

	return (
		<FormRegistration
			handleSubmit={handleSubmit}
			formSchema={loginSchema}
			heading='Login into account'
			description='Use your credentials to access your account.'
			submitText='Login'
			footerText='Don’t have an account?'
			footerLinkText='Sign up'
			footerLink={AppRoutes.REGISTER}
			isLoading={loading}
		/>
	)
}

export default Login
