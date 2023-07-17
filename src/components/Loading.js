import PropTypes from 'prop-types';
import { Icon } from "@iconify/react";

const Loading = ({title}) => {
  return (
    <section>
      {title && <h1>{title}</h1>}
      <Icon
        icon="eos-icons:bubble-loading"
        className="text-9xl mx-auto mt-20"
      />
    </section>
  );
}

Loading.propTypes = {
  title: PropTypes.string,
}

export default Loading;