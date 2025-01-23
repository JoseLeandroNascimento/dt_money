import { useContext } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight } from "../../components/Summary/style";
import { SearchForm } from "./components/SearchForm";
import { TransactionalContainer, TransactionalTable } from "./style";
import { TransactionContext } from "../../contexts/TransactionsContext";




export function Transactions() {

    const { transactions } = useContext(TransactionContext)

    return (
        <div>
            <Header />
            <Summary />
            <TransactionalContainer>
                <SearchForm>

                </SearchForm>
                <TransactionalTable>
                    <tbody>
                        {
                            transactions.map(transaction => (
                                <tr key={transaction.id}>
                                    <td width="50%">{transaction.description}</td>
                                    <td>
                                        <PriceHighlight variants={transaction.type}>
                                            {transaction.price}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{transaction.createAt}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </TransactionalTable>
            </TransactionalContainer>
        </div>
    )
}