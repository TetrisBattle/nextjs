import { MuiThemeProvider } from './theme/themeProvider'
import { StoreProvider } from './stores/store'
import { ChildrenProp } from './types'

export const Providers = ({ children }: ChildrenProp) => {
	return (
		<StoreProvider>
			<MuiThemeProvider>{children}</MuiThemeProvider>
		</StoreProvider>
	)
}
