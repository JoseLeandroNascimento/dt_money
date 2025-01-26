import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface TransactionContexType {
    transactions: Transaction[],
    fetchTransactions: (query?: string) => Promise<void>,
    createTransaction: (data:CreateTransactionInput)=>Promise<void>,

}

export interface Transaction {
    id: number,
    description: string,
    type: "income" | "outcome",
    price: number,
    category: string,
    createdAt: string
}

export const TransactionContext = createContext<TransactionContexType>({} as TransactionContexType)

interface TransactionProviderProps {
    children: ReactNode,
}

interface CreateTransactionInput{
    description: string,
    price: number,
    category: string,
    type: "income" | "outcome"
}


export function TransactionProvider({ children }: TransactionProviderProps) {

    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function fetchTransactions(query?: string) {

        const response = await api.get("/transactions", {
            params: {
                _sort: "createdAt",
                _order: "desc",
                q: query
            }
        })

        setTransactions(response.data)
    }

    async function createTransaction(data: CreateTransactionInput) {

        const { description, category, price, type } = data

        const response = await api.post("/transactions", {
            description,
            category,
            price,
            type,
            createdAt: new Date()
        })

        setTransactions((values)=>[response.data,...values])
    }

    useEffect(() => {
        fetchTransactions()
    }, [])



    return (

        <TransactionContext.Provider value={{ transactions, fetchTransactions,createTransaction }}>
            {children}
        </TransactionContext.Provider>
    )
}