import LogoImg from "../../assets/logo.svg";

import * as Styled from "./styles";

type HeaderProps = {
  onOpenNewTransactionModal: () => void;
}

export function Header({ onOpenNewTransactionModal }: HeaderProps) {
  return (
    <Styled.Container>
      <Styled.Content>
        <img src={LogoImg} alt="dt money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova transação
        </button>

      </Styled.Content>
    </Styled.Container>
  );
}
