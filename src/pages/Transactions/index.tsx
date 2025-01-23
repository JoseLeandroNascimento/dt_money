import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { PriceHighlight } from "../../components/Summary/style";
import { SearchForm } from "./components/SearchForm";
import { TransactionalContainer, TransactionalTable } from "./style";


interface Transaction {
    id: number,
    description: string,
    type: "income" | "outcome",
    price: number,
    category: string,
    createAt: string
}

export function Transactions() {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        fetch("http://localhost:3000/transactions").then(response => {
            return response.json()
        }).then(data => {
            setTransactions(data)
        })
    }, [])

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