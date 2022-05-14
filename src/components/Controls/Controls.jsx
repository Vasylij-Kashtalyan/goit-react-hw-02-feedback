import PropTypes from 'prop-types';
import s from "./Controls.module.css"

function Controls({ options, onLeaveFeedback }) {
  
    return (
      <ul>
        {options.map(option => {
          return (
              <button
                  key={option}
                  className={s.button}
                  name={option}
                  type='button'
                  onClick={() => onLeaveFeedback(option)}>
                  {option}
              </button>
          )
        })}
      </ul>
    );
}

Controls.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
}

export default Controls;