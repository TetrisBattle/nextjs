'use client'

import { Box, Button } from '@mui/material'
import { observer } from 'mobx-react-lite'

function Home() {
	return (
		<Box>
			Home
			<Button>Button</Button>
			<Button variant='text'>Button</Button>
		</Box>
	)
}

export default observer(Home)
