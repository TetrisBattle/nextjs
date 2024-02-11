'use client'

import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { ChildrenProp } from '@/types'
import { useStore } from '@/stores/store'
import { darkTheme } from './darkTheme'
import { lightTheme } from './lightTheme'
import { observer } from 'mobx-react-lite'

export const MuiThemeProvider = observer(({ children }: ChildrenProp) => {
	const { themeStore } = useStore()
	const theme = createTheme(
		themeStore.paletteMode === 'dark' ? darkTheme : lightTheme
	)

	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
})
