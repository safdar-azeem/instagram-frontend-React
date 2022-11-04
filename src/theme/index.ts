import type { MantineThemeOverride } from '@mantine/core'

const theme: MantineThemeOverride = {
	components: {
		Button: {
			defaultProps: {
				size: 'md',
				styles: () => ({
					root: {
						fontWeight: 500,
					},
				}),
			},
		},
		Input: {
			defaultProps: {
				size: 'md',
			},
		},
		InputWrapper: {
			classNames: {
				label: 'mb-2 text-[15px]',
				error: 'mt-2 text-[15px]',
			},
		},
		TextInput: {
			defaultProps: {
				size: 'xl',
			},
		},
		InputWrapperLabel: {
			styles: {
				root: {
					marginBottom: 10,
				},
			},
		},
		Avatar: {
			defaultProps: {
				size: 'lg',
				radius: 'xl',
			},
		},
	},
	radius: {
		xl: 500,
	},
	colors: {
		green: [
			'#ECF9F8',
			'#C9EDEC',
			'#A6E2DF',
			'#84D7D3',
			'#61CCC7',
			'#3FC0BA',
			'#287B77',
			'#20625f',
			'#1c5653',
			'#143e3c',
		],
		gray: [
			'#F0F2F4',
			'#D9DCDE',
			'#C0C6C9',
			'#A7AFB4',
			'#DBDFE4',
			'#768389',
			'#5E696E',
			'#474E52',
			'#2F3437',
			'#181A1B',
		],
	},
	white: '#FCFCFD',
	primaryColor: 'green',
	fontSizes: {
		xs: 12,
		sm: 14,
		md: 16,
		lg: 18,
		xl: 22,
	},
	headings: {
		sizes: {
			h1: { fontWeight: 800, fontSize: 44 },
			h2: { fontWeight: 800, fontSize: 38 },
			h3: { fontWeight: 800, fontSize: 28 },
			h4: { fontWeight: 700, fontSize: 22 },
			h5: { fontWeight: 600, fontSize: 18 },
			h6: { fontWeight: 600, fontSize: 16 },
		},
	},
	fontFamily: 'Roboto, sans-serif',
	defaultRadius: 6,
}

export default theme
