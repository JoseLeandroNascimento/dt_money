import { ArrowCircleDown, ArrowCircleUp, CurrencyCircleDollar } from "@phosphor-icons/react";
import { useSummary } from "../../hooks/UseSummary";
import { priceFormatter } from "../../utils/formatter";
import { SummaryCard, SummaryContainer } from "./style";

export function Summary() {

   const summary = useSummary()

    return <SummaryContainer>


        <SummaryCard>
            <header>
                <span>Entradas</span>
                <ArrowCircleUp size={32} color="#00b37e" />

            </header>

            <strong>{priceFormatter.format(summary.income)}</strong>
        </SummaryCard>
        <SummaryCard>
            <header>
                <span>Saídas</span>
                <ArrowCircleDown size={32} color="#f75a68" />

            </header>

            <strong>{priceFormatter.format(summary.outcome)}</strong>
        </SummaryCard>

        <SummaryCard variants="green">
            <header>
                <span>Total</span>
                <CurrencyCircleDollar size={32} color="#fff" />

            </header>

            <strong>{priceFormatter.format(summary.total)}</strong>
        </SummaryCard>
    </SummaryContainer>
}