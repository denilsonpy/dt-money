import IncomeSvg from "../../assets/income.svg";
import OutcomeSvg from "../../assets/outcome.svg";
import TotalSvg from "../../assets/total.svg";

import { useTransactions } from '../../hooks/useTransactions';

import * as S from './styles';

export function Summary() {
  const { transactions } = useTransactions();

  const summary = transactions.reduce((acc, transaction) => {
    console.log(transaction)
    if (transaction.type === "deposit") {
      acc.deposit += transaction.amount;
      acc.total += transaction.amount;
    } else {
      acc.withdraws += transaction.amount;
      acc.total -= transaction.amount;
    }
    return acc;
  }, {
    deposit: 0,
    withdraws: 0,
    total: 0,
  })

  return (
    <S.Container>
      <div>
        <header>
          Entradas
          <img src={IncomeSvg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.deposit)}
        </strong>
      </div>
      <div>
        <header>
          Saidas
          <img src={OutcomeSvg} alt="Saidas" />
        </header>
        <strong>
          -{new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.withdraws)}
        </strong>
      </div>
      <div className='highlight-background'>
        <header>
          Total
          <img src={TotalSvg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL",
          }).format(summary.total)}
        </strong>
      </div>
    </S.Container>
  )
}