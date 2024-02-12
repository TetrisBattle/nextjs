import { ThemeOptions } from '@mui/material'
import { deepmerge } from '@mui/utils'
import { baseTheme } from './baseThemeOptions'

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
