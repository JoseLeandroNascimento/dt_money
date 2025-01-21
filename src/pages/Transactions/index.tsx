import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight } from "../../components/Summary/style";
import { TransactionalContainer, TransactionalTable } from "./style";


export function Transactions() {

    return (
        <div>
            <Header />
            <Summary />
            <TransactionalContainer>
                <TransactionalTable>
                    <tbody>
                        <tr>
                            <td width="50%">Desenvovimento de site</td>
                            <td><PriceHighlight  variants="icome">R$ 12.000,00</PriceHighlight></td>
                            <td>Venda</td>
                            <td>13/04/2024</td>
                        </tr>

                        <tr>
                            <td width="50%">Hamburger</td>
                            <td><PriceHighlight variants="outcome">- R$ 590,00</PriceHighlight></td>
                            <td>Alimentação</td>
                            <td>10/04/2024</td>
                        </tr>

                    </tbody>
                </TransactionalTable>
            </TransactionalContainer>
        </div>
    )
}