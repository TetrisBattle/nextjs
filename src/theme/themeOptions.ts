import { ThemeOptions } from '@mui/material'
import { baseTheme } from './baseThemeOptions'
import { deepmerge } from '@mui/utils'

export const customTheme: ThemeOptions = {
	palette: {
		mode: 'dark',
		primary: {
			main: '#BB85FC',
		},
		secondary: {
			main: '#10DAC6',
		},
	},
}

export const themeOptions: ThemeOptions = deepmerge(baseTheme, customTheme)
