import PropTypes from 'prop-types';
import Transaction from './Transaction';
import css from './TransactionHistory.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={css['transaction-history']}>
      <thead className={css['transaction-header']}>
        <tr>
          <th className={css['header-item']}>Type</th>
          <th className={css['header-item']}>Amount</th>
          <th className={css['header-item']}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => (
          <Transaction
            key={item.id}
            type={item.type}
            amount={item.amount}
            currency={item.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.array.isRequired,
};
