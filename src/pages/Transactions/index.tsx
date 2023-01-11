import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { TransactionContext } from '../../contexts/TransactionsContext'
import { dateFormatter, priceFormatter } from '../../utils/formatter'
import { SearchForm } from './components/SearchForm'
import { useContextSelector } from 'use-context-selector'
import {
  PriceHightlight,
  TransactionContainer,
  TransactionTable,
} from './styles'

export function Transaction() {
  const transactions = useContextSelector(
    TransactionContext,
    (context) => context.transactions,
  )

  return (
    <div>
      <Header />
      <Summary />

      <TransactionContainer>
        <SearchForm />
        <TransactionTable>
          <tbody>
            {transactions.map((item) => (
              <tr key={item.id}>
                <td width="50%">{item.description}</td>
                <td>
                  <PriceHightlight variant={item.type}>
                    {item.type === 'outcome' && '- '}
                    {priceFormatter.format(item.price)}
                  </PriceHightlight>
                </td>
                <td>{item.category}</td>
                <td>{dateFormatter.format(new Date(item.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </TransactionTable>
      </TransactionContainer>
    </div>
  )
}
