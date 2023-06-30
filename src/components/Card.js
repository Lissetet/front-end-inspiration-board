import { Icon } from '@iconify/react';
import { useState, useEffect, useRef } from 'react';
import TextareaAutosize from 'react-textarea-autosize';

const Card = (props) => {
  const {
    id,
    message,
    likes_count,
    date_created,
    handleLike,
    handleDelete,
    handleEdit
  } = props;

  const formattedDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: 'numeric', year: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  };

  const [textEditable, setTextEditable] = useState(false);
  const [cardText, setCardText] = useState(message);

  const handleChange = (e) => {
    setCardText(e.target.value);
  }

  const inputRef = useRef(null);

  useEffect(() => {
    let len = inputRef.current.value.length;
    inputRef.current.setSelectionRange(len, len);
    inputRef.current.focus();
  }, [textEditable]);


  return (
    <article className="bg-primary bg-opacity-50 p-4 rounded-lg">
      <div className="w-72 flex relative h-full">
        <button
          onClick={()=>setTextEditable(!textEditable)}
          disabled={textEditable}
          className={`text-lg absolute bottom-0 right-0 z-50 ${textEditable ? 'hidden' : ''}`}
        >
          <Icon icon="mdi:pencil"/>
        </button>
        <button
          disabled={!textEditable}
          onClick={()=> {
            handleEdit(id, cardText);
            setTextEditable(!textEditable);
          }}
          className={`text-lg absolute bottom-0 right-0 z-50 ${textEditable ? '' : 'hidden'}`}
        >
          <Icon icon="mdi:check"/>
        </button>
        <button
          className="text-lg absolute top-0 right-0 z-50"
          onClick={()=>handleDelete(id)}
        >
          <Icon icon="mdi:trash" />
        </button>
        <span className="absolute text-xs top-0 w-full font-bold">
          {formattedDate(date_created)}
        </span>
        <TextareaAutosize
          minRows={1}
          maxRows={10}
          ref={inputRef}
          onChange={handleChange}
          className="font-bold mx-auto text-3xl text-center py-16 px-4 self-center w-full bg-transparent  resize-none"
          disabled={!textEditable}
          value={cardText}
        />
        <div className="absolute bottom-0 w-full flex gap-2">
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
