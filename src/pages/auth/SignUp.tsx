import { IFormValues } from 'formash'
import FormRegistration from '../../components/registration/FormRegistration'
import { signUpSchema } from '../../mocks/signUp.schema'

const SignUp = () => {
	const handleSubmit = (data: IFormValues) => {}

	return (
		<FormRegistration
			handleSubmit={handleSubmit}
			formSchema={signUpSchema}
			heading='Create New Account.'
			description='Add your credentials to create a new account.'
			submitText='Sign up'
			footerText='Already have an account?'
			footerLinkText='Login'
			footerLink='/login'
		/>
	)
}

export default SignUp
