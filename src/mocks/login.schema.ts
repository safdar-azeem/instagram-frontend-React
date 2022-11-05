import { IFormSchema } from 'formash'

export const loginSchema: IFormSchema[] = [
	{
		name: 'email',
		label: 'Email',
		type: 'email',
		required: true,
		placeholder: 'Enter your email',
		value: '',
		error: 'Please enter your email',
	},
	{
		name: 'password',
		label: 'Password',
		type: 'password',
		required: true,
		placeholder: 'Enter your password',
		value: '',
		error: 'Please enter your password',
	},
]
