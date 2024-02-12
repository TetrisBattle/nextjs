'use client'

import { Box, Typography } from '@mui/material'
import { observer } from 'mobx-react-lite'

function Home() {
	return (
		<Box sx={{ p: 2 }}>
			<Typography variant='h1'>Home</Typography>
		</Box>
	)
}

export default observer(Home)
