import { ChildrenProp } from './types'
import { StoreProvider } from './stores/store'
import { MuiThemeProvider } from './theme/themeProvider'

export function Providers({ children }: ChildrenProp) {
	return (
		<StoreProvider>
			<MuiThemeProvider>{children}</MuiThemeProvider>
		</StoreProvider>
	)
}
