import styled, { css } from "styled-components";

export const SummaryContainer = styled.div`

    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: grid;
    grid-template-columns: repeat(3,1fr);
    gap: 2rem;
    margin-top: -5rem;

`

interface SummaryCardProps {
    variants?: "green"
}

export const SummaryCard = styled.div<SummaryCardProps>`

    background-color: ${props => props.theme["gray-600"]};
    border-radius: 6px;
    padding: 2rem;

    header{

        display: flex;
        align-items: center;
        justify-content: space-between;

        color:${props => props.theme["gray-300"]};
    }

    strong{

        display: block;
        margin-top: 1rem;
        font-size: 2rem;
    }

    ${props => props.variants === "green" && css`
    
        background: ${props.theme["green-700"]};
        
    `}

`

interface PriceHighlightProps{
    variants?: "income" | "outcome"
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
    color: ${props=>props.variants === "income" ? props.theme["green-300"] : props.theme["red-300"]};
`