import LogoImg from "../../assets/logo.svg";

import * as Styled from "./styles";

export function Header() {
  return (
    <Styled.Container>
      <Styled.Content>
       <img src={LogoImg} alt="dt money" />
       <button type='button'>
         Nova transação
       </button>
      </Styled.Content>
    </Styled.Container>
  )
}