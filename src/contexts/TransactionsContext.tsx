import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

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

        const response = await api.get("/transactions",{
            params: {
                q: query
            }
        })
       

        setTransactions(response.data)
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