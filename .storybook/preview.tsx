import { useDarkMode } from 'storybook-dark-mode'

import { MantineProvider } from '@mantine/core'
import React from 'react'
import { theme } from '../src/theme'

function ThemeWrapper(props: { children: React.ReactNode }) {
	const colorScheme = useDarkMode() ? 'dark' : 'light'

	return (
		<MantineProvider
			theme={{ ...theme, colorScheme }}
			withGlobalStyles
			withNormalizeCSS
		>
			{props.children}
		</MantineProvider>
	)
}

// enhance your stories with decorator that uses ThemeWrapper
export const decorators = [
	(renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
]
