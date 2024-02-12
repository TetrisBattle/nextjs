'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Box, Button } from '@mui/material'
import { HeaderRoutes } from './header'

export function HeaderButtons({ routes }: { routes: HeaderRoutes }) {
	const pathName = usePathname()

	return (
		<Box
			sx={{
				height: 1,
				display: {
					xs: 'none',
					sm: 'flex',
				},
			}}
		>
			{routes.map(({ route, label }) => (
				<Button
					key={route}
					component={Link}
					href={route}
					sx={(theme) => ({
						fontSize: '1.25rem',
						fontWeight: theme.typography.fontWeightRegular,
						color:
							pathName === route
								? theme.palette.primary.main
								: 'inherit',
					})}
				>
					{label}
				</Button>
			))}
		</Box>
	)
}
