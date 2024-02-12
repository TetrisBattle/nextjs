import { Footer } from '@/components/footer'
import { Header } from '@/components/header/header'
import { Providers } from '@/providers'
import { ChildrenProp } from '@/types'
import { Box } from '@mui/material'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

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
