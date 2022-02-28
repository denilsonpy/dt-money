import Modal from "react-modal";

import IncomeSvg from "../../assets/income.svg";
import OutcomeSvg from "../../assets/outcome.svg";
import CloseSvg from "../../assets/close.svg";

import * as S from "./styles";
import { useState } from "react";
import { api } from '../../services/axios';

type NewTransactionModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
};

export function NewTransactionModal({
  isOpen,
  onRequestClose,
}: NewTransactionModalProps) {
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState("deposit");

  function handleCreateNewTransaction(event: React.FormEvent) {
    event.preventDefault();

    const data = {
      title,
      value,
      category,
      type
    }

    api.post("transactions", data)
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
      >
        <img src={CloseSvg} alt="Fechar modal" />
      </button>
      <S.Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input
          type="text"
          placeholder="Titulo"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />

        <input
          type="number"
          placeholder="Valor"
          value={value}
          onChange={(event) => setValue(Number(event.target.value))}
        />

        <S.TransactionTypeContainer>
          <S.RadioBox
            type="button"
            onClick={() => {
              setType("deposit");
            }}
            isActive={type === "deposit"}
            activeColor="green"
          >
            <img src={IncomeSvg} alt="Entrada" />
            <span>Entrada</span>
          </S.RadioBox>
          <S.RadioBox
            type="button"
            onClick={() => {
              setType("withdraw");
            }}
            isActive={type === "withdraw"}
            activeColor="red"
          >
            <img src={OutcomeSvg} alt="Saida" />
            <span>Saida</span>
          </S.RadioBox>
        </S.TransactionTypeContainer>

        <input
          type="text"
          placeholder="Categoria"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </S.Container>
    </Modal>
  );
}