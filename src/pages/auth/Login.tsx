import { IFormValues } from 'formash'
import FormRegistration from '../../components/registration/FormRegistration'
import { loginSchema } from '../../mocks/login.schema'

const Login = () => {
	const handleSubmit = (data: IFormValues) => {}

	return (
		<FormRegistration
			handleSubmit={handleSubmit}
			formSchema={loginSchema}
			heading='Login into account'
			description='Use your credentials to access your account.'
			submitText='Login'
			footerText='Don’t have an account?'
			footerLinkText='Sign up'
			footerLink='/signup'
		/>
	)
}

export default Login
