import { zodResolver } from "@hookform/resolvers/zod";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useForm } from "react-hook-form";
import { useContextSelector } from "use-context-selector";
import * as z from "zod";
import { TransactionContext } from "../../../../contexts/TransactionsContext";
import { SearchFormContainer } from "./style";
import { memo } from "react";


const searchFormSchema = z.object({
    query: z.string()
})

type SearchFormInputs = z.infer<typeof searchFormSchema>

function SearchFormComponet() {


    const fetchTransactions = useContextSelector(TransactionContext, (context) => {
        return context.fetchTransactions
    })

    const {
        register,
        handleSubmit,
        formState: {
            isSubmitting
        } }
        = useForm<SearchFormInputs>({
            resolver: zodResolver(searchFormSchema)
        })

    async function handleSearchTransactions(data: SearchFormInputs) {

        await fetchTransactions(data.query)

    }

    return (
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
            <input
                type="text"
                placeholder="Busque por transações"
                {...register("query")}
            />
            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar
            </button>
        </SearchFormContainer>
    )
}

export const SearchForm = memo(SearchFormComponet)