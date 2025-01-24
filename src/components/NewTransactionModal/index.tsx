
import * as Dialog from "@radix-ui/react-dialog"
import { CloseButton, Content, Overlay, TransactionType, TransactionTypeButton } from "./style"
import { ArrowCircleDown, ArrowCircleUp, X } from "@phosphor-icons/react"
import * as z from "zod"
import { Controller, useForm } from "react-hook-form"

const newTransactionModalShema = z.object({
    description: z.string(),
    price: z.number(),
    category: z.string(),
    type: z.enum(["income", "outcome"])
})

type NewTransactionModalInputs = z.infer<typeof newTransactionModalShema>

export function NewTransactionModal() {

    const {
        control,
        register,
        handleSubmit,
        formState: {
            isSubmitting
        }
    } = useForm<NewTransactionModalInputs>()


    function handleCreateNewTransaction(data: NewTransactionModalInputs) {
        console.log(data);

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
                        render={({field}) => {
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