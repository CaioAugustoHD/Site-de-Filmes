import { HeaderContainer, Logo, Menu } from "./style";
import logo from "../../assets/movies-center.svg"
import { CgSearch } from "react-icons/cg"

export function Header() {
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

            <CgSearch size='1.1em'/>
        </HeaderContainer>
    )
}