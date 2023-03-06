import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export default function Transaction({ type, amount, currency }) {
  return (
    <tr className={css['transaction-row']}>
      <td className={css['transaction-detail']}>{type}</td>
      <td className={css['transaction-detail']}>{amount}</td>
      <td className={css['transaction-detail']}>{currency}</td>
    </tr>
  );
}

Transaction.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};
