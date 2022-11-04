import { IFormSchema } from 'formash'

export const loginSchema: IFormSchema[] = [
	{
		name: 'name',
		label: 'Name',
		type: 'text',
		required: true,
		placeholder: 'Enter your name',
		error: 'Please enter your name',
		value: '',
	},
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
