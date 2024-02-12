'use client'

import { Menu as MenuIcon } from '@mui/icons-material'
import { Drawer, IconButton, MenuItem } from '@mui/material'
import { useState } from 'react'
import { HeaderRoutes } from './header'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export const HeaderDrawer = ({ routes }: { routes: HeaderRoutes }) => {
	const [open, setOpen] = useState(false)
	const pathName = usePathname()

	return (
		<>
			<IconButton
				onClick={() => setOpen(true)}
				sx={{ display: { sm: 'none' } }}
			>
				<MenuIcon />
			</IconButton>

			<Drawer anchor='right' open={!!open} onClose={() => setOpen(false)}>
				{routes.map(({ route, label }) => (
					<MenuItem
						key={route}
						component={Link}
						href={route}
						onClick={() => setOpen(false)}
						sx={{
							color: (theme) =>
								pathName === route
									? theme.palette.primary.main
									: 'inherit',
						}}
					>
						{label}
					</MenuItem>
				))}
			</Drawer>
		</>
	)
}
