import { Providers } from '@/providers'
import { ChildrenProp } from '@/types'
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
				<Providers>{children}</Providers>
			</body>
		</html>
	)
}
