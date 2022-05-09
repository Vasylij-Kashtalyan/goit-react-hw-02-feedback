import PropTypes from "prop-types"

function Statistics({good, neutral, bad, countTotalFeedback, countPositiveFeedbackPercentage,}) {
    return (
        <ul>
          <li>Good:{good}</li>
          <li>Neutral:{neutral}</li>
          <li>Bad:{bad}</li>
          <li>Total:{countTotalFeedback}</li>
          <li>Positive Feedback:{countPositiveFeedbackPercentage} %</li>
        </ul>
    );
}

Statistics.propTypes = {
    items: PropTypes.object,
};
export default Statistics;