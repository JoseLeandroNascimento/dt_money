import { createContext, ReactNode, useEffect, useState } from "react";

interface TransactionContexType {
    transactions: Transaction[]
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
    children: ReactNode
}

export function TransactionProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        fetch("http://localhost:3000/transactions").then(response => {
            return response.json()
        }).then(data => {
            setTransactions(data)
        })
    }, [])

    return (

        <TransactionContext.Provider value={{ transactions }}>
            {children}
        </TransactionContext.Provider>
    )
}