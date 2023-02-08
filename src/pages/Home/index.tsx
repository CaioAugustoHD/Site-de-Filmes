import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { InputSearch } from "../../components/Header/InputSearch";
import { HighlightMovie } from "../../components/HighlightMovie";
import { SearchProvider } from "../../contexts/SearchContext";

export function Home() {


    // inputValue.length > 0
    //     ? navigate("/search")
    //     : null


    return (
        <>
        <SearchProvider>
            <Header>
                <InputSearch/>
            </Header>
        </SearchProvider>
        <HighlightMovie/>
        </>
    )

}