import { HeaderContainer, Logo, Menu } from "./style";
import logo from "../../assets/movies-center.svg"
import { CgSearch } from "react-icons/cg"
import { InputSearch } from "./InputSearch";

interface HeaderProps {
    children: JSX.Element
}

export function Header({children}: HeaderProps) {
    return (
        <HeaderContainer>
            <Logo src={logo}/>

            <Menu>
                <ul>
                    <li>Início</li>
                    <li>Em alta</li>
                    <li>Categorias</li>
                </ul>
            </Menu>

            {/* <InputSearch/> */}
            {children}
        </HeaderContainer>
    )
}