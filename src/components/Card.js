import { Icon } from '@iconify/react';

const Card = ({id, message, likes_count, date_created}) => {
  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div className="bg-primary bg-opacity-50 w-72 rounded-lg flex relative">
      <Icon icon="mdi:pencil" className="text-lg absolute top-0 left-0 m-4"/>
      <Icon icon="mdi:trash" className="text-lg absolute top-0 right-0 m-4"/>
      <span className="absolute text-center text-xs top-0 w-full mt-4 font-bold">
        {formattedDate(date_created)}
      </span>
      <span className="font-bold mx-auto text-3xl text-center py-16 px-4">{message}</span>
      <div className="absolute bottom-0 w-full py-2 flex gap-2 justify-center">
        <button>
          <Icon icon="typcn:minus" className="self-center"/>
        </button>
        <span className="font-bold">{likes_count}</span>
        <Icon icon="mdi:heart" className="text-lg"/>
        <button>
          <Icon icon="typcn:plus" className="self-center"/> 
        </button>
      </div>
    </div>
  );
}

export default Card;
