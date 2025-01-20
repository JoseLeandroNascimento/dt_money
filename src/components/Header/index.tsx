import { HeaderContainer, HeaderContent, NewTransactionButton } from "./style";
import logo from "../../assets/logo.svg";

export function Header(){

    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logo} />
                <NewTransactionButton>Nova transação</NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}