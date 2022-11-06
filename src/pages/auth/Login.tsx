import { ApolloError, useMutation } from '@apollo/client'
import { Icon } from '@iconify-icon/react'
import { showNotification } from '@mantine/notifications'
import { IFormValues } from 'formash'
import { useNavigate } from 'react-router-dom'
import FormRegistration from '../../components/registration/FormRegistration'
import { AppRoutes } from '../../constants/routes.constants'
import LoginMutation from '../../graphql/mutations/login.mutation'
import { loginSchema } from '../../mocks/login.schema'
import iCookies from '../../utils/cookies.utils'

const Login = () => {
	const navigate = useNavigate()

	const [login, { loading }] = useMutation(LoginMutation, {
		onCompleted: ({ login }) => {
			iCookies.setToken(login.token)
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

	const handleSubmit = (data: IFormValues) => login({ variables: data })

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
