import { ThemeOptions } from '@mui/material'
import { baseTheme } from './baseTheme'
import { deepmerge } from '@mui/utils'

export const theme: ThemeOptions = {
	palette: {
		mode: 'light',
	},
}

export const lightTheme: ThemeOptions = deepmerge(baseTheme, theme)
