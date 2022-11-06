import { Box, Button, Container, Input, Text } from '@mantine/core'
import { IFormSchema, IFormValues, useForm } from 'formash'
import { Link } from 'react-router-dom'

interface IFormRegistrationProps {
	handleSubmit: (data: IFormValues) => void
	heading: string
	description: string
	submitText: string
	formSchema: IFormSchema[]
	footerText: string
	footerLinkText: string
	footerLink: string
	isLoading?: boolean
}

const FormRegistration = ({
	handleSubmit,
	formSchema,
	heading,
	description,
	submitText,
	footerText,
	footerLinkText,
	footerLink,
	isLoading,
}: IFormRegistrationProps) => {
	const { formValues, formErrors, handleChange, doValidate } = useForm(formSchema)

	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		if (doValidate()) handleSubmit(formValues)
	}

	return (
		<Container size='lg'>
			<Box className='flex w-full justify-between gap-x-7 items-center min-h-screen md:min-h-screen py-10'>
				<form onSubmit={onSubmit} className='w-full md:w-1/2 lg:w-2/5'>
					<header className='mb-8 text-center md:text-left'>
						<h1>{heading}</h1>
						<Text>{description}</Text>
					</header>
					{formSchema.map((field: IFormSchema) => (
						<Input.Wrapper
							id={field.name}
							key={field.name}
							withAsterisk
							label={field.label}
							error={formErrors[field.name]}
							className='mb-5'
						>
							<Input
								id={field.name}
								type={field.type}
								name={field.name}
								placeholder={field.placeholder}
								value={formValues[field.name]}
								onChange={handleChange}
							/>
						</Input.Wrapper>
					))}
					<Button
						type='submit'
						variant='filled'
						fullWidth
						className='mt-6'
						loading={isLoading}
					>
						{submitText}
					</Button>
					<footer className='mt-6'>
						<Text ta='center'>
							{footerText}
							<Link to={footerLink} className='ml-2 font-bold text-black'>
								{footerLinkText}
							</Link>
						</Text>
					</footer>
				</form>
				<Box className='w-2/4 hidden md:flex'>
					<img src='/images/login-bg.svg' alt='Login' className='w-full' />
				</Box>
			</Box>
		</Container>
	)
}

export default FormRegistration
