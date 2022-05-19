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
                  {option.toUpperCase()}
              </button>
          )
        })}
      </ul>
    );
}
Controls.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}

// ЯК ОПИСАТИ МАСИВ ЧОГО, ПОСТІЙНО ВИДАЄ ПОМИЛКУ В КОНСОЛІ?
// Controls.propTypes = {
//   options: PropTypes.arrayOf(
//     PropTypes.shape({
//       option: PropTypes.object.isRequired,
//     }),
//   ),
//   onLeaveFeedback: PropTypes.func.isRequired,
// }

export default Controls;