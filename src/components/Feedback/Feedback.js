import s from "./Feedback.css";
import PropTypes from "prop-types";

const Feedback = ({ buttons, onHandleIncrement }) => {
  return (
    <div className="wrapper">
      <ul className={s.list}>
        {buttons.map(({ id, value }) => {
          return (
            <li className={s.item} key={id}>
              <button
                value={value}
                onClick={(evt) => {
                  onHandleIncrement(evt);
                }}
              >
                {value}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Feedback.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      value: PropTypes.string,
    })
  ),
};

export default Feedback;
