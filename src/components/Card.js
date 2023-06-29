import { Icon } from '@iconify/react';

const Card = (props) => {
  const {
    id, 
    message, 
    likes_count, 
    date_created, 
    handleLike, 
    handleDelete
  } = props;

  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <article className="bg-primary bg-opacity-50 p-4 rounded-lg">
      <div className="w-72 flex relative h-full">
        <button className="text-lg absolute top-0 left-0">
          <Icon icon="mdi:pencil"/>
        </button>
        <button 
          className="text-lg absolute top-0 right-0"
          onClick={()=>handleDelete(id)}
        >
          <Icon icon="mdi:trash" />
        </button>
        <span className="absolute text-center text-xs top-0 w-full font-bold">
          {formattedDate(date_created)}
        </span>
        <span className="font-bold mx-auto text-3xl text-center py-16 px-4 self-center">
          {message}
        </span>
        <div className="absolute bottom-0 w-full flex gap-2 justify-center">
          <button onClick={()=>handleLike(id, true)}>
            <Icon icon="typcn:minus" className="self-center"/>
          </button>
          <span className="font-bold">{likes_count}</span>
          <Icon icon="mdi:heart" className="text-lg text-red-600"/>
          <button onClick={()=>handleLike(id)}>
            <Icon icon="typcn:plus" className="self-center"/> 
          </button>
        </div>
      </div>
    </article>
  );
}

export default Card;
