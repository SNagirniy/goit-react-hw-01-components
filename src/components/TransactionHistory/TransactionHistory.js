import PropTypes from 'prop-types';
import s from './TransactionHistory.module.css';

function TransactionHistory({transactions}) { 
    return (
<table className={s.transactionHistory}>
  <thead className={s.thead}>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>

    <tbody className={s.tbody}>
       { transactions.map(({id, type, amount, currency}) => (
    <tr key={id} className={s.tr}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
    ))}
    
  </tbody>
</table>)

};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired,
};

export default TransactionHistory;