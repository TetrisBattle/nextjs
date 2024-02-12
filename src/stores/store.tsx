'use client'

import { createContext, useContext } from 'react'
import { ChildrenProp } from '@/types'
import { RootStore } from './rootStore'

const rootStore = new RootStore()

export const StoreContext = createContext(rootStore)

export function StoreProvider({ children }: ChildrenProp) {
	return (
		<StoreContext.Provider value={rootStore}>
			{children}
		</StoreContext.Provider>
	)
}

export function useStore() {
	return useContext(StoreContext)
}
