import PropTypes from 'prop-types';

function Notiffication({message}) {
    return (
      <p>{message}</p>  
    );
}

Notification.propTypes = {
    message: PropTypes.string.isRequired,
};

export default Notiffication;