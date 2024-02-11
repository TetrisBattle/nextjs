'use client'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { ChildrenProp } from '@/types'
import { themeOptions } from './themeOptions'

export function MuiThemeProvider({ children }: ChildrenProp) {
	const theme = createTheme(themeOptions)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
