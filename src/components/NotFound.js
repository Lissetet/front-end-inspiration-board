import { Player } from '@lottiefiles/react-lottie-player';
import {Icon} from '@iconify/react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const NotFound = ({title='Page not found!'}) => {
  const navigate = useNavigate();
  return (
    <section className="flex flex-col items-center">
      <span className="flex items-center gap-4">
        <Icon icon="mdi:alert-circle" className="text-5xl"/>
        <h1>{title}</h1>
      </span>
      <Player
        autoplay
        loop
        src="https://assets2.lottiefiles.com/private_files/lf30_cgfdhxgx.json"
        className="w-96 mb-10"
      />
      <button 
        className="btn btn-default self-center mt-14" 
        onClick={() => navigate(-1)}
      >
        Go Back
      </button>
    </section>
  );
}

NotFound.propTypes = {
  title: PropTypes.string,
}

export default NotFound;