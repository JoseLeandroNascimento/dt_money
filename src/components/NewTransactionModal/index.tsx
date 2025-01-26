
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react"
import * as Dialog from "@radix-ui/react-dialog"
import { Controller, useForm } from "react-hook-form"
import { useContextSelector } from "use-context-selector"
import * as z from "zod"
import { TransactionContext } from "../../contexts/TransactionsContext"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style"

const newTransactionModalShema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(["income", "outcome"])
})

type NewTransactionModalInputs = z.infer<typeof newTransactionModalShema>

export function NewTransactionModal() {

    const createTransaction = useContextSelector(TransactionContext, (context) => {
        return context.createTransaction
    })

    const {
        control,
        register,
        handleSubmit,
        formState: {
            isSubmitting
        },
        reset
    } = useForm<NewTransactionModalInputs>()


    async function handleCreateNewTransaction(data: NewTransactionModalInputs) {

        createTransaction(data)

        reset()

    }

    return (
        <Dialog.Portal>
            <Overlay />
            <Content>
                <Dialog.Title>Nova transação</Dialog.Title>
                <CloseButton>
                    <X />
                </CloseButton>

                <form onSubmit={handleSubmit(handleCreateNewTransaction)}>
                    <input type="text" placeholder="Descrição" required {...register("description")} />
                    <input type="number" placeholder="Preço" required {...register("price", { valueAsNumber: true })} />
                    <input type="text" placeholder="Categoria" required {...register("category")} />

                    <Controller
                        control={control}
                        name="type"
                        render={({ field }) => {
                            return (
                                <TransactionType onChange={field.onChange} value={field.value}>
                                    <TransactionTypeButton value="income" variants="income">
                                        <ArrowCircleUp size={24} />
                                        Entrada
                                    </TransactionTypeButton>
                                    <TransactionTypeButton value="autcome" variants="outcome">
                                        <ArrowCircleDown size={24} />
                                        Saída
                                    </TransactionTypeButton>
                                </TransactionType>
                            )
                        }}
                    />
                    <button type="submit">
                        Cadastrar
                    </button>
                </form>
            </Content>
        </Dialog.Portal>
    )
}