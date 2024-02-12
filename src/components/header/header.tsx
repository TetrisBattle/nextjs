import Image from 'next/image'
import { AppBar, Box, Toolbar, Typography } from '@mui/material'
import { HeaderDrawer } from './headerDrawer'
import { HeaderButtons } from './headerButtons'

export type HeaderRoutes = {
	route: string
	label: string
}[]

export function Header() {
	const headerRoutes: HeaderRoutes = [
		{ route: '/home', label: 'Home' },
		{ route: '/about', label: 'About' },
	]

	return (
		<AppBar>
			<Toolbar
				sx={{
					height: 64,
					px: 2,
					justifyContent: 'space-between',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						alignItems: 'center',
						gap: 2,
					}}
				>
					<Image
						src='/logo.svg'
						alt='Logo'
						width={28}
						height={28}
						priority
					/>
					<Typography variant='h1' sx={{ fontSize: 32 }}>
						Next.js
					</Typography>
				</Box>
				<Box>
					<HeaderDrawer routes={headerRoutes} />
					<HeaderButtons routes={headerRoutes} />
				</Box>
			</Toolbar>
		</AppBar>
	)
}
