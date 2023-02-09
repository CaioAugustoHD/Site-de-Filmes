import { useState } from "react"
import { Header } from "../../components/Header"
import { InputSearch } from "../../components/Header/InputSearch"
import { MoviesList } from "../../components/MoviesList"
import { SearchProvider } from "../../contexts/SearchContext"

export function Search() {

    
    return (
        <SearchProvider>
            <Header>
                <InputSearch/>
            </Header>
            
            <MoviesList/>
        </SearchProvider>
    )
}