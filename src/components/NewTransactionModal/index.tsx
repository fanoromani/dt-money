import * as Dialog from "@radix-ui/react-dialog";

import {
  CloseButton,
  Content,
  Overlay,
  TransactionType,
  TransactionTypeButton,
} from "./styles";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Dialog.Title>New Transaction</Dialog.Title>
        <CloseButton>
          <X size={24} />
        </CloseButton>
        <form action="">
          <input type="text" placeholder="Description" required />
          <input type="number" placeholder="Price" required />
          <input type="text" placeholder="Category" required />

          <TransactionType>
            <TransactionTypeButton variant="deposit" value="deposit">
              <ArrowCircleUp size={24} />
              Deposit
            </TransactionTypeButton>
            <TransactionTypeButton variant="withdraw" value="withdraw">
              <ArrowCircleDown size={24} />
              Withdraw
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Register</button>
        </form>
      </Content>
    </Dialog.Portal>
  );
}
