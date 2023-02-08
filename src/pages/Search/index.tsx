import { useState } from "react"
import { Header } from "../../components/Header"
import { InputSearch } from "../../components/Header/InputSearch"
import { SearchProvider } from "../../contexts/SearchContext"

export function Search() {

    
    return (
        <SearchProvider>
            <Header>
                <InputSearch/>
            </Header>
            filmes pesquisados
        </SearchProvider>
    )
}