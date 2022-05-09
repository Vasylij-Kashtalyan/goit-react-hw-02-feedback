import PropTypes from 'prop-types';

function Notiffication({message}) {
    return (
      <p>{message}</p>  
    );
}

Notification.propTypes = {
    title: PropTypes.string.isRequired,
};

export default Notiffication;