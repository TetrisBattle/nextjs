'use client'

import { useStore } from '@/stores/store'
import { Button } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

function Home() {
	const { themeStore } = useStore()

	useEffect(() => {
		themeStore.init()
	}, [themeStore])

	return (
		<div>
			Home
			<Button onClick={() => themeStore.togglePaletteMode()}>asd</Button>
			<p>{themeStore.paletteMode}</p>
		</div>
	)
}

export default observer(Home)
