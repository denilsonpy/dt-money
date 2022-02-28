import * as S from './styles';

import IncomeSvg from "../../assets/income.svg"
import OutcomeSvg from "../../assets/outcome.svg"
import TotalSvg from "../../assets/total.svg"


export function Summary() {
  return (
    <S.Container>
      <div>
        <header>
          Entradas
          <img src={IncomeSvg} alt="Entradas" />
        </header>
        <strong>R$ 1000</strong>
      </div>
      <div>
        <header>
          Saidas
          <img src={OutcomeSvg} alt="Saidas" />
        </header>
        <strong>- R$ 500</strong>
      </div>
      <div className='highlight-background'>
        <header>
          Total
          <img src={TotalSvg} alt="Total" />
        </header>
        <strong>R$ 500</strong>
      </div>
    </S.Container>
  )
}