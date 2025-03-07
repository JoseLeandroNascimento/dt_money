import { useContextSelector } from "use-context-selector";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight } from "../../components/Summary/style";
import { TransactionContext } from "../../contexts/TransactionsContext";
import { dateFormatter, priceFormatter } from "../../utils/formatter";
import { SearchForm } from "./components/SearchForm";
import { TransactionalContainer, TransactionalTable } from "./style";


export function Transactions() {

    const transactions = useContextSelector(TransactionContext, (context) => {
        return context.transactions
    })

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
                                            {transaction.type === "outcome" && "- "}
                                            {priceFormatter.format(transaction.price)}
                                        </PriceHighlight>
                                    </td>
                                    <td>{transaction.category}</td>
                                    <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                                </tr>
                            ))
                        }

                    </tbody>
                </TransactionalTable>
            </TransactionalContainer>
        </div>
    )
}