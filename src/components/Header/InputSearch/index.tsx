import { useContext, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchContext } from '../../../contexts/SearchContext';
import { Input, InputContainer } from "./style";

export function InputSearch() {

    const navigate = useNavigate()
    const {searchParams, setSearchParams} = useContext(SearchContext)

    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if(inputRef.current?.value.length == 1 ){
            navigate({ pathname: '/search', search: `?${searchParams}` }) 
            inputRef.current.focus()
        }        
        if(inputRef.current?.value.length == 0){
            navigate('/')
        }
    },[searchParams])

    return (
        <InputContainer>
            <Input placeholder="Pesquisar filme..." 
                required
                title=''
                type="text"
                ref={inputRef}
                value={searchParams.get('q')?.toString()}
                onChange={(e) => setSearchParams({ q: e.target.value})}
            />
            <div className="icon">
                <svg viewBox="0 0 512 512" className="ionicon" xmlns="http://www.w3.org/2000/svg">
                    <path strokeWidth="32" strokeMiterlimit="10" stroke="currentColor" fill="none" d="M221.09 64a157.09 157.09 0 10157.09 157.09A157.1 157.1 0 00221.09 64z"></path>
                    <path d="M338.29 338.29L448 448" strokeWidth="32" strokeMiterlimit="10" strokeLinecap="round" stroke="currentColor" fill="none"></path>
                </svg>
            </div>
        </InputContainer>
    )
}