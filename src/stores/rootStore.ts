import { AppStore } from './appStore'
import { ThemeStore } from './themeStore'

export class RootStore {
	themeStore = new ThemeStore()
	appStore = new AppStore()
}
