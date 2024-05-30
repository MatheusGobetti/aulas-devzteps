import { Vaso } from '../components/Vaso'
import { VasoStyled } from '../components/VasoStyled.tsx'

export const QuartoDeCasal = () => {

  return (
    <div style={{ border: "1px solid black", padding: "20px" }}>
      <h1>Quarto de Casal</h1>
      <div>
        <h2>Vasos com CSS puro:</h2>
        <Vaso color="primary" />
        <Vaso color="secondary" />
        <Vaso color="danger" />
        <Vaso color="warning" />
        <Vaso color="neutral" />
      </div>

      <div>
        <h2>Vasos com Styled Components:</h2>
        <VasoStyled variant="primary" />
        <VasoStyled variant="secondary" />
        <VasoStyled variant="danger" />
        <VasoStyled variant="warning" />
        <VasoStyled variant="neutral" />
      </div>
    </div>
  )
}

