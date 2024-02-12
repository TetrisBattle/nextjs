import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Box } from '@mui/material'
import { ChildrenProp } from '@/types'
import { Providers } from '@/providers'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Next.js',
	description: 'Next.js app',
}

export default function RootLayout({ children }: Readonly<ChildrenProp>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<Providers>
					<Box
						sx={{
							minHeight: '100dvh',
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Header />
						{children}
						<Footer />
					</Box>
				</Providers>
			</body>
		</html>
	)
}
