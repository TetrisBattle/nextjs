import { ThemeOptions } from '@mui/material'
import { baseTheme } from './baseTheme'
import { deepmerge } from '@mui/utils'

export const theme: ThemeOptions = {
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

export const darkTheme: ThemeOptions = deepmerge(baseTheme, theme)
