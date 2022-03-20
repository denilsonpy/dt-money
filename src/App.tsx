import Modal from "react-modal";
import { useState } from "react";
import { GlobalStyles } from "./styles/global";
import { TransactionsProvider } from './hooks/useTransactions';

import { Header } from "./components/Header";
import { Dashboard } from "./components/Dashboard";
import { NewTransactionModal } from "./components/NewTransactionModal";

Modal.setAppElement("#root");

export function App() {
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] =
    useState(false);

  function handleOpenNewTransactionModal() {
    SetIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    SetIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionsProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      <GlobalStyles />
    </TransactionsProvider>
  );
}
