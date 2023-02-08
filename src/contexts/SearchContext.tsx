import { createContext, ReactNode } from "react"
import { useSearchParams } from "react-router-dom"

interface SearchProviderProps {
    children: ReactNode
}

// REMOVER O ANY DA TIPAGEM
interface SearchContextType {
    searchParams: URLSearchParams,
    setSearchParams: (q: any) => void
}

export const SearchContext = createContext({} as SearchContextType)

export function SearchProvider({children}: SearchProviderProps){

    const [searchParams, setSearchParams] = useSearchParams()

    return (
        <SearchContext.Provider value={{searchParams, setSearchParams}}>
            {children}
        </SearchContext.Provider>
    )
}