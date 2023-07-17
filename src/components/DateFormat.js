import PropTypes from 'prop-types';

const DateFormat = ({ date, className }) => {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return <span className={className}>{formattedDate}</span>;
};

DateFormat.propTypes = {
  date: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default DateFormat;
