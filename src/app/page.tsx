'use client'

import { Button } from '@mui/material'
import { observer } from 'mobx-react-lite'

function Home() {
	return (
		<div>
			Home
			<Button>Button</Button>
		</div>
	)
}

export default observer(Home)
