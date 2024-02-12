'use client'

import { Box, Button, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'

function Home() {
	return (
		<Box sx={{ p: 2 }}>
			<Typography variant='h1'>Home</Typography>
			<Button>Button</Button>
			<Button variant='contained'>Button</Button>
		</Box>
	)
}

export default observer(Home)
