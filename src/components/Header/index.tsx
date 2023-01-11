import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'
import * as Dialog from '@radix-ui/react-dialog'

import logoSVG from '../../assets/logo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { useState } from 'react'

export function Header() {
  const [modalOpenned, setModalOpenned] = useState(false)

  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoSVG} alt="" />

        <Dialog.Root open={modalOpenned} onOpenChange={setModalOpenned}>
          <Dialog.Trigger asChild>
            <NewTransactionButton>Nova transação</NewTransactionButton>
          </Dialog.Trigger>

          <NewTransactionModal
            closeModalEvent={() => {
              setModalOpenned(false)
            }}
          />
        </Dialog.Root>
      </HeaderContent>
    </HeaderContainer>
  )
}
