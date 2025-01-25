import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionContexType {
    transactions: Transaction[],
    fetchTransactions: (query?: string) => Promise<void>

}

export interface Transaction {
    id: number,
    description: string,
    type: "income" | "outcome",
    price: number,
    category: string,
    createAt: string
}

export const TransactionContext = createContext<TransactionContexType>({} as TransactionContexType)

interface TransactionProviderProps {
    children: ReactNode,
}

export function TransactionProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string) {

        const url = new URL("http://localhost:3000/transactions")

        if (query) {
            url.searchParams.append("q", query)
        }

        const response = await fetch(url)
        const data = await response.json()

        setTransactions(data)
    }

    useEffect(() => {
        fetchTransactions()
    }, [])



    return (

        <TransactionContext.Provider value={{ transactions, fetchTransactions }}>
            {children}
        </TransactionContext.Provider>
    )
}