import { ApolloError, useMutation } from '@apollo/client'
import { Icon } from '@iconify-icon/react'
import { showNotification } from '@mantine/notifications'
import { IFormValues } from 'formash'
import { useNavigate } from 'react-router-dom'
import FormRegistration from '../../components/registration/FormRegistration'
import { AppRoutes } from '../../constants/routes.constants'
import RegisterMutation from '../../graphql/mutations/register.mutation'
import { signUpSchema } from '../../mocks/signUp.schema'

const SignUp = () => {
	const navigate = useNavigate()

	const [register, { loading }] = useMutation(RegisterMutation, {
		onCompleted: ({ register }) => {
			showNotification({
				message: register.message,
				icon: <Icon icon='mdi:check' />,
			})
			navigate(AppRoutes.LOGIN)
		},
		onError: (error: ApolloError) => {
			showNotification({
				color: 'red',
				message: error.message,
				icon: <Icon icon='mdi:close' />,
			})
		},
	})

	const handleSubmit = (data: IFormValues) => register({ variables: data })

	return (
		<FormRegistration
			handleSubmit={handleSubmit}
			formSchema={signUpSchema}
			heading='Create New Account.'
			description='Add your credentials to create a new account.'
			submitText='Sign up'
			footerText='Already have an account?'
			footerLinkText='Login'
			footerLink={AppRoutes.REGISTER}
			isLoading={loading}
		/>
	)
}

export default SignUp
