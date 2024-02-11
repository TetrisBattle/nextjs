import { PaletteMode } from '@mui/material'
import { makeAutoObservable } from 'mobx'

export class ThemeStore {
	paletteMode: PaletteMode = 'dark'

	constructor() {
		makeAutoObservable(this)
	}

	init = () => {
		const paletteMode = localStorage.getItem(
			'paletteMode'
		) as PaletteMode | null
		if (paletteMode) this.paletteMode = paletteMode
	}

	setPaletteMode = (paletteMode: PaletteMode) => {
		this.paletteMode = paletteMode
		localStorage.setItem('paletteMode', paletteMode)
	}

	togglePaletteMode = () => {
		if (this.paletteMode === 'dark') this.setPaletteMode('light')
		else this.setPaletteMode('dark')
	}
}
