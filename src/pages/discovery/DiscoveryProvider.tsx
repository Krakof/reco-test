import {createContext, type FC, type PropsWithChildren, useContext, useState} from "react";

export const FILTER_NAMES = {
    APP_NAME: 'appName',
    APP_CATEGORY: 'categoryName',
} as const

const INITIAL_STATE = {
    [FILTER_NAMES.APP_CATEGORY]: '',
    [FILTER_NAMES.APP_NAME]: '',
}

export type FilterName = (typeof FILTER_NAMES)[keyof typeof FILTER_NAMES]

export type DiscoveryContextType = {
    filters: typeof INITIAL_STATE;
    handleUpdateFilter(name: FilterName, value: string): void
}


const DiscoveryContext = createContext<DiscoveryContextType | undefined>(undefined)

export const DiscoveryProvider: FC<PropsWithChildren> = ({children}) => {
    const [filters, setFilters] = useState(INITIAL_STATE)

    const handleUpdateFilter = (name: FilterName, value: string) => {
        setFilters(prev => ({ ...prev, [name]: value }))
    }

    const value = {
        filters,
        handleUpdateFilter,
    }
    return <DiscoveryContext.Provider value={value}>{children}</DiscoveryContext.Provider>
}

export const useDiscoveryContext = () => {
    const ctx = useContext(DiscoveryContext);

    if (ctx === undefined) {
        throw new Error('useDiscoveryProvider must be used within DiscoveryProvider')
    }

    return ctx;
}