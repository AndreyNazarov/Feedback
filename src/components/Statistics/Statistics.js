import s from "./Statistics.css";
import PropTypes from "prop-types";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  return (
    <div className={s.wrapper}>
      <ul>
        <li key="good" className={s.item}>
          <span>good: {good}</span>
        </li>
        <li key="neutral" className={s.item}>
          <span>neutral: {neutral}</span>
        </li>
        <li key="bad" className={s.item}>
          <span>bad: {bad}</span>
        </li>
        <li key="total" className={s.item}>
          <span>total: {total}</span>
        </li>
        <li key="positiveFeedback" className={s.item}>
          <span>positiveFeedback: {positiveFeedback}%</span>
        </li>
      </ul>
    </div>
  );
};

Statistics.propTypes = {
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
