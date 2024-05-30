import { VasoContainer, VasoVariant } from "./Vaso.styles";

interface VasoProps {
  variant?: VasoVariant;
}

export const VasoStyled = ({ variant = 'neutral' }: VasoProps) => {
  return (
    <VasoContainer variant={variant}>Vaso</VasoContainer>
  )
}
