import { Icon } from "@iconify/react";
import PropTypes from 'prop-types';

const ErrorAlert = ({error="An unknown error occurred."}) => {
  return (
    <section>
      <h1>Error</h1>
      <div className="flex bg-red-500 p-4 mt-10 w-fit rounded items-center gap-2">
        <Icon icon="mdi:alert-circle" className="text-xl" />
        <p className="">{error} Please try again later.</p>
      </div>
    </section>
  )
};

ErrorAlert.propTypes = {
  error: PropTypes.string
};

export default ErrorAlert;