import { MuiThemeProvider } from './theme/themeProvider'
import { StoreProvider } from './stores/store'
import { ChildrenProp } from './types'

export function Providers({ children }: ChildrenProp) {
	return (
		<StoreProvider>
			<MuiThemeProvider>{children}</MuiThemeProvider>
		</StoreProvider>
	)
}
