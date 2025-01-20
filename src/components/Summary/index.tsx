import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar } from "@phosphor-icons/react";
import { SummaryCard, SummaryContainer } from "./style";

export function Summary(){

    return <SummaryContainer>
        <SummaryCard>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color="#00b37e"/>

            </header>

            <strong>R$ 17.400,0</strong>
        </SummaryCard>
        <SummaryCard>
            <header>
                <span>Saídas</span>
                <ArrowCircleDown size={32} color="#f75a68"/>

            </header>

            <strong>R$ 17.400,0</strong>
        </SummaryCard>

        <SummaryCard variants="green">
            <header>
                <span>Total</span>
                <CurrencyCircleDollar size={32} color="#fff"/>

            </header>

            <strong>R$ 17.400,0</strong>
        </SummaryCard>
    </SummaryContainer>
}